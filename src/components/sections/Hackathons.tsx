"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  Award,
  Trophy,
  Users,
  BrainCircuit,
  Database,
  Network,
  Target,
  Sparkles
} from "lucide-react";


gsap.registerPlugin(ScrollTrigger);



const FEATURED_HACKATHONS = [

  {
    title: "GraphRAG Inference Hackathon",
    organizer: "TigerGraph",
    achievement: "Participant",
    year: "2025",

    icon:
      <Target className="w-8 h-8 text-primary" />,

    description:
      "Participated in an AI and Graph Intelligence focused hackathon exploring GraphRAG architectures, knowledge graphs and efficient AI inference systems.",

    tags: [
      "GraphRAG",
      "AI",
      "Knowledge Graph",
      "LLM",
      "Machine Learning"
    ]

  },


  {
    title: "Graph-E-Thon 3.0",
    organizer: "Graph Technology Community",
    achievement: "Participant",

    year: "2026",

    icon:
      <Network className="w-8 h-8 text-secondary" />,

    description:
      "Worked on graph-based problem solving approaches focusing on data relationships, scalable systems and intelligent solutions.",

    tags: [
      "Graph Database",
      "Data Science",
      "Algorithms",
      "Problem Solving"
    ]

  },



  {
    title: "Convolve 4.0",
    organizer: "Pan-IIT AI/ML Hackathon",

    achievement: "Participant",

    year: "2026",

    icon:
      <BrainCircuit className="w-8 h-8 text-primary" />,

    description:
      "Participated in a Pan-IIT AI/ML hackathon building innovative machine learning solutions with real-world impact.",

    tags: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "AI Solutions"
    ]

  },



  {
    title: "Smart India Hackathon 2025",

    organizer: "SIH Innovation Framework",

    achievement: "Internal Round",

    year: "2025",

    icon:
      <Trophy className="w-8 h-8 text-secondary" />,

    description:
      "Collaborated with a team to design innovative solutions under India's largest student innovation hackathon framework.",

    tags: [
      "SIH",
      "Innovation",
      "Team Collaboration",
      "Problem Solving"
    ]

  }

];



const PARTICIPATION = [

  {
    name: "GraphRAG Inference Hackathon",
    org: "TigerGraph",
    year: "2025",
    icon: <Database className="w-6 h-6" />
  },


  {
    name: "Graph-E-Thon 3.0",
    org: "Graph Community",
    year: "2026",
    icon: <Network className="w-6 h-6" />
  },


  {
    name: "Convolve 4.0",
    org: "Pan-IIT AI/ML",
    year: "2026",
    icon: <BrainCircuit className="w-6 h-6" />
  },


  {
    name: "Smart India Hackathon",
    org: "SIH",
    year: "2025",
    icon: <Trophy className="w-6 h-6" />
  }


];



