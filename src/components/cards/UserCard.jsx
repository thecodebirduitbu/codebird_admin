import { Stack, HStack, Heading, Text, Button, Box } from "@chakra-ui/react";
import "./Card.css";
import { MdDelete } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
// import url from "../helper/helper";
import { Toaster, toast } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";


const UserCard = ({ name, email, phone, roll, dept, batch , id }) => {

  useEffect(() => {
    axios
      .get(`https://thecodebird-admin-server.vercel.app/api/user/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setupdate({
          name: response.data.name,
          email: response.data.email,
          dept: response.data.department,
          roll: response.data.roll,
          batch: response.data.batch,
          phone: response.data.phone,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  const [upmodalIsOpen, setupIsOpen] = useState(false);
  const [dlmodalIsOpen, setdlIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#fff",
      height: "21rem",
      width: "35rem",
    },
  };

  const [update, setupdate] = useState({
    name: "",
    email: "",
    dept: "",
    roll: "",
    batch: "",
    phone: "",
  });


  const handelUser = (e) => {
    const { name, value } = e.target;
    setupdate({ ...update, [name]: value });
  };


  const handleUpdate = async ()=>{
    try {
      const res = await axios.patch(`https://thecodebird-admin-server.vercel.app/api/update/https://thecodebird-admin-server.vercel.app`,update, {
        withCredentials: true,
      });
      if (res) {
        toast.success("Update Successfully!");
        setTimeout(() => {
          setdlIsOpen(false);
          window.location.reload();
        }, Math.floor(Math.random() * 1001) + 700);
      }
    } catch (error) {
      console.log("error");
    }
  }



  const handel = async ()=>{
    try {
      const res = await axios.delete(`https://thecodebird-admin-server.vercel.app/api/users/https://thecodebird-admin-server.vercel.app`, {
        withCredentials: true,
      });
      if (res) {
        toast.success("Delete");
        setTimeout(() => {
          setdlIsOpen(false);
          window.location.reload();
        }, Math.floor(Math.random() * 1001) + 700);
      }
    } catch (error) {
      console.log('error');
    }
  }

  const customStyles2 = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#fff",
      height: "38rem",
      width: "20rem",
    },
  };
  
  return (
    <Stack
      direction={["column", "row"]}
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      padding={"4"}
      borderRadius={"5"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
      flexWrap={"wrap"}
    >
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Name</span> : {name}
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Email</span> : {email}
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Department</span> : {dept}
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Roll</span> : {roll}
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Batch</span> : {batch}
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Phone</span> : {phone}
      </Text>
      <HStack spacing={3}>
        <Button
          onClick={() => {
            setupIsOpen(true);
          }}
          fontFamily="'Poppins', sans-serif"
        >
          <span className="detailsHome">
            <BsPencilFill />
          </span>
        </Button>
        <Modal
          onRequestClose={() => {
            setupIsOpen(false);
          }}
          isOpen={upmodalIsOpen}
          style={customStyles2}
          contentLabel="Example Modal"
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            marginBottom={5}
          >
            <Heading color="#675cff" fontSize={25}>
              Update User
            </Heading>
            <button onClick={() => setupIsOpen(false)}>
              <IoMdClose />
            </button>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={6}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          >
            <FormControl width="100%">
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={update.name}
                onChange={handelUser}
                focusBorderColor="#675cff"
                borderRadius={"20"}
                border="2px solid #675cff "
                type="text"
              />
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                value={update.email}
                onChange={handelUser}
                focusBorderColor="#675cff"
                borderRadius={"20"}
                border="2px solid #675cff "
                type="text"
              />
              <FormLabel>Department</FormLabel>
              <Input
                name="dept"
                value={update.dept}
                onChange={handelUser}
                focusBorderColor="#675cff"
                borderRadius={"20"}
                border="2px solid #675cff "
                type="text"
              />
              <FormLabel>Roll</FormLabel>
              <Input
                name="roll"
                value={update.roll}
                onChange={handelUser}
                focusBorderColor="#675cff"
                borderRadius={"20"}
                border="2px solid #675cff "
                type="text"
              />
              <FormLabel>Batch</FormLabel>
              <Input
                name="batch"
                value={update.batch}
                onChange={handelUser}
                focusBorderColor="#675cff"
                borderRadius={"20"}
                border="2px solid #675cff "
                type="text"
              />
              <FormLabel>Phone</FormLabel>
              <Input
                name="phone"
                value={update.phone}
                onChange={handelUser}
                focusBorderColor="#675cff"
                borderRadius={"20"}
                border="2px solid #675cff "
                type="text"
              />
            </FormControl>
            <button onClick={handleUpdate} className="eventBtn">
              Update User
            </button>
          </Box>
        </Modal>

        <Button
          onClick={() => setdlIsOpen(true)}
          fontFamily="'Poppins', sans-serif"
        >
          <span className="detailsHome">
            <MdDelete />
          </span>
        </Button>
        <Modal
          onRequestClose={() => {
            setdlIsOpen(false);
          }}
          isOpen={dlmodalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={5}
          >
            <Box
              color={"red"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Heading textAlign={"center"} fontSize={80}>
                <RxCrossCircled />
              </Heading>
            </Box>
            <Heading textAlign={"center"} fontSize={40}>
              Are You Sure?
            </Heading>
            <Text fontSize={20}>Do you really want to delete this User?</Text>
            <HStack spacing={4}>
              <Button colorScheme="whatsapp" onClick={() => setdlIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handel} colorScheme="red">
                Delete
              </Button>
            </HStack>
          </Box>
        </Modal>
      </HStack>
      <Toaster position="top-center" reverseOrder={false} />
    </Stack>
  );
};

export default UserCard;
