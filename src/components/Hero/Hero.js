import {
  Background,
  Wrapper,
  Message,
  Title,
  SubTitle,
  ButtonWrapper,
  LightButton,
  DarkButton,
  TransitionImage,
} from "./Styles";

const Hero = () => {
  return (
    <Background>
      <Wrapper>
        <Message>
          <Title>Professional, Affordable & Stylish</Title>
          <SubTitle>
            Whether you're looking to rebuild your brand from scratch or improve
            an existing web presence, We can get the job done!
          </SubTitle>
          <ButtonWrapper>
            <DarkButton
              to="projects"
              smooth={true}
              spy={true}
              duration={1000}
              offset={-100}
            >
              Projects
            </DarkButton>
            <LightButton to="contact" smooth={true} spy={true} duration={1000}>
              Get Started
            </LightButton>
          </ButtonWrapper>
        </Message>
        <TransitionImage />
      </Wrapper>
    </Background>
  );
};

export default Hero;
