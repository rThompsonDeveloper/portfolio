import styled from "styled-components";
import { Phone, Email, Facebook } from "@material-ui/icons";

import { violet } from "../../Globals";

export const SVG = styled.svg`
  margin-bottom: -200px;
  margin-top: -200px;
  position: absolute;
  @media screen and (max-width: 768px) {
    margin-bottom: -20px !important;
    margin-top: -40px !important;
  }
`;

export const Wrapper = styled.div`
  background: #333;
  position: absolute;
  width: 100%;
  @media screen and (max-width: 1240px) {
    margin-top: -120px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  padding: 10px;
  padding-bottom: 40px;
  @media screen and (max-width: 1240px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const General = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 40px;
  margin-top: 10%;
  @media screen and (max-width: 1240px) {
    width: 100%;
    padding: 0px;
    padding-top: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 1.6em;
  text-transform: uppercase;
  color: ${violet};
  margin-top: -60px;
`;

export const SubTitle = styled.h2`
  font-size: 1em;
  margin-top: 10px;
  color: white;
  margin-bottom: 20px;
`;

export const ContactCard = styled.div`
  display: flex;
`;

export const Name = styled.p`
  font-size: 1em;
  color: #333;
`;

export const Section = styled.div`
  display: flex;
  @media screen and (max-width: 1240px) {
    flex-direction: column;
  }
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 20px 0px;

  @media screen and (max-width: 1240px) {
    width: 100%;
    padding: 0px;
    margin-bottom: 0px;
  }
`;

export const Label = styled.label`
  font-size: 0.9em;
  color: white;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  font-size: 1.1em;
  border-radius: 4px;
  color: white;
  background: #4e4e4e;
  padding: 4px;
  border: 1px solid gray;
  box-sizing: border-box;
  @media screen and (max-width: 1240px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  width: ${(p) => (p.isLarge ? "100%" : "50%")};
  box-sizing: border-box;
  @media screen and (max-width: 1240px) {
    margin-top: 10px;
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  font-size: 1.1em;
  border-radius: 4px;
  color: white;
  background: #4e4e4e;
  padding: 4px;
  resize: none;
  height: 200px;
  border: 1px solid gray;
  box-sizing: border-box;
`;

export const PhoneLink = styled.a`
  margin-right: 10px;
`;
export const EmailLink = styled.a`
  margin-right: 10px;
  margin-left: 10px;
`;
export const FacebookLink = styled.a`
  margin-left: 10px;
`;

export const PhoneIcon = styled(Phone)`
  height: 1.4em !important;
  width: 1.4em !important;
  color: white;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #34a853;
  }
`;
export const EmailIcon = styled(Email)`
  height: 1.4em !important;
  width: 1.4em !important;
  color: white;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #fbbc05;
  }
`;
export const FacebookIcon = styled(Facebook)`
  height: 1.4em !important;
  width: 1.4em !important;
  color: white;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #4267b2;
  }
`;

export const Spacer = styled.div`
  width: 1px;
  height: 100%;
  background: white;
`;

export const AboutMe = styled.div`
  margin-top: 100px;
`;

export const Text = styled.h2`
  margin-top: 10px;
  font-size: 1.2em;
  color: white;
`;

export const Submit = styled.button`
  border: none;
  background-color: ${violet};
  color: white;
  font-size: 1em;
  padding: 8px;
  border-radius: 4px;
  margin-top: 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #c13958;
  }
`;
