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
const Eventcard = () => {
   const [modalIsOpen, setIsOpen] = useState(false)
   const [dlmodalIsOpen, setdlIsOpen] = useState(false)
   const customStyles = {
     content: {
       top: "50%",
       left: "50%",
       right: "auto",
       bottom: "auto",
       marginRight: "-50%",
       transform: "translate(-50%, -50%)",
       background:'#fff',
       height:'21rem',
       width:'35rem',
  

     },
   };
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
            >
              <Box>
                <Heading textAlign={"center"} color="#675cff">
                  Freshers Orientation Program
                </Heading>
              </Box>
              <Text>
                <span className="smalltitle">Event</span> - Friday , 15/07/2023
              </Text>
              <Text>
                <span className="smalltitle">Deadline</span> - Sunday,
                10/07/2023
              </Text>
              <Text>
                <span className="smalltitle">Mode</span> - Offline In Room No.
                201
              </Text>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text textAlign={"center"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            blanditiis autem itaque dolorem? Rerum ipsum quia, incidunt suscipit
            praesentium minus.
          </Text>
        </CardBody>
        <Image
          borderRadius={10}
          objectFit="cover"
          src="https://media.licdn.com/dms/image/C5622AQHewqD8RYC6Gg/feedshare-shrink_800/0/1669135675811?e=1694044800&v=beta&t=p2FWvv_4uh4O5G3sVDZ77lUGYfEdPW7247uAzR3xQtI"
          alt="Chakra UI"
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
          >
            update
            <button onClick={() => setIsOpen(false)}>close</button>
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
                <Button colorScheme="red">Delete</Button>
              </HStack>
            </Box>
          </Modal>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Eventcard;
