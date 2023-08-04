import express from 'express'
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cokkie from "cookie-parser";
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const app = express();
dotenv.config();
const PORT = 8000 || process.env.PORT;

//------------------------Middlewares--------------------------
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cokkie());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


const verifyToken = async (req, res, next) => {
  const token = req.cookies.admin_token;
  if (!token) {
    console.log("Not found cookies");
    return res.status(400).json({ error: "At First Login " });
  } else {
    try {
      const verify = await jwt.verify(token, process.env.JWT);
      if (verify) {
        console.log("verify Done");
        const data = await Admin.findOne({ email: verify.email });
        if (data) {
          req.userData = data;
          next();
        } else {
          return res.status(400).json({ error: "At First Login " });
        }
      } else {
        return res.status(400).json({ error: "At First Login " });
      }
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
};


//------------------------Connect Database--------------------------

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Data Base Connected ");
  })
  .catch((error) => {
    console.log(error);
  });


//------------------------Mongodb Models--------------------------

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  }
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  roll: {
    type: Number,
    require: true,
    unique: true,
  },
  domain: {
    type: String,
    require: true,
  },
  department: {
    type: String,
    require: true,
  },
  batch: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  isPaymentDone: {
    type: Boolean,
    default: false,
  },
});


adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});


const Admin = mongoose.model("Admin", adminSchema);
const User = mongoose.model("User", userSchema);


//------------------------Controllers--------------------------

//1.Register Controller
const register = async (req, res) => {
  try {
    const {
      password,
      cpassword,
      name,
      email,
      phone,
    } = req.body;
    if (
      !name ||
      !email ||
      !phone ||
      !password ||
      !cpassword
    ) {
      return res
        .status(400)
        .json({ error: "Fill required fields", success: false });
    }
    const userExist = await Admin.findOne({ email: email });
    const userExistPhone = await Admin.findOne({ phone: phone });
    if (userExist || userExistPhone) {
      return res
        .status(403)
        .json({ error: "User Already Exists", success: false });
    } else {
      const newUser = new Admin({
        password,
        cpassword,
        name,
        phone,
        email,
      });
      try {
        await newUser.save();
        return res
          .status(200)
          .json({ message: "Registration Done!", success: true });
      } catch (error) {
        return res.status(500).send({ error: error, success: false });
      }
    }
  } catch (error) {
    return res.status(500).send({ error: error, success: false });
  }
};


//2.Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await Admin.findOne({ email: email });
    if (!userExist) {
      return res.status(404).json({ error: "User Not Found" });
    } else {
      const verifyPass = await bcrypt.compare(password, userExist.password);
      if (verifyPass) {
        const token = jwt.sign(
          { id: userExist._id, email: userExist.email },
          process.env.JWT
        );
        const expirationDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
        const options = {
          expires: expirationDate,
          httpOnly: true,
        };
        return res.cookie("admin_token", token, options).status(201).json({
          msg: "Log In Done !",
          userName: userExist.name,
          token: token,
          cookie: "stored",
        });
      } else {
        return res.status(500).json({ error: "Invalid Details " });
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const userData = async (req,res)=>{
    try {
    const users = await User.find().exec();
    res.json(users);
        
    } catch (error) {
        res.status(200).json(error)
    } 
}

const membersData = async (req,res)=>{
    try {
    const users = await User.find({isPaymentDone:true});
    res.json(users);
    } catch (error) {
        res.status(200).json(error)
    } 
}

const logout = (req, res) => {
console.log('working');
  res.clearCookie("admin_token");
  res.status(200).json({ msg: "logout" });
};


//------------------------Routes--------------------------

app.post('/api/register',register)
app.post('/api/login',login)
app.get('/api/members',verifyToken,membersData)
app.get('/api/users',verifyToken,userData)
app.get("/api/logout", logout);


//------------------------Listen--------------------------

app.listen(PORT,()=>{
    console.log('Server Start At Port '+PORT);
})