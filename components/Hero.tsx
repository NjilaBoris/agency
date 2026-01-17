import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { Button } from "./ui/button";
import Link from "next/link";
import LandingImages from "./LandingImages";

const Hero = () => {
  return (
    <section className="pt-5 md:pt-15 lg:pt-15">
      <Container className="max-lg:flex max-lg:flex-col max-md:px-2 items-center">
        <Heading as="h1" className="max-md:text-center max-md:text-2xl">
          Agents that do the work <br /> Approvals that keep you safe
        </Heading>
        <SubHeading className="py-8 max-md:text-center">
          Deploy AI agents plan, act through your tools, and recover
          outcomes-without changing how yout team work.
        </SubHeading>
        <div className="flex items-center gap-6">
          <Button className="bg-foreground text-white shadow-brand">
            Start your free trial
          </Button>
          <Button
            asChild
            className="bg-neutral-100 hover:opacity-50  transition-all ease-out duration-200"
          >
            <Link href="/demos">View role based demos</Link>
          </Button>
        </div>
        <LandingImages />
      </Container>
    </section>
  );
};

export default Hero;
