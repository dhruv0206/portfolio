import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Sept 2024 - Dec 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-bold">
            Eden (Formerly CareWallet)
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-5">
            Software Engineer
          </p>
          <ul className="list-disc ml-8 w-4/5">
            <li className="text-left text-justify">
              Developed RESTful APIs with Node.js, DynamoDB, and React, cutting
              patient-doctor admin tasks by 60%.
            </li>
            <li className="text-left text-justify">
              Implemented a CI/CD pipeline with GitHub Actions, AWS Lambda, API
              Gateway, and CloudWatch, automating deployments to reduce time by
              70% and enhance reliability by streamlining workflows.
            </li>
            <li className="text-left text-justify">
              Developed 10+ dynamic pages using React and Next.js, reducing load
              time by 30% and improving development efficiency by 40% through
              reusable components and optimized rendering.
            </li>
          </ul>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
      img_src: "/images/edenonearth_logo.jpeg",
    },
    {
      title: "July 2024 - August 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-bold">
            Northeastern University
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-5">
            Teaching Assistant
          </p>
          <ul className="list-disc ml-8 w-4/5">
            <li className="text-left text-justify">
              Providing one-on-one assistance to over 100 students during weekly
              office hours, clarifying database design, SQL, normalization and
              data modeling concepts, resulting in a 9% improvement in student
              performance.
            </li>
            <li className="text-left text-justify">
              Grading over 70 assignments, providing detailed feedback and
              personalized guidance, significantly enhancing student
              understanding and learning outcomes.
            </li>
            <li className="text-left text-justify">
              Coordinating with a team of 5 teaching assistants, organized 10+
              grading sessions, and streamlined communication with the course
              instructor, improving workflow and teaching consistency.
            </li>
          </ul>
        </div>
      ),
      img_src: "/images/NEU.jpeg",
    },
    {
      title: "Dec 2021 - Dec 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-bold">
            Actonate Solutions
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-5">
            Software Development Engineer
          </p>
          <ul className="list-disc ml-8 w-4/5">
            <li className="text-left text-justify">
              Designed and integrated key components of Warehouse Management
              System using TypeScript within an agile development framework,
              enabling a 26% increase in goods processing speed.
            </li>
            <li className="text-left text-justify">
              Implemented internationalization for an e-commerce platform using
              TypeScript and managed multilingual content with MySQL, expanding
              accessibility to 175+ million users.
            </li>
            <li className="text-left text-justify">
              Integrated multi-factor authentication (MFA) apps to implement
              two-factor authentication (2FA), improving account security for
              over 7000+ users and reducing unauthorized access incidents by
              40%.
            </li>
            <li className="text-left text-justify">
              Enhanced system performance by 25% through migration from Astro to
              Next, resulting in a 30% faster page load speed.
            </li>
            <li className="text-left text-justify">
              Developed and integrated a Learning Management System (LMS) with
              over 30+ interactive modules and step-by-step guides, improving
              device usability by 80%.
            </li>
          </ul>
        </div>
      ),
      img_src: "/images/actonate_logo.jpeg",
    },
    {
      title: "Sept 2024 - Dec 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-bold">
            Eden (Formerly CareWallet)
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-5">
            Software Engineer
          </p>
          <ul className="list-disc ml-8 w-4/5">
            <li className="text-left text-justify">
              Developed RESTful APIs with Node.js, DynamoDB, and React, cutting
              patient-doctor admin tasks by 60%.
            </li>
            <li className="text-left text-justify">
              Implemented a CI/CD pipeline with GitHub Actions, AWS Lambda, API
              Gateway, and CloudWatch, automating deployments to reduce time by
              70% and enhance reliability by streamlining workflows.
            </li>
            <li className="text-left text-justify">
              Developed 10+ dynamic pages using React and Next.js, reducing load
              time by 30% and improving development efficiency by 40% through
              reusable components and optimized rendering.
            </li>
          </ul>
        </div>
      ),
      img_src: "/images/redink_edtech_solutions_logo.jpeg",
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
