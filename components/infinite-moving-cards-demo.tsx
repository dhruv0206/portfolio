"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Skills() {
  return (
    // <div className="max-w-7xl mx-auto py-10 px-4 rounded-2xl flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <div className="py-10 flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="mb-5 text-lg md:text-4xl">Skills</div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const IMG_BASE_PATH = "/images/skills";

const testimonials = [
  {
    name: "React JS",
    img_src: IMG_BASE_PATH + "/react.png",
  },
  {
    name: "TypeScript",
    img_src: IMG_BASE_PATH + "/typescript.png",
  },
  {
    name: "JavaScript",
    img_src: IMG_BASE_PATH + "/javascript.png",
  },
  {
    name: "Amazon Web Services",
    img_src: IMG_BASE_PATH + "/aws.png",
  },
  {
    name: "Python",
    img_src: IMG_BASE_PATH + "/python.png",
  },
  {
    name: "Bootstrap",
    img_src: IMG_BASE_PATH + "/bootstrap.png",
  },
  {
    name: "CSS",
    img_src: IMG_BASE_PATH + "/css.png",
  },
  {
    name: "DynamoDB",
    img_src: IMG_BASE_PATH + "/dynamodb.png",
  },
  {
    name: "HTML",
    img_src: IMG_BASE_PATH + "/html.png",
  },
  {
    name: "JAVA",
    img_src: IMG_BASE_PATH + "/java.png",
  },
  {
    name: "MongoDB",
    img_src: IMG_BASE_PATH + "/mongodb.png",
  },
  {
    name: "MySQL",
    img_src: IMG_BASE_PATH + "/mysql.png",
  },
  {
    name: "Next JS",
    img_src: IMG_BASE_PATH + "/nextjs.png",
  },
  {
    name: "Node JS",
    img_src: IMG_BASE_PATH + "/nodejs.png",
  },
  {
    name: "PostgreSQL",
    img_src: IMG_BASE_PATH + "/postgresql.png",
  },
  {
    name: "Redis",
    img_src: IMG_BASE_PATH + "/redis.png",
  },
  {
    name: "Redux",
    img_src: IMG_BASE_PATH + "/redux.png",
  },
  {
    name: "Tailwind CSS",
    img_src: IMG_BASE_PATH + "/tailwind.png",
  },
  {
    name: "Vite JS",
    img_src: IMG_BASE_PATH + "/vitejs.png",
  },
  {
    name: "Docker",
    img_src: IMG_BASE_PATH + "/docker.png",
  },
];
