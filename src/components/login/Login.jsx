import { Box, Heading, Input,Image , InputGroup ,InputRightElement , Button} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import logo from '../../assets/logo.png'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'




const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [rformData, setRFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [lformData, setLFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChangeLogin = (event) => {
    const { name, value } = event.target;
    setLFormData({
      ...lformData,
      [name]: value,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRFormData({
      ...rformData,
      [name]: value,
    });
  };

const loginSubmit = ()=>{
    // e.preventDefault();
    console.log(lformData);
    navigate('/dashboard')
}
const registerSubmit = ()=>{
    // e.preventDefault();
    console.log(rformData);
    navigate("/dashboard");

}



  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"10"}
        width="60%"
        margin="0 auto"
        borderRadius={10}
        marginTop={10}
        marginBottom={10}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          gap={3}
          alignItems={"center"}
        >
          <Image src={logo} width={"10"} />
          <Heading textAlign={"center"} fontFamily="'Montserrat', sans-serif;">
            The CodeBird Admin
          </Heading>
        </Box>
        <Tabs variant="enclosed">
          <TabList>
            <Tab fontFamily="'Ubuntu', sans-serif;" width="50%">
              Login
            </Tab>
            <Tab fontFamily="'Ubuntu', sans-serif;" width="50%">
              Register
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FormControl
                //   onSubmit={loginSubmit}
                fontStyle="bold"
                fontFamily="'Ubuntu', sans-serif;"
                display={"flex"}
                flexDirection={"column"}
                gap={"25"}
              >
                <Box>
                  <FormLabel>Email</FormLabel>
                  <Input
                    value={lformData.email}
                    onChange={handleInputChangeLogin}
                    name="email"
                    variant="filled"
                    placeholder="Email"
                  />
                </Box>
                <Box>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      variant="filled"
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
                <Input
                  color="white"
                  backgroundColor="#675cff"
                  type="submit"
                  value={"Log In"}
                  onClick={loginSubmit}
                />
              </FormControl>
            </TabPanel>
            <TabPanel>
              <FormControl
                fontStyle="bold"
                fontFamily="'Ubuntu', sans-serif;"
                display={"flex"}
                flexDirection={"column"}
                gap={"25"}
              >
                <Box>
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={rformData.name}
                    onChange={handleInputChange}
                    name="name"
                    variant="filled"
                    placeholder="Name"
                  />
                </Box>
                <Box>
                  <FormLabel>Email</FormLabel>
                  <Input
                    value={rformData.email}
                    onChange={handleInputChange}
                    name="email"
                    variant="filled"
                    placeholder="Email"
                  />
                </Box>
                <Box>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    value={rformData.phone}
                    onChange={handleInputChange}
                    name="phone"
                    variant="filled"
                    placeholder="Phone Number"
                  />
                </Box>
                <Box>
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={rformData.password}
                    onChange={handleInputChange}
                    name="password"
                    variant="filled"
                    placeholder="Password"
                  />
                </Box>
                <Box>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    value={rformData.cpassword}
                    onChange={handleInputChange}
                    name="cpassword"
                    variant="filled"
                    placeholder="Confirm Password"
                  />
                </Box>
                <Input
                  color="white"
                  backgroundColor="#675cff"
                  type="submit"
                  value={"Register"}
                  onClick={registerSubmit}
                />
              </FormControl>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Login;
