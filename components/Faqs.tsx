"use client";
import React, { useState } from "react";
import Container from "./Container";
import { UserChatIcon } from "@/icons";
import Heading from "./Heading";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const Faqs = () => {
  const questions = [
    {
      question: "What is Agentforce AI?",
      answer: "Agentforce AI is a platform for building and managing AI agents",
    },
    {
      question: "Who is Agentforce AI built for?",
      answer: "Agentforce AI is a platform for building and managing AI agents",
    },
    {
      question: "How does is Agentforce AI work?",
      answer: "Agentforce AI is a platform for building and managing AI agents",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial so you can explore all features before committing to a plan",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "we provide 24/7 customer support throught chat, email, and comprehensive documentation to help you getthe most out of Agenceforce AI",
    },
  ];

  return (
    <section className="py:6 md:py-6 lg:py-7 relative overflow-hidden">
      <Container>
        <UserChatIcon />
        <Heading className="my-8 md:my-12">
          Frequently <br /> Asked Questions
        </Heading>
        <div className="flex flex-col gap-4">
          {questions.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Faqs;

const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full rounded-3xl overflow-hidden bg-neutral-100 p-4 md:p-8"
    >
      <div className="flex items-center justify-between ">
        <h3 className="text-sm  text-neutral-900 font-display font-extrabold">
          {question}
        </h3>
        <div className="size-6 rounded-full flex relative items-center justify-center bg-neutral-900">
          <IconMinus
            className={cn(
              "size-6 text-neutral-100 absolute inset-0  transition-all duration-200",
              open && "scale-0 rotate-90"
            )}
          />
          <IconPlus
            className={cn(
              "size-6 text-neutral-100 absolute inset-0 scale-0 -rotate-90 transition-all duration-200",
              open && "scale-100 rotate-0"
            )}
          />
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className="overflow-hidden"
      >
        <motion.p
          key={String(open)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="text-left mt-4 text-neutral-600"
        >
          {answer}
        </motion.p>
      </motion.div>
    </button>
  );
};
