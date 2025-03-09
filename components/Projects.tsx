"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "./ui/animated-modal";
import { Eye } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { IconBrandGithub } from "@tabler/icons-react";

const projectsData = [
  {
    id: 1,
    name: "Image Editor App",
    short_description:
      "Java-based PPM image editor with MVC design and text commands.",
    brief_description:
      "A Java-based tool designed to manipulate PPM images using the MVC pattern. Users can load, edit, and save images via text-based commands or scripts. Features include RGB tinting, grayscale conversion (value, luma, intensity), vertical/horizontal flipping, brightening/darkening, sepia tone, dithering, and blur/sharpen filters. The application handles pixel-level operations with a robust model, controller-driven command execution, and hashmap-based image storage.",
    cover_image: "/images/projects/image_editor_app/GUI_image_screenshot.png",
    skills_used: [
      "Java",
      "Object Oridented Design",
      "Model-View-Controller (MVC) Design Pattern",
      "Swing GUI",
    ],
    images: [
      "/images/projects/image_editor_app/GUI_image_screenshot.png",
      "/images/projects/image_editor_app/class_diagram.png",
      "/images/projects/image_editor_app/stop_dithered.png",
      "/images/projects/image_editor_app/stop_sepia_tone.png",
      "/images/projects/image_editor_app/stop_blur.png",
      "/images/projects/image_editor_app/stop_darken_50.png",
    ],
    live_link: "",
    github_link: "",
    code_available: true,
    live_site_available: false,
  },
  {
    id: 2,
    name: "Parking Management System",
    short_description:
      "Automates parking with secure management and authentication.",
    brief_description:
      "A database-driven application built with Python and MySQL to streamline parking lot operations. The system manages customer and vehicle data, parking space availability, reservations, and billing, with secure OTP-based authentication for user access. It offers an automated parking experience and admin tools for usage analytics and revenue tracking. Designed with a command-line interface and deployed using a virtual environment for flexibility.",
    cover_image: "/images/projects/parking_management_system/UML_diagram.png",
    skills_used: [
      "Java",
      "Object Oridented Design",
      "Model-View-Controller (MVC) Design Pattern",
      "Swing GUI",
    ],
    images: [
      "/images/projects/parking_management_system/stats.png",
      "/images/projects/parking_management_system/UML_diagram.png",
      "/images/projects/parking_management_system/login.png",
      "/images/projects/parking_management_system/signup.png",
      "/images/projects/parking_management_system/admin.png",
      "/images/projects/parking_management_system/transactions.png",
    ],
    live_link: "",
    github_link: "",
    code_available: true,
    live_site_available: false,
  },
  {
    id: 3,
    name: "Multi-Service Counseling Platform",
    short_description:
      "AI-powered multi-service counseling platform with chat, scheduling, support.",
    brief_description:
      "This multi-service counseling platform connects users with professional advisors in career, education, medical, legal, and more. Powered by an AI-driven recommendation system, it personalizes service suggestions based on user needs. The platform features an appointment scheduler, live chat, 24/7 support, and a machine-learning chatbot for seamless assistance. With a secure and scalable architecture, it ensures privacy and reliability. By integrating technology with expert guidance, we offer a convenient, AI-powered solution for diverse counseling needs.",
    cover_image: "/images/projects/online_counseling_platform/landing.png",
    skills_used: [
      "Python",
      "HTML",
      "CSS",
      "SCSS",
      "PostgreSQL",
      "Amazon Web Services",
      "Machine Learning",
    ],
    images: [
      "/images/projects/online_counseling_platform/landing.png",
      "/images/projects/online_counseling_platform/doctor.png",
      "/images/projects/online_counseling_platform/career.png",
    ],
    live_link: "",
    github_link: "",
    code_available: true,
    live_site_available: false,
  },
];

export function Projects() {
  return (
    <div className="py-10 w-full flex flex-col items-center justify-center max-w-7xl mx-auto">
      <h2 className="text-lg mb-10 md:text-4xl text-black dark:text-white max-w-4xl">
        Projects
      </h2>
      <div className="grid grid-cols-3 gap-x-4 gap-y-20">
        {projectsData &&
          projectsData.map((project) => (
            <Modal key={project.id}>
              <PinContainer title="Read More" href="">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {project.name}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      {project.short_description}
                    </span>
                  </div>
                  {/* <Image
                    src={project.cover_image || ""}
                    alt="cover_image"
                    width="100"
                    height="100"
                    className="flex flex-1 w-full rounded-lg mt-3"
                    style={{ maxHeight: "70% !important" }}
                  /> */}
                  <div
                    className="relative flex flex-1 w-full rounded-lg mt-2"
                    style={{ maxHeight: "70% !important" }}
                  >
                    <Image
                      src={project.cover_image || ""}
                      alt="cover_image"
                      width="100"
                      height="100"
                      className="flex flex-1 w-full rounded-lg mt-3"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                  </div>
                </div>
              </PinContainer>
              <ModalBody>
                <ModalContent>
                  <div className="mb-5 flex items-center flex-wrap gap-x-5 gap-y-2">
                    <h5 className="text-xl text-neutral-600 dark:text-neutral-100 font-semibold">
                      {project.name}
                    </h5>
                    <div className="flex gap-4 items-center ">
                      <a
                        href="#"
                        className="flex justify-center items-center text-purple-300"
                      >
                        <Eye className="h-5 w-5" />
                        <span className="text-[13px] ml-1">
                          Check Live Site
                        </span>
                      </a>
                    </div>
                    <a href="#" className="flex justify-center items-center">
                      <IconBrandGithub className="h-5 w-5" />
                      <span className="text-[13px] ml-1">Get Code</span>
                    </a>
                  </div>
                  <div className="border border-gray-700 border-opacity-75 p-4 rounded-lg mb-5">
                    {project.brief_description}
                  </div>
                  <div className="grid grid-cols-3 gap-y-8">
                    {project?.images?.map((image, idx) => (
                      <Image
                        key={idx}
                        src={image}
                        alt="bali images"
                        width="500"
                        height="500"
                        className="rounded-lg h-36 w-36 md:h-40 md:w-40 object-cover flex-shrink-0"
                      />
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {project?.skills_used?.map((skill, idx) => (
                      <p
                        key={idx}
                        className="bg-slate-800/50  px-5 py-2 text-sm text-blue-100 rounded-sm"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </ModalContent>
                {/* <ModalFooter className="gap-4">
                  <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                    Cancel
                  </button>
                  <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                    Book Now
                  </button>
                </ModalFooter> */}
              </ModalBody>
            </Modal>
          ))}
      </div>
    </div>
  );
}

const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

const VacationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
    </svg>
  );
};

const ElevatorIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M10 10l2 -2l2 2" />
      <path d="M10 14l2 2l2 -2" />
    </svg>
  );
};

const FoodIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  );
};

const MicIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
      <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
    </svg>
  );
};

const ParachuteIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12a10 10 0 1 0 -20 0" />
      <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
      <path d="M2 12l10 10l-3.5 -10" />
      <path d="M15.5 12l-3.5 10l10 -10" />
    </svg>
  );
};
