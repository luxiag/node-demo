import react, { useState } from "react";
import styled from "@emotion/styled";

import { useNavigate } from "react-router-dom";
import { Tag, Avatar } from "@chatui/core";
export const List = () => {
  // let [person,setPerson] = useState(Array(10))
  let person = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Slide style={{ backgroundColor: "#F3F4F6" }}>
      <div>
        {person.map((item) => {
          return <Dialog />;
        })}
      </div>
    </Slide>
  );
};
const Slide = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  /* overflow: hidden; */
  bottom: 60px;
`;
const Dialog = () => {
  let navigate = useNavigate();
  const img = "//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg";

  return (
    <Box onClick={() => navigate(`/detail/${1}`)}>
      <Head>
        <Title>前端开发工程师</Title>
        <Price>10-15k</Price>
      </Head>
      <Body>
        <Tag>在校/应届</Tag> <Tag>本科</Tag> <Tag>JavaScript</Tag>
        <div>某某公司 已上市 10000人以上</div>
      </Body>
      <Footer>
        <Detail>
          <Avatar src={img} size="sm" />
          朱先生 人事经理
        </Detail>
        <Area>天河区</Area>
      </Footer>
    </Box>
  );
};
const Box = styled.div`
  background-color: #fff;
  margin: 8px 0;
  padding: 15px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-item: center;
`;
const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
`;
const Price = styled.span`
  font-weight: 700;
  color: #10b981;
`;
const Body = styled.span`
  padding: 8px 0;
  margin: 10px 0;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Area = styled.div``;
