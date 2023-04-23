import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Avatar, AvatarGroup, Box, Flex, Heading } from "@chakra-ui/react";
import { json, useNavigate } from "react-router-dom";
const RsidebarCard = ({ ele }) => {
  const navigate = useNavigate();
  const HandleNavigate = ()=>{
    navigate('/create')
    localStorage.setItem('hashtag',JSON.stringify(ele.hastag))
  }
  return (
    <>
      <Box className="card">
        <Flex
          justifyContent={"space-between"}
          p="5px 20px"
          borderRadius={"20px"}
          width="95%"
          margin={"auto"}
          alignItems="center"
          bg={"rgb(248,247,243)"}
        >
          <Box>
            <Flex direction={"column"}>
              <Heading size={"25px"} fontWeight="600">
                {ele.hastag}
              </Heading>
              <Box>
                <AvatarGroup size="sm" max={3} p="10px">
                  <Avatar
                    name="Ryan Florence"
                    src={ele.img1}
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src={ele.img2}
                  />
                  <Avatar name="Kent Dodds" src={ele.img4} />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src={ele.img3}
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src={ele.img4}
                  />
                </AvatarGroup>
              </Box>
              <Box fontSize={"12px"} color="rgb(136,138,160)">
                Trending Locally
              </Box>
            </Flex>
          </Box>
          <Box onClick={HandleNavigate}>
            <AiOutlinePlusCircle size={"30px"} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default RsidebarCard;