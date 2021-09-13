import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

import { List } from "./Data";

import {
  Wrapper,
  Testimonial,
  Image,
  Name,
  Rating,
  Star,
  Message,
  InfoBox,
  Content,
  SectionTitle,
  SectionSubTitle,
  JobTitle,
} from "./Styles";

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: { type: "spring", duration: 0.5, bounce: 0 },
      });
    }
    if (!inView) {
      animation.start({
        y: "30vw",
        transition: { type: "spring", duration: 0.5, bounce: 0 },
      });
    }
  }, [inView, animation]);

  return (
    <div id="testimonials">
      <SectionTitle>Our Reason For Succeeding</SectionTitle>
      <SectionSubTitle>
        See what real people have to say about us.
      </SectionSubTitle>
      <Wrapper ref={ref}>
        {List.map((item, index) => {
          return (
            <Testimonial
              key={index}
              animate={animation}
              whileHover={{ scale: 1.1 }}
            >
              <Content color={index}>
                <Image src={item.image} />
                <JobTitle>{item.jobTitle}</JobTitle>
                <InfoBox>
                  <Name>{item.name}</Name>
                  <Rating>
                    {item.rating.map((rating, index) => {
                      return <Star key={index} />;
                    })}
                  </Rating>
                </InfoBox>
                <Message>{item.message}</Message>
              </Content>
            </Testimonial>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default Testimonials;
