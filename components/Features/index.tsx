import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import Card, { CardContent, CardCTA, CardSkeleton, CardTitle } from "./Card";
import { IconPlus } from "@tabler/icons-react";
import SkeletonOne from "./Skeleton/First";
import SkeletonThree from "./Skeleton/Third";
import SkeletonTwo from "./Skeleton/Second";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 md:my-20">
        <Card className="rounded-tl-3xl  rounded-bl-3xl">
          <CardSkeleton>
            <SkeletonOne />
          </CardSkeleton>
          <CardContent>
            <CardTitle>Prebuild Agents, Tunned to your Workflow</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card>
          <CardSkeleton>
            <SkeletonTwo />
          </CardSkeleton>
          <CardContent>
            <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card className="rounded-tr-3xl rounded-br-3xl">
          <CardSkeleton>
            <SkeletonThree />
          </CardSkeleton>
          <CardContent>
            <CardTitle>Approvals, Guardrails, and Full Auditability</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Features;
