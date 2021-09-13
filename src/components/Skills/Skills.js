import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

import {
  Section,
  SectionTitle,
  Background,
  Wrapper,
  MessageWrapper,
  Title,
  SubTitle,
  BannerImage,
  SkillsWrapper,
  Skill,
  SkillIcon,
  SkillName,
} from "./Styles";

import { FrontEndSKills, BackEndSkills, GeneralSkills } from "./Data";

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const animation2 = useAnimation();
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const animation3 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 0.3, bounce: 0.2 },
      });
    }

    if (!inView) {
      animation.start({
        x: "-100vw",
        transition: { type: "spring", duration: 0.3, bounce: 0.2 },
      });
    }
    if (inView2) {
      animation2.start({
        x: 0,
        transition: { type: "spring", duration: 0.3, bounce: 0.2 },
      });
    }
    if (!inView2) {
      animation2.start({
        x: "-100vw",
        transition: { type: "spring", duration: 0.3, bounce: 0.2 },
      });
    }
    if (inView3) {
      animation3.start({
        x: 0,
        transition: { type: "spring", duration: 0.3, bounce: 0.2 },
      });
    }
    if (!inView3) {
      animation3.start({
        x: "-100vw",
        transition: { type: "spring", duration: 0.3, bounce: 0.2 },
      });
    }
  }, [inView, animation, inView2, animation2, inView3, animation3]);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ marginTop: "-100px" }}
      >
        <path
          fill="#F64C72"
          fill-opacity="1"
          d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,250.7C672,245,768,203,864,192C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <Section>
        <SectionTitle>Are these the skills your looking for?</SectionTitle>
      </Section>
      <Background id="skills">
        <div ref={ref}>
          <Wrapper flip="true" animate={animation}>
            <MessageWrapper>
              <Title>Front-End Development</Title>
              <SubTitle>
                The Look, Layout and Functionality of your website.
              </SubTitle>
              <SkillsWrapper>
                {FrontEndSKills.map((skill, index) => {
                  return (
                    <Skill
                      whileHover={{ scale: 1.1, backgroundColor: "#d8d8d8" }}
                      key={index}
                    >
                      <SkillIcon image={skill.image} />
                      <SkillName>{skill.name}</SkillName>
                    </Skill>
                  );
                })}
              </SkillsWrapper>
            </MessageWrapper>
            <BannerImage image="https://www.thedesigngrouponline.com/wp-content/uploads/2012/04/shutterstock_1122339353.jpg" />
          </Wrapper>
        </div>
        <div ref={ref2}>
          <Wrapper animate={animation2}>
            <BannerImage image="https://d3tj4wnms16o5e.cloudfront.net/s3fs-public/2019-04/Backend-1.jpg" />
            <MessageWrapper>
              <Title>Back-End Development</Title>
              <SubTitle>
                The Tech that brings your website alive with real data and
                communications.
              </SubTitle>
              <SkillsWrapper>
                {BackEndSkills.map((skill, index) => {
                  return (
                    <Skill
                      whileHover={{ scale: 1.1, backgroundColor: "#d8d8d8" }}
                      key={index}
                    >
                      <SkillIcon image={skill.image} />
                      <SkillName>{skill.name}</SkillName>
                    </Skill>
                  );
                })}
              </SkillsWrapper>
            </MessageWrapper>
          </Wrapper>
        </div>
        <div ref={ref3}>
          <Wrapper flip="true" animate={animation3}>
            <MessageWrapper>
              <Title>General Skills</Title>
              <SubTitle>
                My talents go beyond programming and design, Here is what makes
                me well rounded.
              </SubTitle>
              <SkillsWrapper>
                {GeneralSkills.map((skill, index) => {
                  return (
                    <Skill
                      whileHover={{ scale: 1.1, backgroundColor: "#d8d8d8" }}
                      key={index}
                    >
                      <SkillIcon image={skill.image} />
                      <SkillName>{skill.name}</SkillName>
                    </Skill>
                  );
                })}
              </SkillsWrapper>
            </MessageWrapper>
            <BannerImage image="https://wp-static.gofundme.com/2018/01/03160720/people-talking-at-event-e1532735505404.jpg" />
          </Wrapper>
        </div>
      </Background>
    </>
  );
};

export default Skills;
