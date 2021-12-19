import styled from "@emotion/styled";
import { Tag, Avatar } from "@chatui/core";
import { Button } from "antd-mobile";
import { Map, Marker, NavigationControl, InfoWindow } from "react-bmapgl";
export const Detail = () => {
  const img = "//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg";
  return (
    <Page>
      <Box>
        <Head>
          <Title>前端开发工程师</Title>
          <Price>10-15k</Price>
        </Head>
        <Body>
          <Label>在校/应届</Label> <Label>本科</Label> <Label>JavaScript</Label>
          <Descript>某某公司 已上市 10000人以上</Descript>
        </Body>
        <Footer>
          <Person>
            <Avatar src={img} size="sm" />
            朱先生 人事经理
          </Person>
          <Area>天河区</Area>
        </Footer>
      </Box>
      <Personal />
      <Position />
      <Address />
    </Page>
  );
};

const Personal = () => {
  const img = "//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg";
  const Box = styled.div`
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
  const UAvator = styled(Avatar)`
    > img {
      width: 60px;
      height: 60px;
    }
  `;

  return (
    <Box>
      <UAvator src={img} />
      <MiddleBox>
        <Title>梁女士</Title>
        <Content>有限公司</Content>
      </MiddleBox>
      <RightTime>
        <Button block shape="rounded" color="primary">
          立即沟通
        </Button>
      </RightTime>
    </Box>
  );
};
const Address = () => {
  return (
    <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11">
      <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
      <NavigationControl />
      <InfoWindow
        position={{ lng: 116.402544, lat: 39.928216 }}
        text="内容"
        title="标题"
      />
    </Map>
  );
};
const Position = () => {
  return (
    <>
      <h3>职位描述：</h3>
      <div>岗位职责：</div>
    </>
  );
};
const Page = styled.div``;
const Box = styled.div`
  color: #fff;
  background-color: #4692ff;
  padding: 15px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-bottom: 10px; */
`;
const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
`;
const Price = styled.span`
  font-weight: 700;
  font-size: 22px;
`;
const Body = styled.span`
  padding: 8px 0;
  margin: 18px 0;
`;
const Person = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Label = styled(Tag)`
  display: inline-block;
  padding: 4px 8px;
  background-color: #4692ff;
  border-radius: 14px;
  color: #fff;
  border: 1px solid #fff;
`;
const Descript = styled.div`
  margin-top: 10px;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
`;
const Area = styled.div``;
