"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  Briefcase,
  Network,
  GitMerge,
  BrainCircuit,
  Code2,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type ExperienceData = {
  role: string;
  company: string;
  duration: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  highlights: string[];
  tech: string[];
};

const EXPERIENCE: ExperienceData[] = [
  {
    role: "Web Development Intern",
    company:
      "CodeAlpha • Cognifyz Technologies • Oasis Infobyte • SyntecxHub",
    duration: "2026",
    category: "Web Development Internship",
    icon: <Network className="w-8 h-8 text-primary" />,
    description:
      "Completed virtual web development internship programs by developing responsive web applications, integrating REST APIs, optimizing frontend performance, and building scalable full-stack solutions using modern technologies.",
    highlights: [
      "Responsive Web Development",
      "Frontend & Backend Development",
      "REST API Integration",
      "Real-World Projects",
      "Performance Optimization",
      "Git & GitHub Workflows",
      "Professional Development",
      "Problem Solving"
    ],
    tech: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "REST APIs"
    ]
  },

  {
    role: "Open Source Contributor",
    company: "Social Summer of Code (SSOC) 2026",
    duration: "Summer 2026",
    category: "Open Source Development",
    icon: <GitMerge className="w-8 h-8 text-secondary" />,
    description:
      "Contributed to community-driven open-source projects by implementing new features, fixing bugs, resolving issues, creating pull requests, and collaborating with maintainers using industry-standard Git workflows.",
    highlights: [
      "Open Source Contributions",
      "Feature Development",
      "Bug Fixing",
      "Issue Resolution",
      "Git & GitHub",
      "Pull Requests",
      "Community Collaboration",
      "Software Engineering"
    ],
    tech: [
      "Git",
      "GitHub",
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST APIs"
    ]
  },

  {
    role: "Freelance Full Stack Developer",
    company: "Self Employed",
    duration: "2025 – Present",
    category: "Freelance Development",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    description:
      "Developing responsive full-stack web applications for clients with modern UI/UX, scalable backend architecture, secure authentication, and production-ready deployment.",
    highlights: [
      "Client Projects",
      "Full Stack Development",
      "Responsive UI",
      "REST API Development",
      "Authentication",
      "Deployment",
      "Performance Optimization",
      "Database Design"
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "Git"
    ]
  },

  {
    role: "Open Source Developer",
    company: "GitHub Community",
    duration: "2025 – Present",
    category: "Community Development",
    icon: <Rocket className="w-8 h-8 text-secondary" />,
    description:
      "Actively contributing to public repositories by building new features, improving documentation, reviewing code, fixing issues, and collaborating with developers across global open-source communities.",
    highlights: [
      "Repository Contributions",
      "Code Reviews",
      "Documentation",
      "Feature Enhancement",
      "Issue Resolution",
      "Community Participation",
      "Collaborative Engineering",
      "Global Collaboration"
    ],
    tech: [
      "Git",
      "GitHub",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js"
    ]
  }, {
    role: "Hackathon Participant",
    company: "National & Community Hackathons",
    duration: "2024 – Present",
    category: "Hackathons & Innovation",
    icon: <Rocket className="w-8 h-8 text-secondary" />,
    description:
      "Participated in multiple hackathons by collaborating with teams, building innovative software solutions, solving real-world problems, and developing MVPs within limited timelines.",
    highlights: [
      "7+ Hackathons Participated",
      "Team Collaboration",
      "4+ National Hackathons",
      "Problem Solving",
      "Project Presentation",
      "Full Stack Development",
      "Innovation Challenges",
      "Competitive Coding"
    ],
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Git",
      "GitHub",
      "REST APIs",
      "Figma"
    ]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    if (!containerRef.current || !timelineRef.current) return;

    gsap.fromTo(
      ".exp-timeline-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-midnight py-16 sm:py-20 lg:py-32 px-4 sm:px-6"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: yOffset }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-1/4 right-0 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] rounded-full bg-secondary/10 blur-[100px] lg:blur-[150px]" />

        <div className="absolute bottom-1/4 left-1/4 w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-primary/10 blur-[80px] lg:blur-[120px]" />

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.05),transparent_70%)]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20 lg:mb-28"
        >

          <span className="inline-flex items-center gap-2 text-secondary uppercase tracking-[0.35em] text-xs sm:text-sm">

            <Briefcase className="w-4 h-4" />

            Professional Experience

          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">

            Experience{" "}

            <span className="text-gradient">
              & Journey
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-gray-400 px-2">

            Building impactful software through internships,
            freelance development, and open-source collaboration
            while continuously improving full-stack engineering
            skills and delivering scalable modern applications.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <div
            ref={timelineRef}
            className="relative pl-5 sm:pl-8 md:pl-16 border-l border-white/10 space-y-12 sm:space-y-20 lg:space-y-28"
          >

            <div className="exp-timeline-line absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent origin-top" />

            {EXPERIENCE.map((exp) => (

              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8 }}
                className="relative group"
              >

                {/* Timeline Dot */}

                <div className="hidden md:block absolute -left-[73px] top-12 w-5 h-5 rounded-full border-2 border-primary bg-midnight group-hover:bg-primary transition-all duration-300" />

                {/* Experience Card */}

                <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/10 glass p-5 sm:p-8 lg:p-12">

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative z-10 flex flex-col xl:flex-row gap-8 lg:gap-12">

                    {/* Left Section */}

                    <div className="flex-1">

                      <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 mb-8">

                        <div className="shrink-0 rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4">

                          {exp.icon}

                        </div>

                        <div>

                          <div className="flex flex-wrap gap-3 mb-3">

                            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-widest text-primary">

                              {exp.category}

                            </span>

                            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">

                              {exp.duration}

                            </span>

                          </div>

                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">

                            {exp.role}

                          </h3>

                          <h4 className="mt-2 text-lg sm:text-xl text-gray-300 break-words">

                            {exp.company}

                          </h4>

                        </div>

                      </div>

                      <p className="border-l-2 border-primary/30 pl-4 sm:pl-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">

                        {exp.description}

                      </p>
                      {/* Tech Stack */}

                      <div className="mt-10">

                        <div className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-gray-400 mb-5">

                          <Code2 className="w-4 h-4 text-primary" />

                          Engineering Tech Stack

                        </div>

                        <div className="flex flex-wrap gap-2 sm:gap-3">

                          {exp.tech.map((tech, index) => (

                            <motion.span
                              key={index}
                              whileHover={{
                                scale: 1.05,
                                y: -2,
                              }}
                              transition={{ duration: .2 }}
                              className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-xs sm:text-sm text-gray-300 hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                            >

                              {tech}

                            </motion.span>

                          ))}

                        </div>

                      </div>

                    </div>

                    {/* Right Side */}

                    <div className="w-full xl:w-[360px]">

                      <div className="relative h-full rounded-3xl border border-white/10 glass p-5 sm:p-8 overflow-hidden">

                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

                        <div className="relative z-10">

                          <div className="flex items-center gap-2 mb-8 text-secondary uppercase tracking-[0.3em] text-xs sm:text-sm">

                            <BrainCircuit className="w-4 h-4" />

                            Core Responsibilities

                          </div>

                          <div className="space-y-5">

                            {exp.highlights.map((item, index) => (

                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: index * 0.08,
                                  duration: .4,
                                }}
                                className="flex items-start gap-3"
                              >

                                <div className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />

                                <span className="text-sm sm:text-base leading-7 text-gray-300">

                                  {item}

                                </span>

                              </motion.div>

                            ))}

                          </div>

                        </div>

                        {/* Terminal */}

                        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-black/80 to-transparent flex items-end px-4 sm:px-6 py-4">

                          <motion.div
                            animate={{
                              opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 3,
                            }}
                            className="text-[10px] sm:text-[11px] text-primary/40 leading-5"
                          >



                          </motion.div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
}