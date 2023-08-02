import Navbar from '../navbar/Navbar'
import {  Heading, Box } from "@chakra-ui/react";
import './Event.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { BiSolidImageAdd } from "react-icons/bi";
import { RiGalleryFill } from "react-icons/ri";

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
              <TabPanel>Existing</TabPanel>
              <TabPanel>
                Creating
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export default Event
