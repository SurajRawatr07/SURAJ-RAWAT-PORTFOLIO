"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Code2,
  Target,
  Star,
  Brain,
  Award
} from "lucide-react";


export default function Achievements() {


  const achievements = [

    {
      icon: <Code2 />,
      title: "LeetCode Problem Solver",
      desc:
        "Solved multiple Data Structures & Algorithms problems and continuously improving problem solving skills through competitive programming.",
      stat: "Top 29% LeetCode Ranking"
    },


    {
      icon: <Trophy />,
      title: "LeetCode Contest Participant",
      desc:
        "Participated in LeetCode contests and improved algorithmic thinking, coding speed and competitive programming skills.",
      stat: "Contest Rating: 1566"
    },


    {
      icon: <Star />,
      title: "HackerRank 5 Star Coder",
      desc:
        "Achieved 5-star rating on HackerRank by solving programming challenges and strengthening core computer science concepts.",
      stat: "5★ HackerRank"
    },


    {
      icon: <Brain />,
      title: "Data Structures & Algorithms",
      desc:
        "Strong foundation in arrays, strings, recursion, searching, sorting, dynamic programming and problem solving.",
      stat: "DSA Focus"
    },


    {
      icon: <Target />,
      title: "Hackathon Achievements",
      desc:
        "Participated in multiple hackathons and built innovative technology solutions with real-world impact.",
      stat: "5+ Hackathons"
    },


    {
      icon: <Award />,
      title: "Open Source Contribution",
      desc:
        "Contributing to open-source projects and collaborating with developers through GitHub communities.",
      stat: "Open Source"
    }


  ];



  return (

    <section

      id="achievements"

      className="
relative
min-h-screen
bg-midnight
overflow-hidden
py-16
sm:py-20
md:py-32
px-4
sm:px-6
"

      style={{
        fontFamily: "'Times New Roman', Times, serif"
      }}

    >


      {/* Background */}

      <div className="
absolute
inset-0
pointer-events-none
">


        <div className="
absolute
top-20
left-1/2
-translate-x-1/2
w-72
h-72
sm:w-[500px]
sm:h-[500px]
bg-primary/20
blur-[120px]
rounded-full
"/>


      </div>





      <div className="
max-w-6xl
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
mb-12
md:mb-20
"

        >


          <div className="
flex
justify-center
items-center
gap-2
text-primary
uppercase
tracking-[0.3em]
text-xs
sm:text-sm
mb-5
">


            <Trophy size={18} />

            Achievements


          </div>




          <h2 className="

text-4xl
sm:text-5xl
md:text-7xl
font-bold
text-white

">


            

            <span className="text-gradient">

              Achievements

            </span>


          </h2>



          <p className="
mt-5
text-gray-400
text-base
sm:text-lg
max-w-3xl
mx-auto
">


            A journey of consistent learning, competitive programming,
            open-source contribution and building impactful technology.


          </p>



        </motion.div>







        {/* Cards */}



        <div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-5
md:gap-8
">


          {
            achievements.map((item, index) => (


              <motion.div

                key={item.title}


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
                  delay: index * 0.1
                }}


                whileHover={{
                  y: -8
                }}


                className="

glass

rounded-3xl

p-6
sm:p-8

border
border-white/10

hover:border-primary/40

transition-all

"


              >



                <div className="
w-14
h-14
rounded-2xl
bg-primary/10
border
border-primary/20
flex
items-center
justify-center
text-primary
mb-6
">


                  {item.icon}


                </div>




                <h3 className="
text-xl
sm:text-2xl
font-bold
text-white
mb-3
">


                  {item.title}


                </h3>




                <p className="
text-gray-400
text-sm
sm:text-base
leading-relaxed
mb-5
">


                  {item.desc}


                </p>




                <div className="
inline-flex
px-4
py-2
rounded-full
bg-white/5
border
border-white/10
text-primary
text-xs
sm:text-sm
">


                  {item.stat}


                </div>




              </motion.div>


            ))
          }



        </div>






      </div>


    </section>


  );

}