import Navbar from "../navbar/Navbar";
import UserCard from "../cards/UserCard";
import { Stack, Heading, Box } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "./Dashboard.css";
import { FaUserCircle, FaLaptopCode } from "react-icons/fa";
import { GoCodeOfConduct } from "react-icons/go";
import { AiOutlineTeam } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
// import url from "../helper/helper";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [memdata, setmemData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://codebird-admin-server.vercel.app/api/users`, {
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
  
  const memberNumber = memdata.length;
  const usersNumber = data.length;

  return (
    <div>
      <Navbar />
      <Heading textAlign={"center"}>Current Data</Heading>

      <div className="show">
        <Box
          className="card"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <div className="item item--1">
            <FaUserCircle />
            <span className="quantity"> {usersNumber} </span>
            <span className="text text--1"> Users </span>
          </div>
          <div className="item item--2">
            <GoCodeOfConduct />
            <span className="quantity"> {memberNumber} </span>
            <span className="text text--2"> Members</span>
          </div>
          <div className="item item--3">
            <AiOutlineTeam />
            <span className="quantity"> 50 </span>
            <span className="text text--3"> CoreTeam </span>
          </div>
          <div className="item item--4">
            <FaLaptopCode />
            <span className="quantity"> 3 </span>
            <span className="text text--4"> Events </span>
          </div>
        </Box>
      </div>
      <Box>
        <Heading textAlign={"center"}>All Users ({usersNumber})</Heading>
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
                id={item._id}
              />
            );
          })}
        </Stack>
      </Box>
    </div>
  );
};

export default Dashboard;
