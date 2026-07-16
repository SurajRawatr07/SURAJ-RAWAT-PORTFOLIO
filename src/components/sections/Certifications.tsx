"use client";

import { motion } from "framer-motion";
import {
  Award,
  BrainCircuit,
  Database,
  ShieldCheck,
  Network,
  Cpu,
  ExternalLink,
  Code2,
  Trophy,
  Sparkles,
  GraduationCap,
  Bot,
  Layers
} from "lucide-react";


const GithubIcon = () => (
<svg
viewBox="0 0 24 24"
fill="currentColor"
className="w-7 h-7"
>
<path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.38-2.04 1-2.76-.1-.26-.43-1.3.1-2.72 0 0 .82-.27 2.75 1.05A9.2 9.2 0 0112 6.84a9.2 9.2 0 012.5.35c1.92-1.32 2.74-1.05 2.74-1.05.54 1.42.2 2.46.1 2.72.62.72 1 1.64 1 2.76 0 3.92-2.34 4.78-4.57 5.04.36.32.67.94.67 1.9v2.82c0 .27.18.59.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
</svg>
);

const CERTIFICATIONS = [

  {
    title: "AI Fluency Framework & Foundations",
    org: "Anthropic",
    category: "Artificial Intelligence",
    description:
      "Explored AI systems thinking, generative AI concepts, AI workflows and practical AI fluency frameworks.",
    tags: [
      "AI Systems",
      "LLMs",
      "GenAI",
      "AI Fluency"
    ],
    icon: <BrainCircuit />
  },


  {
    title: "Foundations of Agentic AI",
    org: "GitHub",
    category: "Agentic AI",
    description:
      "Learned fundamentals of AI agents, autonomous workflows, agent architectures and AI powered developer tools.",
    tags: [
      "AI Agents",
      "Automation",
      "LLM Workflows",
      "GitHub"
    ],
    icon: <Bot />
  },


  {
    title: "Generative AI",
    org: "Infosys Springboard",
    category: "Generative AI",
    description:
      "Covered generative models, prompt engineering, large language models and real world AI applications.",
    tags: [
      "Generative AI",
      "Prompt Engineering",
      "LLMs"
    ],
    icon: <Sparkles />
  },


  {
    title: "Generative AI",
    org: "Microsoft",
    category: "AI Certification",
    description:
      "Learned Microsoft AI concepts, responsible AI practices and modern generative AI technologies.",
    tags: [
      "Microsoft AI",
      "Responsible AI",
      "GenAI"
    ],
    icon: <ShieldCheck />
  },


  {
    title: "Google Gemini Quiz Certification",
    org: "Google",
    category: "AI Tools",
    description:
      "Hands-on understanding of Google Gemini, AI capabilities and productivity workflows using generative AI.",
    tags: [
      "Gemini",
      "AI Tools",
      "Prompting"
    ],
    icon: <Cpu />
  },


  {
    title: "Computer Vision",
    org: "Infosys Springboard",
    category: "Deep Learning",
    description:
      "Studied image processing, CNN architectures and computer vision applications.",
    tags: [
      "CNN",
      "Deep Learning",
      "Computer Vision"
    ],
    icon: <Network />
  },


  {
    title: "Machine Learning With Real World Deployment",
    org: "Udemy",
    category: "Machine Learning",
    description:
      "Built understanding of ML pipelines, model training, evaluation and deployment workflows.",
    tags: [
      "Machine Learning",
      "Deployment",
      "Python"
    ],
    icon: <Layers />
  },


  {
    title: "DSMP 1",
    org: "CampusX",
    category: "Data Science",
    description:
      "Covered Python programming, statistics, machine learning and practical data science concepts.",
    tags: [
      "Python",
      "Data Science",
      "ML"
    ],
    icon: <Database />
  },


  {
    title: "Introduction to Front End Development",
    org: "Simplilearn",
    category: "Frontend Development",
    description:
      "Learned HTML, CSS, JavaScript fundamentals and responsive frontend development concepts.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Frontend"
    ],
    icon: <Code2 />
  },


  {
    title: "Backend Development",
    org: "Simplilearn",
    category: "Backend Engineering",
    description:
      "Covered backend development, APIs, server-side programming and database integration.",
    tags: [
      "Backend",
      "API",
      "Database"
    ],
    icon: <Database />
  },


  {
    title: "Full Stack Development",
    org: "Simplilearn",
    category: "Full Stack",
    description:
      "Learned complete web development workflow including frontend, backend and databases.",
    tags: [
      "MERN",
      "Frontend",
      "Backend"
    ],
    icon: <Code2 />
  },


  {
    title: "CampusCrew: 100K Special Certificate",
    org: "CampusCrew",
    category: "Achievement",
    description:
      "Recognized for contribution and participation in CampusCrew community milestone achievement.",
    tags: [
      "Community",
      "Achievement",
      "100K"
    ],
    icon: <Award />
  },


  {
    title: "National Building Case Study Competition 2026",
    org: "Competition",
    category: "Case Study",
    description:
      "Participated in national level case study competition focused on innovation and problem solving.",
    tags: [
      "Research",
      "Innovation",
      "Competition"
    ],
    icon: <Trophy />
  },


  {
    title: "TATA Crucible Campus Quiz 2025",
    org: "TATA",
    category: "Quiz Competition",
    description:
      "Participated in TATA Crucible Campus Quiz focused on business awareness and analytical thinking.",
    tags: [
      "TATA",
      "Quiz",
      "Business"
    ],
    icon: <GraduationCap />
  },


  {
    title: "GitHub Foundations",
    org: "GitHub",
    category: "Developer Tools",
    description:
      "Learned GitHub fundamentals, repositories, collaboration workflows and open source practices.",
    tags: [
      "Git",
      "GitHub",
      "Open Source"
    ],
    icon: <GithubIcon />
  }

];



