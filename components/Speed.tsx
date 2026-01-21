import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

import LandingImages from "./LandingImages";

const Speed = () => {
  return (
    <section className="pt-5 md:pt-15 lg:pt-15">
      <Container className="max-lg:flex max-lg:flex-col max-md:px-2 items-center">
        <Heading as="h1" className="max-md:text-center max-md:text-2xl">
          Built for Speed <br /> Designed for Scale
        </Heading>
        <SubHeading className="py-8 max-md:text-center">
          Deploy AI agents plan, act through your tools, and recover
          outcomes-without changing how yout team work.
        </SubHeading>

        <LandingImages />
      </Container>
    </section>
  );
};

export default Speed;
