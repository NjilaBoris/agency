import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

import LandingImages from "./LandingImages";

const Outcomes = () => {
  return (
    <section className="pt-5 md:pt-15 lg:pt-15">
      <Container className="max-lg:flex max-lg:flex-col max-md:px-2 items-center">
        <Heading as="h1" className="max-md:text-center max-md:text-2xl">
          Governed AI, <br /> Trusted Outcomes
        </Heading>
        <SubHeading className="py-8 max-md:text-center">
          Deploy AI agents with built-in approvals, brand guardrials, and audit
          trails. Every step is visible, reviewable, and compalint
        </SubHeading>
        <LandingImages />
      </Container>
    </section>
  );
};

export default Outcomes;
