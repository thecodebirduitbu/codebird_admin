import {  Stack ,HStack, Heading ,Text, Button, Box } from "@chakra-ui/react";
import './Card.css'
import { MdDelete } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import Modal  from "react-modal";
import {useState} from 'react'
import { RxCrossCircled } from "react-icons/rx";

const UserCard = () => {
  // const [modalIsOpen, setIsOpen] = useState(false);
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
        <span className="detailsHome">Name</span> : Puskar Roy
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Email</span> : puskarroy@gmail.com
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Department</span> : CSE
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Roll</span> : 20221013
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Batch</span> : 2022-2026
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Phone</span> : 7449585365
      </Text>
      <HStack spacing={3}>
        <Button fontFamily="'Poppins', sans-serif">
          <span className="detailsHome">
            <BsPencilFill />
          </span>
        </Button>
        <Button onClick={() => setdlIsOpen(true)} fontFamily="'Poppins', sans-serif">
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
              <Button colorScheme="red">Delete</Button>
            </HStack>
          </Box>
        </Modal>
      </HStack>
    </Stack>
  );
};

export default UserCard;
