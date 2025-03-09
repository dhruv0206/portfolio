"use client";
import ContactMe from "@/components/contact-me";
import { FloatingDockDemo } from "@/components/floating-dock-demo";
import { Skills } from "@/components/infinite-moving-cards-demo";
import { Particles } from "@/components/magicui/particles";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Projects } from "@/components/Projects";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/start-demo";
import { TimelineDemo } from "@/components/timeline-demo";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { handleOpenPdf } from "@/lib/utils";
import { MoveDown } from "lucide-react";

export default function Home() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("timeline-section");
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToContactSection = () => {
    const contactSection = document.getElementById("contact-me-section");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const ResumefileUrl = "/01_31_2025_Dhruv_Res_SDE_SINGLE_PAGE.pdf";

  return (
    <div>
      <div className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden dark:bg-neutral-950">
        {/* Dot Pattern Background */}
        {/* <DotPattern width={70} height={70} className="absolute inset-0" /> */}
        {/* Meteors Animation */}
        <Particles
          className="absolute inset-0 dark:bg-black"
          quantity={500}
          ease={200}
          vx={0.7}
          vy={0.7}
        />
        {/* <ShootingStarsAndStarsBackgroundDemo /> */}
        {/* Main Content */}
        <div className="md:ml-14 absolute inset-0 flex flex-col items-center justify-center text-white text-2xl font-bold">
          <p>From Binary To Brilliance, I Am</p>
          {/* <TypingAnimation startOnView={true}>
            Software Developer
          </TypingAnimation> */}
          <TypingAnimation
            texts={["Dhruv Patel", "Software Engineer", "Full Stack Developer"]}
            duration={100}
            pauseDuration={2000}
            className="my-custom-class"
          />
          <div className="flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-lg"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white text-sm flex items-center space-x-2"
              onClick={scrollToContactSection}
            >
              {/* <AceternityLogo /> */}
              <span>Contact Me</span>
            </HoverBorderGradient>
            <HoverBorderGradient
              containerClassName="rounded-lg"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white text-sm flex items-center space-x-2"
              onClick={() => handleOpenPdf(ResumefileUrl)}
            >
              {/* <AceternityLogo /> */}
              <span>Resume</span>
            </HoverBorderGradient>
          </div>
        </div>
        {/* <DockDemo /> */}
        <div className="flex">
          <FloatingDockDemo />
        </div>

        <MoveDownIcon
          className="animate-bounce cursor-pointer absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center justify-center"
          onClick={scrollToNextSection}
        />
        <style jsx>{`
          .move-down-btn {
            transition: all 0.3s ease;
          }
          .move-down-btn:hover {
            transform: translate(
              -50%,
              10px
            ); // Keeps the -translate-x-1/2 and adds slight downward movement
          }
        `}</style>
      </div>
      <div id="timeline-section">
        <TimelineDemo />
      </div>

      <Skills />
      <Projects />
      {/* <ProjectsModal /> */}
      {/* <FloatingNavDemo /> */}
      <div id="contact-me-section">
        <ContactMe />
      </div>
    </div>
  );
}

const MoveDownIcon = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-move-down ${className}`}
      onClick={onClick}
    >
      <path d="M8 18L12 22L16 18" />
      <path d="M12 2V22" />
    </svg>
  );
};
