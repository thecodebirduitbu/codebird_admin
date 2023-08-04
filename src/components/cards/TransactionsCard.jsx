import { Stack, Text } from "@chakra-ui/react";
import "./Card.css";


const TransactionsCard = ({ name, email, phone, payid ,date}) => {
  
  
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
        <span className="detailsHome">Amount</span> : 200
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Payment ID</span> :{" "}
        <span className="payid">{payid}</span>
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Date</span> : {date}
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Name</span> : {name}
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Email</span> : {email}
      </Text>
      <Text fontFamily="'Poppins', sans-serif">
        <span className="detailsHome">Phone</span> : {phone}
      </Text>
    </Stack>
  );
};

export default TransactionsCard;
