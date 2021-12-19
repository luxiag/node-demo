import react, { useState } from "react";
import styled from "@emotion/styled";
import { Avatar } from "@chatui/core";
import { useNavigate } from "react-router-dom";
export const News = () => {
  let person = [1, 2, 3, 4];
  return (
    <>
      {person.map((item) => {
        return <Dialog key={item} />;
      })}
    </>
  );
};
const Dialog = () => {
  let navigate = useNavigate();
  const img = "//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg";
  return (
    <Box onClick={() => navigate(`/chat/${1}`)}>
      <Avatar src={img} size="lg" />
      <MiddleBox>
        <Title>
          梁女士 <span>某某公司 人事</span>
        </Title>
        <Content>您正在与BOSS沟通</Content>
      </MiddleBox>
      <RightTime>11:30</RightTime>
    </Box>
  );
};
const Box = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MiddleBox = styled.div`
  flex: 1;
  margin-left: 20px;
`;
const Title = styled.div``;
const Content = styled.div`
  color: #ccc;
  margin-top: 10px;
`;
const RightTime = styled.span`
  color: #ccc;
`;
