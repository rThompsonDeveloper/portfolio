import {
  Wrapper,
  Container,
  General,
  ContactCard,
  PhoneLink,
  EmailLink,
  FacebookLink,
  PhoneIcon,
  EmailIcon,
  FacebookIcon,
  ContactForm,
  Title,
  InputWrapper,
  Label,
  Input,
  Section,
  TextArea,
  SubTitle,
  Spacer,
  AboutMe,
  Text,
  Submit,
  SVG,
} from "../Contact/Styles";

const Contact = () => {
  return (
    <div>
      <SVG
        style={{
          marginBottom: "-200px",
          marginTop: "-200px",
          position: "absolute",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#333"
          fill-opacity="1"
          d="M0,32L1440,128L1440,320L0,320Z"
        ></path>
      </SVG>
      <Wrapper id="contact">
        <Container>
          <General>
            <Title>Get in touch</Title>
            <SubTitle>
              Call, Email or send a message right here and ill get back to you!
            </SubTitle>
            <ContactCard>
              <PhoneLink href="tel:9194182141">
                <PhoneIcon />
              </PhoneLink>
              <Spacer />
              <EmailLink href="mailto: robert.thompson.developer@gmail.com">
                <EmailIcon />
              </EmailLink>
              <Spacer />
              <FacebookLink
                href="https://www.facebook.com/profile.php?id=100032649171123"
                target="blank"
              >
                <FacebookIcon />
              </FacebookLink>
            </ContactCard>
            <AboutMe>
              <Title>Who am i?</Title>
              <Text>
                I am a very passionate developer with a focus on full stack web
                application development. Although i am ready to tackle any
                challenge, I prefer to work in React, MongoDB, MySQL, NodeJS,
                Github and Postman.
              </Text>
            </AboutMe>
          </General>
          <ContactForm>
            <Section>
              <InputWrapper>
                <Label>Name</Label>
                <Input></Input>
              </InputWrapper>
              <InputWrapper>
                <Label>Email</Label>
                <Input type="email"></Input>
              </InputWrapper>
            </Section>
            <Section>
              <InputWrapper>
                <Label>Company</Label>
                <Input></Input>
              </InputWrapper>
              <InputWrapper>
                <Label>Phone</Label>
                <Input type="email"></Input>
              </InputWrapper>
            </Section>
            <InputWrapper isLarge={true}>
              <Label>Message</Label>
              <TextArea></TextArea>
            </InputWrapper>
            <InputWrapper>
              <Submit>Send</Submit>
            </InputWrapper>
          </ContactForm>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Contact;
