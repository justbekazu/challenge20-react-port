import styled from "styled-components";
import { navlink as link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const nav = styled.nav`
  background: #003320;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
`;
export const navlink = styled(link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const bars = styled(FaBars)`
  display: none;
  color: #ffffff;

  @media screen and (max-width: 770px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 770px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 770px) {
    display: none;
  }
`;

export const NavBtnLink = styled(link)`
  border-radius: 5px;
  background: #256ce1;
  padding: 10px 22px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;

  &::hover {
    transition: all 0.5s ease-in-out;
    background: #ffffff;
    color: #256ce1;
  }
`;
