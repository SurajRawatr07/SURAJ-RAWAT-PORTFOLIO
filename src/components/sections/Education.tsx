"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  GraduationCap,
  Network,
  Workflow,
  BrainCircuit,
  Library,
  Blocks
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


const EDUCATION = [
  {
    id: "BCA",
    institution: "Graphic Era Hill University, Haldwani",
    degree: "Bachelor of Computer Applications (BCA)",
    year: "2024 – 2027",
    category: "Higher Education",
    icon: <Network className="w-8 h-8 text-primary" />,

    narrative:
      "Building a strong foundation in computer science while specializing in full-stack web development, problem-solving, and modern software engineering through hands-on projects and continuous learning.",

    focus: [
      "Data Structures & Algorithms",
      "MERN Stack Development",
      "Object Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Web Technologies"
    ],

    involvement: [
      "Hackathons",
      "Internships",
      "AI Projects",
      "Competitive Programming",
      "Open Source",
      "Research Exploration"
    ]
  },


  {
    id: "12th",
    institution: "AUGIC Gairsain, Uttarakhand",
    degree: "Class 12th",
    year: "2022 – 2024",
    board: "CBSE",
    category: "Senior Secondary Education",
    icon: <Workflow className="w-8 h-8 text-secondary" />,

    narrative:
      "Developed a strong academic foundation while improving analytical thinking, logical reasoning, communication skills and technology understanding.",

    focus: [
      "Computer Fundamentals",
      "Analytical Thinking",
      "Logical Reasoning",
      "Problem Solving",
      "Communication Skills",
      "Technology Exploration"
    ],

    involvement: []
  },


  {
    id: "10th",
    institution: "AUGIC Gairsain, Uttarakhand",
    degree: "Class 10th",
    year: "2021 – 2022",
    board: "CBSE",
    category: "Foundational Education",
    icon: <Library className="w-8 h-8 text-gray-400" />,

    narrative:
      "Built the foundation of discipline, curiosity, creativity and structured thinking.",

    focus: [
      "Academic Foundations",
      "Learning Curiosity",
      "Analytical Development",
      "Disciplined Growth"
    ],

    involvement: []
  }
];



export default function Education() {


  const timelineRef = useRef<HTMLDivElement>(null);



  useEffect(() => {

    if (!timelineRef.current) return;


    gsap.fromTo(

      ".edu-line",

      {
        scaleY: 0
      },

      {

        scaleY: 1,

        ease: "none",

        scrollTrigger: {

          trigger: timelineRef.current,

          start: "top center",

          end: "bottom center",

          scrub: 1

        }

      }

    );


  }, []);




  return (

    <section

      className="
relative
min-h-screen
overflow-hidden
bg-midnight
py-20
md:py-32
px-4
md:px-6
font-serif
"


    >



      <div className="
absolute
inset-0
pointer-events-none
">


        <div className="
absolute
top-10
left-1/2
-translate-x-1/2
w-[600px]
h-[600px]
bg-primary/10
blur-[130px]
rounded-full
"/>


      </div>





      <div className="
max-w-5xl
mx-auto
relative
z-10
">


        {/* Heading */}


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
mb-20
md:mb-32
"

        >


          <div className="
flex
justify-center
items-center
gap-2
text-secondary
uppercase
tracking-[0.3em]
mb-6
text-sm
">


            <GraduationCap size={18} />

            Academic Journey


          </div>




          <h2 className="
text-5xl
md:text-7xl
font-bold
text-white
mb-6
">

  
            Education    &


            <span className="text-gradient">


            Learning

            </span>


          </h2>




          <p className="
text-gray-400
text-lg
md:text-xl
max-w-3xl
mx-auto
leading-relaxed
">


            Building a strong academic foundation through projects, open-source contributions and modern software development.


          </p>


        </motion.div>







        {/* Timeline */}


        <div

          ref={timelineRef}

          className="
relative
border-l
border-white/10
pl-8
md:pl-16
space-y-12
md:space-y-24
"

        >


          <div className="
edu-line
absolute
left-0
top-0
bottom-0
w-[2px]
bg-gradient-to-b
from-primary
via-secondary
to-transparent
origin-top
"/>





          {
            EDUCATION.map((edu, index) => (


              <motion.div

                key={edu.id}

                initial={{
                  opacity: 0,
                  x: -40
                }}

                whileInView={{
                  opacity: 1,
                  x: 0
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  duration: 0.7,
                  delay: index * 0.1
                }}

                className="relative"

              >


                <div className="
hidden
md:block
absolute
-left-[73px]
top-10
w-5
h-5
rounded-full
bg-midnight
border-2
border-primary
"/>





                <div className="
glass
rounded-3xl
border
border-white/10
p-6
md:p-10
hover:border-primary/30
transition-all
">


                  <div className="
flex
flex-col
sm:flex-row
gap-5
mb-6
">


                    <div className="
p-4
rounded-2xl
bg-white/5
">


                      {edu.icon}


                    </div>




                    <div>

                      <h3 className="
text-2xl
md:text-4xl
font-bold
text-white
">


                        {edu.institution}


                      </h3>


                      <p className="
text-primary
mt-2
">


                        {edu.degree}

                      </p>


                      <p className="
text-gray-400
text-sm
mt-2
">


                        {edu.year}
                        {edu.board && ` | ${edu.board}`}


                      </p>


                    </div>


                  </div>





                  <p className="
text-gray-400
leading-relaxed
mb-8
border-l-2
border-primary/30
pl-4
">


                    "{edu.narrative}"


                  </p>







                  <div>


                    <div className="
flex
items-center
gap-2
text-gray-400
uppercase
text-sm
mb-4
">


                      <BrainCircuit size={16} />

                      Key Focus


                    </div>




                    <div className="
flex
flex-wrap
gap-2
">


                      {
                        edu.focus.map(item => (


                          <span

                            key={item}

                            className="
px-3
py-1
rounded-full
bg-white/5
border
border-white/10
text-gray-300
text-sm
"

                          >


                            {item}


                          </span>


                        ))

                      }


                    </div>


                  </div>







                  {
                    edu.involvement.length > 0 && (


                      <div className="
mt-6
pt-6
border-t
border-white/10
">


                        <div className="
flex
items-center
gap-2
text-gray-400
uppercase
text-sm
mb-4
">


                          <Blocks size={16} />

                          Active Involvement


                        </div>



                        <div className="
flex
flex-wrap
gap-2
">


                          {
                            edu.involvement.map(item => (


                              <span

                                key={item}

                                className="
px-3
py-1
rounded-lg
bg-primary/10
text-primary
text-sm
"


                              >


                                {item}


                              </span>


                            ))

                          }


                        </div>


                      </div>


                    )

                  }





                </div>


              </motion.div>


            ))

          }



        </div>



      </div>


    </section>

  );

}