import Navbar from "../navbar/Navbar";
import { Heading, Box } from "@chakra-ui/react";
import "./Event.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { BiSolidImageAdd } from "react-icons/bi";
import { RiGalleryFill } from "react-icons/ri";
import { GrUserExpert } from "react-icons/gr";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";
import Eventcard from "../cards/Eventcard";
import UserCard from "../cards/UserCard";
import {useState} from 'react'
import uploadpic from '../../assets/upload4.jpg'


const Event = () => {

  const [user, setUser] = useState({
    eventName: "",
    eventDate: "",
    eventdesc: "",
    eventLastDate: "",
    eventMode: "",
    eventProfile:""
  });
const [file, setFile] = useState();

  const handelUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

   const onUpload = async (e) => {
     const base64 = await convertToBase64(e.target.files[0]);
     setFile(base64);
     setUser({ ...user, eventProfile: base64 });
   };
   function convertToBase64(file) {
     return new Promise((resolve, reject) => {
       const fileReader = new FileReader();
       fileReader.readAsDataURL(file);

       fileReader.onload = () => {
         resolve(fileReader.result);
       };

       fileReader.onerror = (error) => {
         reject(error);
       };
     });
   }

  return (
    <Box className="eventBox">
      <Navbar />
      <Box>
        <Heading fontFamily="'Ubuntu', sans-serif;" textAlign={"center"}>
          Events
        </Heading>
        <Box width="80%" margin="0 auto">
          <Tabs align="end" variant="enclosed">
            <TabList>
              <Tab
                display={"flex"}
                gap={"1"}
                justifyContent={"center"}
                alignItems={"center"}
                fontFamily="'Ubuntu', sans-serif;"
              >
                <RiGalleryFill />
                Existing Events
              </Tab>
              <Tab
                display={"flex"}
                gap={"1"}
                justifyContent={"center"}
                alignItems={"center"}
                fontFamily="'Ubuntu', sans-serif;"
              >
                <GrUserExpert />
                Applied Students
              </Tab>
              <Tab
                display={"flex"}
                gap={"1"}
                justifyContent={"center"}
                alignItems={"center"}
                fontFamily="'Ubuntu', sans-serif;"
              >
                <BiSolidImageAdd />
                Create Events
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  gap={10}
                  flexWrap={"wrap"}
                >
                  <Eventcard />
                  <Eventcard />
                  <Eventcard />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box>
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={6}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                >
                  <FormControl width="100%">
                    <div className="posterevent">
                      <FormLabel htmlFor="imgInput">
                        <img
                          className="profilimg"
                          src={file || uploadpic}
                          alt="img"
                        />
                      </FormLabel>
                      <input id="imgInput" onChange={onUpload} type="file" />
                    </div>
                    <FormLabel>Enter Event Name</FormLabel>
                    <Input
                      name="eventName"
                      value={user.eventName}
                      onChange={handelUser}
                      focusBorderColor="#675cff"
                      borderRadius={"20"}
                      border="2px solid #675cff "
                      type="text"
                    />
                    <FormLabel>Enter Event Desciption</FormLabel>
                    <Input
                      name="eventdesc"
                      value={user.eventdesc}
                      onChange={handelUser}
                      focusBorderColor="#675cff"
                      borderRadius={"20"}
                      border="2px solid #675cff "
                      type="text"
                    />
                    <FormLabel>Enter Event Date</FormLabel>
                    <Input
                      name="eventDate"
                      value={user.eventDate}
                      onChange={handelUser}
                      focusBorderColor="#675cff"
                      borderRadius={"20"}
                      border="2px solid #675cff "
                      type="text"
                    />
                    <FormLabel>Enter Last Registration Date</FormLabel>
                    <Input
                      name="eventLastDate"
                      value={user.eventLastDate}
                      onChange={handelUser}
                      focusBorderColor="#675cff"
                      borderRadius={"20"}
                      border="2px solid #675cff "
                      type="text"
                    />
                    <FormLabel>
                      Enter Event Mode (
                      <span className="eventSmallText">
                        If Event Mode Offline Provide Room no.
                      </span>
                      )
                    </FormLabel>
                    <Input
                      name="eventMode"
                      value={user.eventMode}
                      onChange={handelUser}
                      focusBorderColor="#675cff"
                      borderRadius={"20"}
                      border="2px solid #675cff "
                      type="text"
                    />
                  </FormControl>
                  <button
                    onClick={() => {
                      console.log(user);
                    }}
                    className="eventBtn"
                  >
                    Create Event
                  </button>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default Event;
