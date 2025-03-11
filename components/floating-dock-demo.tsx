import { FloatingDock } from "@/components/ui/floating-dock";
import {
  // IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedinFilled,
  IconFileCvFilled,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const ResumefileUrl = "/01_31_2025_Dhruv_Res_SDE_SINGLE_PAGE.pdf";
  const links = [
    {
      title: "Resume",
      icon: (
        <IconFileCvFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: ResumefileUrl,
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/dhruv0206",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/dhruv-patel-0206/",
    },

    // {
    //   title: "Discord",
    //   icon: (
    //     <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
  ];

  return (
    <div className="flex items-center justify-center w-full mt-10">
      <span className="relative z-10 text-white font-bold text-2xl left-10 pb-3 hidden md:block">
        DP
      </span>
      <FloatingDock
        // mobileClassName="translate-y-10" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
