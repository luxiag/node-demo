import React from "react";
import styled from "@emotion/styled";
import { Tag, Avatar } from "@chatui/core";

export const CompanyCard = ({ data, ctx, meta }) => {
  console.log(data, ctx, meta);
  const img = "//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg";
  const Box = styled.div`
    background-color: #fff;
    margin: 8px 0;
    padding: 15px;
  `;
  const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  return (
    <Box>
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
