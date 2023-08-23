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
import axios from "axios";
// import url from "../helper/helper";

import { useState, useEffect } from "react";
import uploadpic from "../../assets/upload4.jpg";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";




const Event = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://thecodebird-admin-server.vercel.app/api/event`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
         setLoading(false);

      });
  }, []);
  const override = css`
    display: block;
    margin: 50px auto;
    border-color: red; // Customize the border color if needed
  `;
  const [user, setUser] = useState({
    eventName: "",
    eventDate: "",
    eventdesc: "",
    eventLastDate: "",
    eventMode: "",
    eventProfile: "",
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

  const handleCreateEvent = async () => {
    try {
      const eventData = {
        name: user.eventName,
        description: user.eventdesc,
        date: user.eventDate,
        registrationDate: user.eventLastDate,
        mode: user.eventMode,
        poster: user.eventProfile,
      };
      console.log(eventData);
      await axios.post(`https://thecodebird-admin-server.vercel.app/api/createEvent`, eventData);
      window.alert("Event Created");
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <Box
      className="eventBox"
      display={"flex"}
      // justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      minHeight="100vh"
    >
      <Navbar />
      <ClipLoader color="#675cff" css={override} loading={loading} size={50} />
      {!loading && (
        <>
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
                    {data.map((item, index) => {
                      return (
                        <Eventcard
                          key={index}
                          eventName={item.name}
                          mode={item.mode}
                          descp={item.description}
                          deadline={item.registrationDate}
                          date={item.date}
                          poster={item.poster}
                          id={item._id}
                        />
                      );
                    })}
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
                    {/* <button
                    onClick={() => {
                      console.log(user);
                    }}
                    className="eventBtn"
                  > */}
                    <button onClick={handleCreateEvent} className="eventBtn">
                      Create Event
                    </button>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Event;
