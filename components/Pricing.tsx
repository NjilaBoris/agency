import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { LockIcon, LoopIcon, UserIcon } from "@/icons";
import { Button } from "./ui/button";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import Link from "next/link";

const Pricing = () => {
  return (
    <section className="py-10 md:py-20 lg:py-32 relative overflow-hidden">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4">
          <SubHeading>Trusted by 500+ enterprise companies</SubHeading>
          <Heading>
            Affortable pricing. <br />
            Easy scaling.
          </Heading>
          <SubHeading className="mt-4">
            Start small to explore automation, add agents as you scale, and
            unlock enterprise-grade gaurdrails, orchestration, and reporting
            when you&apos;re ready.
          </SubHeading>
          <ul className="list-none *:flex *:items-center *:gap-2 *:font-medium mt-4 flex-col gap-2">
            <li>
              <LockIcon />
              <p>Built-in Guardrails</p>
            </li>
            <li>
              <UserIcon />
              <p>Agent Orchestration</p>
            </li>
            <li>
              <LoopIcon />
              <p>Human-in-the-loop</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <PricingCard
            price="10"
            description=" Perfect indivaduals or small teams exploring automation."
            ctaText="Start your free trial"
            ctaLink="/"
            steps={[
              "1 AI Agent Included",
              "Standard Intergration",
              "Basic Approval Flows",
              "7 Day activity logs",
            ]}
          />
          <PricingCard
            price="60"
            description="Ideal for growing teams ready to scale automation safety."
            ctaText="Contact Sales"
            ctaLink="/"
            steps={[
              "Upto 5 AI Agents",
              "Multi-agent Auchestration",
              "Advanced Approval Routine",
              "30-days audit trails",
              "ROI insight",
            ]}
          />
        </div>
      </Container>
    </section>
  );
};

export default Pricing;

const PricingCard = ({
  price,
  description,
  ctaLink,
  ctaText,
  steps,
}: {
  price: string;
  description: string;
  ctaLink: string;
  ctaText: string;
  steps: string[];
}) => {
  return (
    <div className="p-4 md:p-8 rounded-3xl bg-neutral-100 items-center grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <Heading>
          ${price}
          <span className="text-neutral-500 text-sm md:text-xl lg:text-3xl">
            /mo
          </span>
        </Heading>
        <SubHeading className="mt-2">{description}</SubHeading>
        <Button className="bg-foreground text-white mt-4">
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>

      <ul className="list-none *:flex *:items-center *:text-[0.6rem]  *:gap-3 *:font-medium mt-4 flex-col gap-6">
        {steps.map((step, index) => (
          <Step key={step + index} title={step} />
        ))}
      </ul>
    </div>
  );
};

const Step = ({ title }: { title: string }) => {
  return (
    <li>
      <IconCircleCheckFilled className="size-5 text-neutral-500" />
      <p>{title}</p>
    </li>
  );
};
