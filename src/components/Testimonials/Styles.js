import styled from "styled-components";
import { motion } from "framer-motion";

// Colors
import { violet } from "../../Globals";

const setColor = (colorId) => {
  if (colorId === 0) return "#eaeaff";
  if (colorId === 1) return "#eafffb";
  if (colorId === 2) return "#fdffea";
  if (colorId === 3) return "#ffecec";
};

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 120px;
`;

export const SectionTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: ${violet};
  font-size: 1.6em;
  margin-top: 120px;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 10px;
  }
`;

export const SectionSubTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2.8em;
  @media screen and (max-width: 768px) {
    font-size: 2em;
    margin-bottom: -20px;
  }
`;

export const Testimonial = styled(motion.div)`
  width: 25%;
  min-width: 300px;
  cursor: pointer;
  @media screen and (max-width: 1240px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  border-radius: 100%;
  height: 200px;
  width: 200px;
  margin-top: -60px;
`;

export const JobTitle = styled.h2`
  font-size: 1em;
  margin-top: 20px;
`;

export const Name = styled.h3`
  font-size: 1.2em;
  margin-right: 10px;
`;

export const Rating = styled.div`
  display: flex;
`;

export const Star = styled.img`
  height: 20px;
  content: url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/512px-Star_icon_stylized.svg.png);
`;

export const Message = styled.p`
  text-align: center;
  font-size: 1.2em;
  font-style: italic;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Content = styled.div`
padding 20px;
display: flex;
flex-direction: column;
background: ${(p) => setColor(p.color)};
align-items: center;
height: 600px;
@media screen and (max-width: 768px) {
  height: 400px;
}
`;
