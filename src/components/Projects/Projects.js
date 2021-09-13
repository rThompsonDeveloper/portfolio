import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

import { projectList } from "./Data";

import {
  Wrapper,
  Title,
  SubTitle,
  ProjectWrapper,
  ProjectContainer,
  Image,
  ButtonWrapper,
  ButtonLeft,
  ButtonRight,
  Description,
  Name,
  ContentWrapper,
  Date,
} from "./Styles";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: { duration: 0.3 },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Wrapper id="projects">
      <Title>Projects that stand out</Title>
      <SubTitle>Transforming the way the world sees you</SubTitle>
      <ProjectWrapper ref={ref}>
        {projectList.map((project, index) => {
          return (
            <ProjectContainer animate={animation} key={index}>
              <div
                style={{
                  backgroundColor: "black",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
              >
                <Image image={project.image} />
              </div>
              <ButtonWrapper>
                <ButtonLeft>Launch Site</ButtonLeft>
                <ButtonRight>View GitHub</ButtonRight>
              </ButtonWrapper>
              <ContentWrapper>
                <Date>{project.date}</Date>
                <Name>{project.name}</Name>
                <Description>{project.description}</Description>
                <Name>Technologies</Name>
                <Description>{project.technologies}</Description>
              </ContentWrapper>
            </ProjectContainer>
          );
        })}
      </ProjectWrapper>
    </Wrapper>
  );
};

export default Projects;
