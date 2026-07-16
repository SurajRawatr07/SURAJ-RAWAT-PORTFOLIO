"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  Code2,
  ShieldCheck,
  Database,
  Terminal,
  ExternalLink,
  LayoutTemplate,
  X,
  Sparkles,
  BrainCircuit
} from "lucide-react";


interface Project {

  id: string;

  title: string;

  category: string;

  tagline: string;

  image: string;

  icon: React.ReactNode;

  features: string[];

  tech: string[];

  github: string;

}



const ProjectIcon = ({
  children,
  gradient
}: {
  children: React.ReactNode;
  gradient: string;
}) => (

  <div
    className={`
w-full
h-full
rounded-2xl
flex
items-center
justify-center
bg-gradient-to-br
${gradient}
shadow-xl
border
border-white/20
`}
  >

    {children}

  </div>

);



const SmartLogo = () => (
  <ProjectIcon gradient="from-blue-500 to-purple-700">
    <Sparkles className="text-white w-8 h-8" />
  </ProjectIcon>
);


const ExamLogo = () => (
  <ProjectIcon gradient="from-red-500 to-orange-600">
    <ShieldCheck className="text-white w-8 h-8" />
  </ProjectIcon>
);


const PortfolioLogo = () => (
  <ProjectIcon gradient="from-cyan-500 to-blue-700">
    <Code2 className="text-white w-8 h-8" />
  </ProjectIcon>
);


const IDELogo = () => (
  <ProjectIcon gradient="from-green-500 to-emerald-700">
    <Terminal className="text-white w-8 h-8" />
  </ProjectIcon>
);


const VaultLogo = () => (
  <ProjectIcon gradient="from-yellow-400 to-orange-600">
    <Database className="text-white w-8 h-8" />
  </ProjectIcon>
);


const ReadmeLogo = () => (
  <ProjectIcon gradient="from-indigo-500 to-purple-800">
    <Code2 className="text-white w-8 h-8" />
  </ProjectIcon>
);



const PROJECTS: Project[] = [


  {
    id: "smartresume",

    title: "SmartResume AI",

    category: "AI Resume Builder",

    tagline:
      "AI powered ATS friendly resume builder with realtime preview and PDF export",

    image: "/PROJECT.jpg",

    icon: <SmartLogo />,

    features: [
      "AI resume generation",
      "ATS optimization",
      "Realtime preview",
      "PDF export system"
    ],

    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "MongoDB"
    ],

    github:
      "https://github.com/SurajRawatr07"

  },


  {
    id: "examportal",

    title: "NS Technology Exam Portal",

    category: "AI EdTech Platform",

    tagline:
      "Secure online examination platform with AI based monitoring",

    image: "/PROJECT.jpg",

    icon: <ExamLogo />,

    features: [
      "Face detection",
      "Anti cheating system",
      "OTP verification",
      "Question randomization"
    ],

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "TensorFlow",
      "FaceAPI"
    ],

    github:
      "https://github.com/SurajRawatr07"

  },


  {
    id: "portfolio",

    title: "SURAJ-RWT Portfolio 2026",

    category: "Frontend Engineering",

    tagline:
      "Premium futuristic developer portfolio with animations and glass UI",

    image: "/PROJECT.jpg",

    icon: <PortfolioLogo />,

    features: [
      "Modern UI design",
      "GSAP animations",
      "Responsive layout",
      "Interactive sections"
    ],

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "GSAP"
    ],

    github:
      "https://github.com/SurajRawatr07"

  },


  {
    id: "oneide",

    title: "ONE IDE",

    category: "Developer Tool",

    tagline:
      "Online collaborative coding and execution environment",

    image: "/PROJECT.jpg",

    icon: <IDELogo />,

    features: [
      "Online compiler",
      "Multiple languages",
      "Developer workspace",
      "Docker execution"
    ],

    tech: [
      "React",
      "Node.js",
      "Docker",
      "API"
    ],

    github:
      "https://github.com/SurajRawatr07"

  },


  {
    id: "certificate",

    title: "Certificate Vault",

    category: "Web Application",

    tagline:
      "Digital certificate management and verification platform",

    image: "/PROJECT.jpg",

    icon: <VaultLogo />,

    features: [
      "Certificate storage",
      "Verification system",
      "Search dashboard",
      "Cloud integration"
    ],

    tech: [
      "React",
      "Firebase",
      "Tailwind",
      "TypeScript"
    ],

    github:
      "https://github.com/SurajRawatr07"

  },


  {
    id: "readme",

    title: "README Design Kit",

    category: "Developer Resource",

    tagline:
      "Modern README template collection for developers and open source projects",

    image: "/PROJECT.jpg",

    icon: <ReadmeLogo />,

    features: [
      "Professional README templates",
      "Open source documentation",
      "Developer friendly sections",
      "Reusable design system"
    ],

    tech: [
      "Markdown",
      "GitHub",
      "Open Source",
      "Documentation"
    ],

    github:
      "https://github.com/SurajRawatr07/README-DESIGN-KIT"

  }


];


