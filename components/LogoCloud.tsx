import Image from "next/image";
import React from "react";

const LogoCloud = () => {
  const logos = [
    { title: "Stripe", src: "./stripe.svg" },
    { title: "Slack", src: "./slack.svg" },
    { title: "Zapier", src: "./zapier.svg" },
    { title: "Zendesk", src: "./zendesk.svg" },
    { title: "Notion", src: "./notion.svg" },
    { title: "Mailchimp", src: "./mailchimp.svg" },
  ];
  return (
    <section>
      <h2 className="text-neutral-600 font-medium dark:text-neutral-400 text-lg pt-10 text-center max-w-xl mx-auto">
        Trusted by moderm operators industries.
        <br />{" "}
        <span className="text-neutral-400">
          From pilots to scale without chaos
        </span>
      </h2>
      <div className="grid grid-cols-2 gap-8 pt-10 md:grid-cols-3 max-w-3xl mx-auto">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            width={100}
            height={100}
            alt={logo.title}
            className="size-14 object-contain mx-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default LogoCloud;
