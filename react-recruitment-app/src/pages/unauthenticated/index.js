import React,{useState} from 'react'
import styled from "@emotion/styled";
export const Unauthenticated = ()=> {
    const [isRegister,SetIsRegister] = useState(false)
    return (
        <Title>{isRegister?'注册':'登录'}</Title>
    )
}
const Title = styled.h2`
  margin-bottom: 20px;
  color: rgb(94, 108, 132);
  text-align:center;
`;
