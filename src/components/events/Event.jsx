import Navbar from "../navbar/Navbar";
import { Heading, Box } from "@chakra-ui/react";
import "./Event.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { BiSolidImageAdd } from "react-icons/bi";
import { RiGalleryFill } from "react-icons/ri";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";
import Eventcard from "../cards/Eventcard";
const Event = () => {
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
                <BiSolidImageAdd />
                Create Events
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box><Eventcard/></Box>
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
                    <FormLabel>Enter Event Name</FormLabel>
                    <Input
                      focusBorderColor="#675cff"
                      borderRadius={"20"}
                      border="2px solid #675cff "
                      type="text"
                    />
                    <FormLabel>Enter Event Desciption</FormLabel>
                    <Input
                      focusBorderColor="#675cff"
                      borderRadius={"20"}
                      border="2px solid #675cff "
                      type="text"
                    />
                    <FormLabel>Enter Event Date</FormLabel>
                    <Input
                      focusBorderColor="#675cff"
                      borderRadius={"20"}
                      border="2px solid #675cff "
                      type="text"
                    />
                    <FormLabel>Enter Last Registration Date</FormLabel>
                    <Input
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
                      focusBorderColor="#675cff"
                      borderRadius={"20"}
                      border="2px solid #675cff "
                      type="text"
                    />
                    <FormLabel>Enter Event Poster</FormLabel>
                    <Input type="file" />
                  </FormControl>
                  <button className="eventBtn">Create Event</button>
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
