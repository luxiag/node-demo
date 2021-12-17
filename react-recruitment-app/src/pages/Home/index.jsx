
import React, { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from "react-router-dom";

import styled from "@emotion/styled";
export const Home = () => {
  let { pathname } = useLocation();
  useEffect(() => {

  }, [])
  return (
    <>
      <Outlet />
      <Footer>
        <NavLink to="/list">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>列表
        </NavLink>
        <NavLink to="/news">      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />

        </svg>消息 </NavLink>
        <NavLink to="/person">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          个人
        </NavLink>
      </Footer>
    </>
  );
};
const Footer = styled.div`
z-index:1;
background: #fff;
display:flex;
position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    
    border-top:1px solid #F3F4F6;
padding:10px 0;

>a {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content:center;
}
.active {
  color:#3B82F6;

}
`
