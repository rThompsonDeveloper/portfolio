import styled from "styled-components";

import { Link } from "react-scroll";

import { violet } from "../../Globals";

export const Background = styled.div`
  background-image: url("https://img1.goodfon.com/wallpaper/nbig/f/1c/black-dark-vintage-pattern-2376.jpg");
  background-position: left center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-image: linear-gradient(180deg, #151515, transparent);
  height: 600px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  padding: 0px 60px;

  @media screen and (max-width: 768px) {
    padding: 0px;
    height: 100%;
  }
`;

export const Message = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 50%;
  padding: 60px;

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
    margin-top: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 2.8em;
  color: ${violet};
  padding: 20px 0px;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 2em;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.2em;
  color: white;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  padding: 20px 0px;
  justify-content: flex-start;
`;

export const LightButton = styled(Link)`
  color: ${violet};
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid ${violet};
  width: 200px;
  text-align: center;
  font-size: 1em;
  padding: 10px;
  margin: 0px 2px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const DarkButton = styled(Link)`
  color: white;
  background-color: ${violet};
  border: 1px solid ${violet};
  border-radius: 5px;
  text-align: center;
  width: 200px;
  font-size: 1em;
  padding: 10px;
  margin: 0px 2px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const TransitionImage = styled.div`
  flex: 1;
  background-image: url("https://www.pngarts.com/files/7/Graphic-Web-Design-Transparent-Background-PNG.png");
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