export default function Projects() {

  const [selectedProject, setSelectedProject]
    =
    useState<Project | null>(null);



  return (
    <section
      className="
relative
min-h-screen
w-full
bg-black
overflow-hidden
py-24
px-5
"
      style={{
        fontFamily: "'Times New Roman',serif"
      }}
    >

      {/* BACKGROUND EFFECT */}

      <div className="
absolute
inset-0
overflow-hidden
pointer-events-none
">

    <motion.div

      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.5, 0.2]
      }}

      transition={{
        duration: 8,
        repeat: Infinity
      }}

      className="
absolute
top-10
left-1/2
-translate-x-1/2
w-[500px]
h-[500px]
rounded-full
bg-primary/20
blur-[150px]
"

    />


    <motion.div

      animate={{
        y: [0, -80, 0]
      }}

      transition={{
        duration: 10,
        repeat: Infinity
      }}

      className="
absolute
right-0
bottom-20
w-[350px]
h-[350px]
rounded-full
bg-secondary/20
blur-[120px]
"

    />


  </div>



  {/* HEADER */ }


  <div className="
relative
z-10
text-center
max-w-5xl
mx-auto
mb-14
">


    <motion.div

      initial={{
        opacity: 0,
        y: 30
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      viewport={{
        once: true
      }}

    >


      <div className="
flex
justify-center
items-center
gap-2
text-primary
uppercase
tracking-[0.4em]
text-xs
mb-5
">

        <LayoutTemplate size={18} />

        Project Showcase

      </div>



      <h2 className="
text-4xl
sm:text-5xl
md:text-7xl
font-bold
text-white
">

        Projects 

        <span className="text-gradient">


        & Applications

        </span>


      </h2>



      <p className="
text-gray-400
mt-5
text-sm
sm:text-lg
max-w-3xl
mx-auto
leading-7
">

        A collection of scalable applications,
        AI systems and developer tools built with modern technologies.

      </p>


    </motion.div>


  </div>




  {/* PROJECT GRID */ }


  <div className="
relative
z-10
max-w-7xl
mx-auto
grid
grid-cols-1
sm:grid-cols-2
gap-8
">


    {
      PROJECTS.map((project, index) => (


        <motion.div

          key={project.id}


          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.5,
            delay: index * 0.08
          }}



    whileHover={{
      y: -12,
      scale: 1.02
    }}


    onClick={() => setSelectedProject(project)}


    className="
    group
    cursor-pointer
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    shadow-2xl
    transition-all
    duration-300
    "


>


    {/* PROJECT IMAGE */}


    <div className="
relative
h-64
sm:h-72
overflow-hidden
bg-zinc-900
">


      <img

        src={project.image}

        alt={project.title}

        onError={(e) => {

          e.currentTarget.src = "/globe.svg";

        }}

        className="
w-full
h-full
object-cover
transition-all
duration-700
group-hover:scale-110
"

      />



      <div className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/30
to-transparent
"/>



      <div className="
absolute
top-4
right-4
px-3
py-1
rounded-full
bg-black/50
backdrop-blur-md
border
border-white/20
text-white
text-xs
">

        PROJECT

      </div>



    </div>





    {/* CONTENT */}


    <div className="
p-6
">


      <div className="
w-14
h-14
mb-5
">

        {project.icon}

      </div>




      <span className="
text-primary
text-xs
uppercase
tracking-widest
">

        {project.category}

      </span>




      <h3 className="
text-2xl
font-bold
text-white
mt-3
">

        {project.title}

      </h3>




      <p className="
text-gray-400
text-sm
mt-3
leading-6
">

        {project.tagline}

      </p>




      <div className="
flex
flex-wrap
gap-2
mt-5
">


        {
          project.tech.slice(0, 4).map((tech) => (

            <span

              key={tech}

              className="
px-3
py-1
rounded-full
bg-white/5
border
border-white/10
text-xs
text-gray-300
"

            >

              {tech}

            </span>


          ))

        }


      </div>





      <div className="
mt-6
flex
items-center
justify-between
text-sm
text-gray-400
">


        <span>

          Click to view details

        </span>


        <ExternalLink size={16} />


      </div>



    </div>



  </motion.div>


))

}