export default function Certifications() {


  return (

    <section

      style={{
        fontFamily: "'Times New Roman', Times, serif"
      }}

      className="
relative
min-h-screen
overflow-hidden
px-4
py-20
sm:px-6
md:py-32
"


    >


      {/* Background */}

      <div className="
absolute
inset-0
pointer-events-none
overflow-hidden
">


        <motion.div

          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}

          transition={{
            duration: 10,
            repeat: Infinity
          }}

          className="
absolute
top-20
left-1/2
-translate-x-1/2
h-[300px]
w-[300px]
sm:h-[600px]
sm:w-[600px]
rounded-full
bg-primary/20
blur-[120px]
"

        />


        <motion.div

          animate={{
            y: [0, -40, 0]
          }}

          transition={{
            duration: 8,
            repeat: Infinity
          }}

          className="
absolute
right-0
top-40
h-[250px]
w-[250px]
rounded-full
bg-secondary/20
blur-[120px]
"

        />


      </div>


      <div className="
relative
z-10
max-w-7xl
mx-auto
">


        {/* Header Start */}

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

          className="
text-center
mb-14
md:mb-24
"

        >


          <div className="
flex
items-center
justify-center
gap-2
text-primary
uppercase
tracking-[0.35em]
text-xs
sm:text-sm
mb-5
">

            <ShieldCheck size={18} />

            Verified Credentials

          </div>


          <h2 className="
text-4xl
sm:text-5xl
md:text-7xl
font-bold
text-white
leading-tight
">

            Certifications &

            <span className="
text-gradient
">

              Achievements

            </span>


          </h2>


          <p className="
mt-6
max-w-3xl
mx-auto
text-gray-400
text-sm
sm:text-lg
leading-7
">

            Verified certifications, AI learning,
            full stack development and continuous
            technology growth.

          </p>


        </motion.div>
        {/* Certification Grid */}

        <div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-5
md:gap-8
"
        >


          {
            CERTIFICATIONS.map((cert, index) => (


              <motion.div

                key={cert.title}


                initial={{
                  opacity: 0,
                  y: 40
                }}


                whileInView={{
                  opacity: 1,
                  y: 0
                }}


                viewport={{
                  once: true,
                  margin: "-80px"
                }}


                transition={{
                  duration: 0.5,
                  delay: index * 0.05
                }}


                whileHover={{
                  y: -10,
                  scale: 1.02
                }}



                className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-black/40
backdrop-blur-2xl
p-6
sm:p-7
transition-all
duration-500
hover:border-primary/50
"

              >


                {/* Hover Shine */}

                <div

                  className="
absolute
inset-0
bg-gradient-to-r
from-transparent
via-white/10
to-transparent
translate-x-[-120%]
group-hover:translate-x-[120%]
transition-transform
duration-1000
"

                />



                <div className="
relative
z-10
">


                  {/* Icon */}

                  <div

                    className="
flex
items-center
justify-center
h-14
w-14
rounded-2xl
bg-white/5
border
border-white/10
mb-6
text-primary
group-hover:scale-110
transition
duration-300
"

                  >

                    {
                      cert.icon
                    }

                  </div>



                  {/* Category */}

                  <p

                    className="
text-primary
text-xs
uppercase
tracking-[0.25em]
mb-3
"

                  >

                    {
                      cert.category
                    }

                  </p>




                  <div

                    className="
flex
items-start
justify-between
gap-3
"

                  >


                    <h3

                      className="
text-xl
md:text-2xl
font-bold
text-white
leading-tight
group-hover:text-primary
transition
"

                    >

                      {
                        cert.title
                      }

                    </h3>



                    <ExternalLink

                      size={18}

                      className="
text-gray-500
group-hover:text-primary
transition
shrink-0
"

                    />


                  </div>





                  {/* Organization */}

                  <p

                    className="
mt-3
text-secondary
font-semibold
text-sm
"

                  >

                    {
                      cert.org
                    }

                  </p>




                  {/* Description */}

                  <p

                    className="
mt-5
text-gray-400
text-sm
leading-7
"

                  >

                    {
                      cert.description
                    }

                  </p>




                  {/* Tags */}

                  <div

                    className="
flex
flex-wrap
gap-2
mt-6
"

                  >


                    {

                      cert.tags.map((tag) => (


                        <span

                          key={tag}

                          className="
px-3
py-1
rounded-full
text-xs
bg-white/5
border
border-white/10
text-gray-300
hover:text-primary
transition
"

                        >

                          {
                            tag
                          }

                        </span>


                      ))


                    }



                  </div>




                </div>



              </motion.div>


            ))


          }


        </div>
        {/* Stats Section */}

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

          transition={{
            duration: 0.7
          }}

          className="
mt-16
md:mt-24
rounded-3xl
border
border-white/10
bg-black/30
backdrop-blur-xl
p-6
md:p-10
grid
grid-cols-2
md:grid-cols-4
gap-6
text-center
"

        >


          <div>

            <h4 className="
text-3xl
md:text-4xl
font-bold
text-white
">

              15+

            </h4>

            <p className="
text-gray-400
text-sm
mt-2
">

              Certifications

            </p>

          </div>




          <div>

            <h4 className="
text-3xl
md:text-4xl
font-bold
text-white
">

              AI

            </h4>

            <p className="
text-gray-400
text-sm
mt-2
">

              Technologies

            </p>

          </div>




          <div>

            <h4 className="
text-3xl
md:text-4xl
font-bold
text-white
">

              MERN

            </h4>

            <p className="
text-gray-400
text-sm
mt-2
">

              Development

            </p>

          </div>




          <div>

            <h4 className="
text-3xl
md:text-4xl
font-bold
text-white
">

              Open

            </h4>

            <p className="
text-gray-400
text-sm
mt-2
">

              Source

            </p>

          </div>


        </motion.div>





        {/* Closing Content */}

        <motion.div

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

          className="
mt-16
md:mt-24
text-center
"

        >


          <div className="
inline-flex
items-center
gap-2
rounded-full
border
border-primary/30
bg-primary/10
px-5
py-2
text-primary
text-sm
mb-6
">

            <Sparkles size={16} />

            Continuous Learning

          </div>




          <h3 className="
text-3xl
sm:text-5xl
font-bold
text-white
leading-tight
">

            Building Skills Through

            <span className="
text-gradient
">

              Innovation

            </span>


          </h3>




          <p className="
mt-5
max-w-2xl
mx-auto
text-gray-400
text-sm
sm:text-lg
leading-7
">

            Constantly exploring Artificial Intelligence,
            Full Stack Development, Cloud Technologies
            and Open Source Ecosystem.

          </p>



        </motion.div>




      </div>


    </section>


  );

}