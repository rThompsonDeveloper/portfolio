import styled from "styled-components";

import { violet } from "../../Globals";

import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  margin-top: 60px;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.6em;
  color: ${violet};
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.4em;
    margin-bottom: 10px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2.8em;
  text-align: center;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    font-size: 1.8em;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

export const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 48%;
  margin: 1%;
  background: #f2f2f2;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 0px;
    margin: 20px 0px;
  }
`;

export const Image = styled.div`
  background-image: ${(p) => `url(${p.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
  opacity: 60%;
  height: 400px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  @media screen and (max-width: 768px) {
    height: 300px;
    background-size: cover;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -37px;
  z-index: 1;
`;

export const ButtonLeft = styled.button`
  color: white;
  background-color: ${violet};
  font-size: 1.2em;
  padding: 6px;
  border-top-left-radius: 10px;
  border: 1px solid black;
  border-right: none;
  border-bottom: none;
  width: 200px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #c3284b;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
    border-top-left-radius: 0px;
  }
`;

export const ButtonRight = styled.button`
  color: white;
  background-color: #6cc644;
  font-size: 1.2em;
  padding: 6px;
  border-top-right-radius: 10px;
  border: 1px solid black;
  border-bottom: none;
  width: 200px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #3b861b;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    border-top-right-radius: 0px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const Name = styled.h1`
  font-size: 1.4em;
  color: ${violet};
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const Date = styled.h3`
  font-size: 0.8em;
  color: black;
`;

export const Description = styled.p`
  font-size: 1em;
  padding: 6px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    padding: 6px;
  }
`;
