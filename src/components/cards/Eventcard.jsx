import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Box,
  Image,
  Flex,
  HStack,
} from "@chakra-ui/react";
import "./Card.css";
import { MdDelete } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import Modal from "react-modal";
import { useState } from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import uploadpic from "../../assets/upload4.jpg";
import axios from "axios";
import url from "../helper/helper";

const Eventcard = ({ eventName, deadline, date, descp, mode, poster, id }) => {

  const deleteEvent = async () => {
    try {
      const res = await axios.delete(`${url}/api/deleteEvent/${id}`, {
        withCredentials: true,
      });
      if (res) {
        window.alert("Deleted");
        setTimeout(() => {
          setdlIsOpen(false);
          window.location.reload();
        }, Math.floor(Math.random() * 1001) + 700);
      }
    } catch (error) {
      console.log("error");
    }
  };
  const [modalIsOpen, setIsOpen] = useState(false);
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

  const [userC, setUserC] = useState({
    eventNameC: "",
    eventDateC: "",
    eventdescC: "",
    eventLastDateC: "",
    eventModeC: "",
    eventProfileC: "",
  });
  const [file, setFile] = useState();

  const handelUser = (e) => {
    const { name, value } = e.target;
    setUserC({ ...userC, [name]: value });
  };

  const onUploadC = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
    setUserC({ ...userC, eventProfileC: base64 });
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
    <Box>
      <Card
        maxW="md"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        // border="2px solid #675cff"
        padding={5}
      >
        <CardHeader>
          <Flex spacing="4">
            <Flex
              flex="1"
              gap="4"
              alignItems="center"
              justifyContent={"center"}
              flexWrap="wrap"
              flexDirection={"column"}
            >
              <Box>
                <Heading textAlign={"center"} color="#675cff">
                  {eventName}
                </Heading>
              </Box>
              <Text>
                <span className="smalltitle">Event</span> - {date}
              </Text>
              <Text>
                <span className="smalltitle">Deadline</span> - {deadline}
              </Text>
              <Text>
                <span className="smalltitle">Mode</span> - {mode}
              </Text>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text textAlign={"center"}>{descp}</Text>
        </CardBody>
        <Image
          borderRadius={10}
          objectFit="cover"
          src={poster}
          alt="Event Image"
        />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button
            onClick={() => setIsOpen(true)}
            color="#675cff"
            flex="1"
            variant="ghost"
            leftIcon={<BsPencilFill />}
          >
            Update Event
          </Button>
          <Modal
            onRequestClose={() => {
              setIsOpen(false);
            }}
            isOpen={modalIsOpen}
            style={customStyles2}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              marginBottom={5}
            >
              <Heading color="#675cff" fontSize={25}>
                Update Event
              </Heading>
              <button onClick={() => setIsOpen(false)}>
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
                <div className="posterevent">
                  <FormLabel htmlFor="imgInputC">
                    <img
                      className="profilimgC"
                      src={file || uploadpic}
                      alt="img"
                    />
                  </FormLabel>
                  <input id="imgInputC" onChange={onUploadC} type="file" />
                </div>
                <FormLabel>Enter Event Name</FormLabel>
                <Input
                  name="eventName"
                  value={userC.eventNameC}
                  onChange={handelUser}
                  focusBorderColor="#675cff"
                  borderRadius={"20"}
                  border="2px solid #675cff "
                  type="text"
                />
                <FormLabel>Enter Event Desciption</FormLabel>
                <Input
                  name="eventdesc"
                  value={userC.eventdescC}
                  onChange={handelUser}
                  focusBorderColor="#675cff"
                  borderRadius={"20"}
                  border="2px solid #675cff "
                  type="text"
                />
                <FormLabel>Enter Event Date</FormLabel>
                <Input
                  name="eventDate"
                  value={userC.eventDateC}
                  onChange={handelUser}
                  focusBorderColor="#675cff"
                  borderRadius={"20"}
                  border="2px solid #675cff "
                  type="text"
                />
                <FormLabel>Enter Last Registration Date</FormLabel>
                <Input
                  name="eventLastDate"
                  value={userC.eventLastDateC}
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
                  value={userC.eventModeC}
                  onChange={handelUser}
                  focusBorderColor="#675cff"
                  borderRadius={"20"}
                  border="2px solid #675cff "
                  type="text"
                />
              </FormControl>
              <button
                onClick={() => {
                  console.log(userC);
                }}
                className="eventBtn"
              >
                Update Event
              </button>
            </Box>
          </Modal>
          <Button
            onClick={() => setdlIsOpen(true)}
            color="#675cff"
            flex="1"
            variant="ghost"
            leftIcon={<MdDelete />}
          >
            Delete Event
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
              <Text fontSize={20}>
                Do you really want to delete this event?
              </Text>
              <HStack spacing={4}>
                <Button
                  colorScheme="whatsapp"
                  onClick={() => setdlIsOpen(false)}
                >
                  Cancel
                </Button>
                {/* here */}
                <Button onClick={deleteEvent} colorScheme="red">
                  Delete
                </Button>
              </HStack>
            </Box>
          </Modal>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Eventcard;
