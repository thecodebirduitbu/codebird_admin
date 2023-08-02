import { Card, CardHeader, CardBody, CardFooter , Stack ,HStack, Heading ,Text, Button, Box } from "@chakra-ui/react";
import './Card.css'
import { MdDelete } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";

const UserCard = () => {
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
            <BsPencilFill/>
          </span>
        </Button>
        <Button fontFamily="'Poppins', sans-serif">
          <span className="detailsHome">
            <MdDelete />
          </span>
        </Button>
      </HStack>
    </Stack>
  );
};

export default UserCard;
