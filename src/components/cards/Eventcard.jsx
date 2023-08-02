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
} from "@chakra-ui/react";
import "./Card.css";
import { MdDelete } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";

const Eventcard = () => {
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
          <Button color="#675cff" flex="1" variant="ghost" leftIcon={<BsPencilFill />}>
            Update Event
          </Button>
          <Button color="#675cff" flex="1" variant="ghost" leftIcon={<MdDelete />}>
            Delete Event
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Eventcard;
