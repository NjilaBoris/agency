import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import SubHeading from "../SubHeading";

const Features = () => {
  return (
    <Container className="pt-10 md:pt-20 lg:pt-32">
      <div className="flex flex-col lg:flex-row items-baseline-last justify-between">
        <Heading className="lg:text-[2.5rem] lg:leading-10">
          Built for fast moving <br /> Teams that Need control.
        </Heading>
        <SubHeading className="py-8 max-md:text-center">
          Deploy AI agents plan, act through your tools, and recover
          outcomes-without changing how yout team work.
        </SubHeading>
      </div>
    </Container>
  );
};

export default Features;
