import {
  Box,
  Heading,
  Text
} from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";
import { FaRupeeSign } from "react-icons/fa";
import TransactionsCard from "../cards/TransactionsCard";
import {useState , useEffect} from 'react'
import axios from "axios";
import url from "../helper/helper";


const Transaction = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/api/transactions`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        const sortedData = response.data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setData(sortedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const usersNumber = data.length;
  const totalAmount = usersNumber*200;

  return (
    <div>
      <Navbar />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        flexWrap={"wrap"}
        gap={'10'}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          flexWrap={"wrap"}
          gap={20}
        >
          <Heading>Transactions ({usersNumber})</Heading>
          <Heading
            color="#675cff"
            fontSize={40}
            display={"flex"}
            alignItems={"center"}
            padding='0 10px'
          >
            Total Fund Received -
            <FaRupeeSign />
            <span style={{ color: "#675cff" }}>{totalAmount}</span>
          </Heading>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          flexWrap={"wrap"}
          gap={8}
        >
          <Text fontSize={30}>Transaction History</Text>
          <Box>
            {data.map((item, index) => {
              return (
                <TransactionsCard
                  key={index}
                  name={item.userName}
                  email={item.userEmail}
                  phone={item.userPhone}
                  payid={item.razorpay_payment_id}
                  date={item.timestamp.slice(0, 10)}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Transaction;
