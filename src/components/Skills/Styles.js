import styled from "styled-components";

import { motion } from "framer-motion";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  background: #f64c72;
  padding-bottom: 40px;
  margin-top: -4px;
  overflow-x: hidden;
`;

export const SectionTitle = styled.h1`
  color: white;
  font-size: 1.8em;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    text-align: center;
    margin-bottom: -40px;
  }
`;

export const Background = styled.div`
  padding: 20px;
  background: #f64c72;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding: 20px 0px;
  }
`;

export const Wrapper = styled(motion.div)`
  display: flex;
  background: white;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 80px;
  overflow-x: hidden;
  @media screen and (max-width: 768px) {
    flex-direction: ${(p) => (p.flip ? "column-reverse" : "column")};
    margin-bottom: 20px;
    box-sizing: border-box;
  }
`;

export const MessageWrapper = styled(motion.div)`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  padding-top: 80px;
  padding-left: 20px;
  @media screen and (max-width: 768px) {
    padding: 0px;
    text-align: center;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1em;
  padding-left: 20px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 1.2em;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  padding-bottom: 80px;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

export const Skill = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 4px;
  margin: 4px;
  padding: 2px;
  min-width: 200px;
  cursor: pointer;
  @media screen and (max-width: 1240px) {
    min-width: 0px;
    width: 47%;
    margin: 3px;
  }
`;

export const SkillIcon = styled.img`
  content: url(${(p) => p.image});
  height: 40px;
`;

export const SkillName = styled.p`
  font-size: 1rem;
  margin-left: 10px;
`;

export const BannerImage = styled.div`
  width: 50%;
  background-image: ${(p) => `url(${p.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 220px;
  }
`;
