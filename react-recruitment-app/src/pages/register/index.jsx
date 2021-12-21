import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Dialog,
  TextArea,
  DatePicker,
  Selector,
  Slider,
  Stepper,
  ImageUploader,
  Toast,
  List,
} from "antd-mobile";

import { PictureOutline, RightOutline } from "antd-mobile-icons";
import classNames from "classnames";

import { CitySelector } from "components/CitySelector.jsx";
import { Map } from "components/Map";

import { queryCities } from "api/query";
import "./index.less";

export const Register = () => {
  const onFinish = (values) => {
    Dialog.alert({
      content: JSON.stringify(values),
    });
  };
  const [fileList, setFileList] = useState([]);
  const [isEmploy, setIsEmploy] = useState(true);
  const [showCitySelector, setShowCitySelector] = useState(false);
  const [expectationCity, setExpectationCity] = useState("广州");
  const updateAvatar = (file) => {
    console.log(file);
    return {
      url: URL.createObjectURL(file),
    };
  };
  const EmployedList = () => {
    return (
      <>
        <Form.Item name="description" label="描述">
          <TextArea
            placeholder="请输入个人描述"
            autoSize={{ minRows: 3, maxRows: 20 }}
          />
        </Form.Item>
        <Form.Item label="期望工作城市">
          <div
            onClick={() => setShowCitySelector(true)}
            className="expectations-city"
          >
            <span>{expectationCity}</span>
            <RightOutline />
          </div>
        </Form.Item>
      </>
    );
  };
  const NoEmployedList = () => {
    return (
      <>
        <Form.Item name="address" label="公司名称">
          <Input placeholder="请输入地址" />
        </Form.Item>
        <Form.Item name="description" label="公司描述">
          <TextArea
            placeholder="请输入个人描述"
            autoSize={{ minRows: 3, maxRows: 20 }}
          />
        </Form.Item>
        <Form.Item name="address" label="招聘岗位">
          <Input placeholder="请输入地址" />
        </Form.Item>
        <Form.Item name="description" label="岗位描述">
          <TextArea
            placeholder="请输入岗位描述"
            autoSize={{ minRows: 3, maxRows: 20 }}
          />
        </Form.Item>
        <Form.Item label="期望工作城市">
          <div
            onClick={() => setShowCitySelector(true)}
            className="expectations-city"
          >
            <span>{expectationCity}</span>
            <RightOutline />
          </div>
        </Form.Item>
      </>
    );
  };
  return (
    <div id="pages-register">
      {/* <div className={classNames({ noShow: showCitySelector })}>
        <Form
          // className="test"
          onFinish={onFinish}
          footer={
            <Button block type="submit" color="primary">
              提交
            </Button>
          }
        >
          <Form.Item name="头像" label="头像">
            <ImageUploader
              value={fileList}
              onChange={setFileList}
              upload={updateAvatar}
              maxCount={1}
              onCountExceed={(exceed) => {
                Toast.show(`最多上传1张图片，你多选了 ${exceed} 张`);
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#999999",
                }}
              >
                <PictureOutline style={{ fontSize: 32 }} />
              </div>
            </ImageUploader>
          </Form.Item>

          <Form.Item
            name="姓名"
            label="姓名"
            rules={[{ required: true, message: "姓名不能为空" }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            name="邮箱"
            label="邮箱"
            rules={[{ required: true, message: "邮箱不能为空" }]}
          >
            <Input type="email" placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item
            name="密码"
            label="密码"
            rules={[{ required: true, message: "邮箱不能为空" }]}
          >
            <Input type="password" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item
            name="我要"
            label="我要"
            rules={[{ required: true, message: "邮箱不能为空" }]}
          >
            <Selector
              options={[
                { label: "应聘", value: 1 },
                { label: "招聘", value: 2 },
              ]}
              defaultValue={[1]}
              onChange={(arr, extend) => setIsEmploy(arr[0] === 1)}
            />
          </Form.Item>
          {isEmploy ? <EmployedList /> : <NoEmployedList />}
        </Form>
      </div>

      <CitySelector
        queryCities={queryCities}
        showCitySelector={showCitySelector}
        setShowCitySelector={setShowCitySelector}
        setExpectationCity={setExpectationCity}
      /> */}
      <Map />
    </div>
  );
};
