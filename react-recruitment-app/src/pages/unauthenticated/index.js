import React, { useState } from "react";
import styled from '@emotion/styled'
import { Login } from 'pages/Login'
import { Register } from 'pages/Register'

export const Unauthenticated = () => {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">

              <Title style={{paddingLeft:'80px' }} isRegister={!isRegister} onClick={() => setIsRegister(false)} >登录</Title>
              <Title style={{paddingRight:'80px' }} isRegister={isRegister} onClick={() => setIsRegister(true)}>注册</Title>
            </h2>
      
          </div>
          <Header>
           
          </Header>
          {isRegister ?  <Register />:<Login /> }
        </div>
      </div>
    </>
  );
};

const Header = styled.div`
font-size:16px;
text-align:center;
margin:20px;

`
const Title = styled.span`
color:${props => props.isRegister ? '':'#ccc'};
padding:20px;


`