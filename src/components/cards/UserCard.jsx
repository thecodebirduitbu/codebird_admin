import { Stack, HStack, Heading, Text, Button, Box } from "@chakra-ui/react";
import "./Card.css";
import { MdDelete } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import Modal from "react-modal";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
import url from "../helper/helper";
import { Toaster, toast } from "react-hot-toast";


const UserCard = ({ name, email, phone, roll, dept, batch , id }) => {
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

  const handel = async ()=>{
    try {
      const res = await axios.delete(`${url}/api/users/${id}`, {
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
        <Button fontFamily="'Poppins', sans-serif">
          <span className="detailsHome">
            <BsPencilFill />
          </span>
        </Button>
        <Modal
          onRequestClose={() => {
            setIsOpen(false);
          }}
          isOpen={dlmodalIsOpen}
          style={customStyles2}
          contentLabel="Example Modal"
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