</div >





  {/* MODAL */ }


  <AnimatePresence>


{

  selectedProject && (


    <motion.div

      initial={{
        opacity: 0
      }}

      animate={{
        opacity: 1
      }}

      exit={{
        opacity: 0
      }}

      onClick={() => setSelectedProject(null)}

      className="
fixed
inset-0
z-50
flex
items-center
justify-center
p-5
bg-black/80
backdrop-blur-md
"


    >


      <motion.div


        initial={{
          scale: 0.8,
          y: 40
        }}


        animate={{
          scale: 1,
          y: 0
        }}


        exit={{
          scale: 0.8,
          y: 40
        }}


        transition={{
          duration: 0.3
        }}


        onClick={(e) => e.stopPropagation()}


        className="
relative
w-full
max-w-3xl
max-h-[90vh]
overflow-y-auto
rounded-3xl
bg-zinc-900
border
border-white/10
p-8
shadow-2xl
"

      >





        <button

          onClick={() => setSelectedProject(null)}

          className="
absolute
right-5
top-5
p-2
rounded-full
bg-white/10
hover:bg-white/20
text-white
"

        >

          <X size={20} />


        </button>





        <div className="
w-16
h-16
mb-6
">

          {selectedProject.icon}

        </div>





        <h2 className="
text-3xl
font-bold
text-white
">

          {selectedProject.title}

        </h2>




        <p className="
text-primary
uppercase
tracking-widest
text-xs
mt-3
">

          {selectedProject.category}

        </p>





        <p className="
text-gray-400
mt-5
leading-7
">

          {selectedProject.tagline}

        </p>

        {/* FEATURES */}

        <div className="
mt-8
">


          <h3 className="
text-xl
font-semibold
text-white
mb-4
">

            Key Features

          </h3>



          <div className="
grid
sm:grid-cols-2
gap-3
">


            {

              selectedProject.features.map((feature) => (


                <div

                  key={feature}

                  className="
flex
items-center
gap-2
p-3
rounded-xl
bg-white/5
border
border-white/10
text-gray-300
text-sm
"

                >


                  <BrainCircuit

                    size={16}

                    className="text-primary"

                  />


                  {feature}


                </div>


              ))


            }


          </div>



        </div>






        {/* TECHNOLOGY */}


        <div className="
mt-8
">


          <h3 className="
text-xl
font-semibold
text-white
mb-4
">

            Tech Stack

          </h3>




          <div className="
flex
flex-wrap
gap-2
">


            {

              selectedProject.tech.map((tech) => (


                <span

                  key={tech}

                  className="
px-4
py-2
rounded-full
bg-white/10
border
border-white/10
text-sm
text-gray-300
"

                >

                  {tech}

                </span>


              ))


            }


          </div>


        </div>







        {/* SOURCE BUTTON */}



        <a

          href={selectedProject.github}

          target="_blank"

          rel="noreferrer"

          onClick={(e) => e.stopPropagation()}


          className="
mt-8
inline-flex
items-center
gap-2
px-6
py-3
rounded-xl
bg-white
text-black
font-semibold
hover:scale-105
transition
"


        >


          <Code2 size={18} />


          View Source Code


        </a>





      </motion.div>


    </motion.div>


  )


}


</AnimatePresence >





</section >

);


}