export default function Hackathons() {


  const containerRef =
    useRef<HTMLDivElement>(null);


  const timelineRef =
    useRef<HTMLDivElement>(null);



  useEffect(() => {


    if (!timelineRef.current)
      return;



    gsap.fromTo(

      ".timeline-line",

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

      ref={containerRef}

      style={{
        fontFamily: "Times New Roman, Times, serif"
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
      {/* Background Effects */}

      <div
        className="
absolute
inset-0
pointer-events-none
overflow-hidden
"
      >

        <div
          className="
absolute
top-20
left-0
h-[350px]
w-[350px]
rounded-full
bg-primary/10
blur-[120px]
"
        />


        <div
          className="
absolute
bottom-20
right-0
h-[350px]
w-[350px]
rounded-full
bg-secondary/10
blur-[120px]
"
        />


      </div>



      <div
        className="
relative
z-10
mx-auto
max-w-7xl
"
      >


        {/* Header */}


        <motion.div

          initial={{
            opacity: 0,
            y: -40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          className="
mb-16
text-center
sm:mb-24
"

        >


          <div

            className="
mb-4
flex
items-center
justify-center
gap-2
text-xs
uppercase
tracking-[0.35em]
text-primary
sm:text-sm
"

          >

            <Award
              size={18}
            />

            Innovation Hub

          </div>



          <h2

            className="
text-4xl
font-bold
leading-tight
text-white
sm:text-5xl
lg:text-6xl
"

          >


            Hackathons &

            <span
              className="
text-gradient
"
            >

              Competitions

            </span>


          </h2>



          <p

            className="
mx-auto
mt-5
max-w-2xl
text-sm
leading-7
text-gray-400
sm:text-base
"

          >

            Exploring AI, Machine Learning, Graph Technology
            and innovative engineering challenges.

          </p>



        </motion.div>






        {/* Featured Achievements */}



        <div
          className="
mb-20
md:mb-32
"
        >


          <h3

            className="
mb-10
flex
items-center
gap-3
text-2xl
font-bold
text-white
"

          >

            <Trophy
              className="
text-secondary
"
            />

            Featured Achievements

          </h3>




          <div

            ref={timelineRef}

            className="
relative
space-y-12
border-l
border-white/10
pl-6
sm:space-y-16
sm:pl-12
"

          >



            {/* Timeline Line */}


            <div

              className="
timeline-line
absolute
left-0
top-0
h-full
w-[2px]
origin-top
bg-gradient-to-b
from-primary
via-secondary
to-transparent
"

            />




            {

              FEATURED_HACKATHONS.map(
                (event, index) => (


                  <motion.div


                    key={event.title}


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

                      duration: 0.6,

                      delay: index * 0.15

                    }}



                    className="
relative
"

                  >


                    {/* Node */}


                    <div

                      className="
absolute
-left-[34px]
top-7
h-4
w-4
rounded-full
border-2
border-primary
bg-midnight
sm:-left-[58px]
"

                    />




                    {/* Card */}


                    <div

                      className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-black/40
p-5
backdrop-blur-xl
transition-all
duration-500
hover:border-primary/40
hover:bg-white/[0.04]
sm:p-8
"

                    >


                      <div

                        className="
absolute
inset-0
bg-gradient-to-br
from-primary/10
to-secondary/10
opacity-0
transition
duration-500
group-hover:opacity-100
"

                      />




                      <div

                        className="
relative
flex
flex-col
gap-6
md:flex-row
"

                      >


                        {/* Icon */}


                        <div

                          className="
flex
h-16
w-16
shrink-0
items-center
justify-center
rounded-2xl
border
border-white/10
bg-white/5
"

                        >

                          {event.icon}

                        </div>





                        <div
                          className="
flex-1
"
                        >



                          <div

                            className="
flex
flex-col
gap-2
sm:flex-row
sm:items-center
sm:justify-between
"

                          >


                            <h4

                              className="
text-xl
font-bold
text-white
transition
group-hover:text-primary
sm:text-2xl
"

                            >

                              {event.title}

                            </h4>



                            <span

                              className="
font-mono
text-sm
text-secondary
"

                            >

                              {event.year}

                            </span>



                          </div>




                          <div

                            className="
mt-3
flex
flex-wrap
items-center
gap-2
text-sm
"

                          >

                            <Award
                              size={16}
                              className="text-primary"
                            />


                            <span
                              className="
text-primary
"
                            >

                              {event.achievement}

                            </span>


                            <span
                              className="
text-gray-500
"
                            >

                              |

                            </span>


                            <span
                              className="
text-gray-400
"
                            >

                              {event.organizer}

                            </span>


                          </div>




                          <p

                            className="
mt-5
text-sm
leading-7
text-gray-400
sm:text-base
"

                          >

                            {event.description}

                          </p>




                          <div

                            className="
mt-5
flex
flex-wrap
gap-2
"

                          >


                            {

                              event.tags.map(tag => (


                                <span

                                  key={tag}

                                  className="
rounded-full
border
border-white/10
bg-white/5
px-3
py-1
font-mono
text-[11px]
text-gray-300
"

                                >

                                  {tag}

                                </span>


                              ))


                            }


                          </div>



                        </div>



                      </div>



                    </div>



                  </motion.div>


                ))


            }



          </div>


        </div>
        {/* Participation Grid */}

        <div
          className="
mb-20
md:mb-32
"
        >


          <h3

            className="
mb-10
flex
items-center
gap-3
text-2xl
font-bold
text-white
"

          >

            <Users
              className="
text-primary
"
            />

            Engineering Arenas

          </h3>




          <div

            className="
grid
grid-cols-1
gap-5
sm:grid-cols-2
lg:grid-cols-3
"

          >


            {

              PARTICIPATION.map(
                (item, index) => (


                  <motion.div


                    key={item.name}


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

                      delay: index * 0.1

                    }}



                    whileHover={{

                      y: -8

                    }}



                    className="
group
rounded-3xl
border
border-white/10
bg-black/40
p-5
backdrop-blur-xl
transition-all
duration-300
hover:border-secondary/50
hover:bg-secondary/5
"

                  >


                    <div

                      className="
flex
items-center
gap-4
"

                    >


                      <div

                        className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
border
border-white/10
bg-white/5
text-gray-300
transition
group-hover:text-secondary
"

                      >

                        {item.icon}

                      </div>




                      <div>

                        <h4

                          className="
text-sm
font-bold
text-white
transition
group-hover:text-secondary
sm:text-base
"

                        >

                          {item.name}

                        </h4>


                        <p

                          className="
text-sm
text-gray-500
"

                        >

                          {item.org}

                        </p>


                      </div>


                    </div>




                    <div

                      className="
mt-5
flex
items-center
justify-between
font-mono
text-xs
"

                    >


                      <span
                        className="
text-gray-500
"
                      >

                        Status: Participated

                      </span>


                      <span

                        className="
text-secondary
"

                      >

                        {item.year}

                      </span>


                    </div>



                  </motion.div>


                ))


            }



          </div>


        </div>





        {/* Achievement Footer */}


        <motion.div


          initial={{

            opacity: 0,

            scale: 0.95

          }}



          whileInView={{

            opacity: 1,

            scale: 1

          }}



          viewport={{

            once: true

          }}



          className="
rounded-3xl
border
border-white/10
bg-gradient-to-br
from-white/5
to-transparent
p-6
text-center
backdrop-blur-xl
sm:p-10
"

        >


          <Sparkles

            className="
mx-auto
mb-4
text-primary
"

          />



          <h3

            className="
text-2xl
font-bold
text-white
sm:text-3xl
"

          >

            Building Through Innovation

          </h3>



          <p

            className="
mx-auto
mt-4
max-w-2xl
text-sm
leading-7
text-gray-400
sm:text-base
"

          >

            Continuously participating in competitive hackathons,
            AI challenges and developer communities to solve
            real-world engineering problems.

          </p>



        </motion.div>



      </div>


    </section>


  );

}