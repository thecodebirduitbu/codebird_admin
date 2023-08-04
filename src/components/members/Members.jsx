import Navbar from "../navbar/Navbar";
import UserCard from "../cards/UserCard";
import { Stack, Heading, Box } from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";



const Members = () => {

 const [data, setData] = useState([]);
 useEffect(() => {
   axios
     .get("http://localhost:8000/api/members", {
       withCredentials: true,
     })
     .then((response) => {
       console.log(response.data);
       setData(response.data);
     })
     .catch((error) => {
       console.log(error);
     });
 }, []);
  const membersNumber = data.length;


  return (
    <div>
      <Navbar />
      <Box>
        <Heading textAlign={"center"}>All Members ({membersNumber})</Heading>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Stack
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
          spacing={5}
          width={1200}
        >
          <Box
            marginTop={"10"}
            display={"flex"}
            gap={"5"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <InputGroup width="150%" textAlign={"center"}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                focusBorderColor="#675cff"
                border="2px solid #675cff "
                type="text"
                placeholder="Search User"
                borderRadius={"20"}
              />
            </InputGroup>
            <button className="srchBtn">Search</button>
          </Box>
          {data.map((item, index) => {
            return (
              <UserCard
                key={index}
                name={item.name}
                email={item.email}
                dept={item.department}
                roll={item.roll}
                batch={item.batch}
                phone={item.phone}
              />
            );
          })}
        </Stack>
      </Box>
    </div>
  );
};

export default Members;
