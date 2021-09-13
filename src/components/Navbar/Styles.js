import styled from "styled-components";
import { Link } from "react-scroll";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import ChatIcon from "@material-ui/icons/Chat";

// Colors
import { violet } from "../../Globals";

export const Nav = styled.div`
  background: #151515;
  position: fixed;
  width: 100vw;
  height: 40px;
  display: flex;
  overflow-x: hidden;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 500;
  @media screen and (max-width: 768px) {
    height: 60px;
    padding: 0px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  color: white;
  text-decoration: none;
  align-items: center;
  margin: 10px;
`;

export const LogoImg = styled.img`
  height: 34px;
  margin-right: 4px;
  @media screen and (max-width: 768px) {
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.6rem;
  height: 100%;
  cursor: pointer;
  border-radius: 2px;
  font-size: 0.7rem;
  margin-top: 5px;
  text-transform: uppercase;

  &:hover {
    color: #dadada;
  }

  &.active {
    color: ${violet};
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 2px;
    font-size: 1rem;
    margin-top: 2px;
    margin-right: 24px;
    padding: 8px;
    &:hover {
      background: #232323;
    }
  }
`;

export const NavMenuWrapper = styled.div`
  display: flex;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    box-shadow: 0px 2px 10px black;
    flex-direction: column;
    position: absolute;
    background-color: #151515;
    top: 56px;
    right: 0px;
    padding: 10px;
    display: ${(p) => (p.open ? "block" : "none")};
    border-bottom-left-radius: 4px;
    position: fixed;
  }
`;

export const NavMenuIcon = styled(MenuIcon)`
  display: none !important;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block !important;
    position: absolute;
    top: 2px;
    right: 15px;
    cursor: pointer;
    font-size: 3rem !important;
    margin-top: 4px;
    margin-right: 10px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  position: fixed;
  right: 20%;
  top: 10px;
  z-index: 501;
  align-items: center;
  border-radius: 4px;
  background-image: linear-gradient(180deg, #ff7896, #bd2626);
  padding: 4px 10px;
  margin: 6px 0px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 10px;

  &: hover {
    transition: all 0.2s ease-in-out;
    padding: 6px 12px;
  }

  @media screen and (max-width: 768px) {
    border-radius: 100%;
    height: 50px;
    width: 50px;
    padding: 0px;
    border: 1px solid black;
    margin: 0px;
    position: fixed;
    right: 10px;
    top: 92vh;
    &: hover {
      transition: all 0.2s ease-in-out;
      padding: 2px;
    }
  }
`;

export const Chat = styled(ChatIcon)`
  display: none !important;
  @media screen and (max-width: 768px) {
    display: block !important;
  }
`;

export const ButtonText = styled.p`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
