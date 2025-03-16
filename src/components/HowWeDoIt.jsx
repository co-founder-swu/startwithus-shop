import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { CanvasRevealEffect } from "./design/CanvasRevealEffect";
import TagLine from "./TagLine";

const Approach = () => {
  return (
    <section className="w-full -mt-20 py-2 p-10">
      <TagLine className="top-4 left-8 sm:top-8 sm:left-8 md:top-10 md:left-10 lg:top-12 lg:left-12">
        THIS IS HOW WE DO IT
      </TagLine>
      <br/>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-8">
        <div className="h4 text-left">
          <h3>We believe in crafting custom strategies & plans tailored to each client's unique goals and vision, ensuring personalized solutions for every business.</h3>
        </div>
        <Card
          title="Many businesses use generic templates that miss their brand essence."
          icon={<AceternityIcon order="Identifying Loopholes" />}
          des="We identify these gaps to create tailored digital solutions."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-back rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="We offer customized digital solutions to meet specific business needs."
          icon={<AceternityIcon order="Tailored Solutions" />}
          des="Ensuring every solution resonates with your brand identity."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-back rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Our services cover all aspects of digital strategy and implementation."
          icon={<AceternityIcon order="Comprehensive Services" />}
          des="From web design to SEO and targeted marketing."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-back rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({ title, icon, children, des }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="neon-border bg-grid2 border-spacing-3 group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[23rem] rounded-3xl"
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h4 className="dark:text-white text-center h6 opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h4>
        <p className="text-md opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:text-white text-center group-hover/canvas-card:-translate-y-2 transition duration-200" style={{ color: "#E4ECFF" }}>
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-5 py-2 text-gradient font-bold text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="0.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
