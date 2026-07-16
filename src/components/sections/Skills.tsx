"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Trophy,
  BrainCircuit,
  Cloud,
  Network
} from "lucide-react";


const SKILLS = [

{
title:"Frontend Engineering",
icon:Code2,
skills:[
"HTML5",
"CSS3",
"JavaScript ES6+",
"TypeScript",
"React.js",
"Next.js",
"Tailwind CSS",
"Redux Toolkit",
"Zustand",
"React Query",
"Framer Motion",
"GSAP",
"Shadcn UI",
"Radix UI"
],
color:"primary"
},


{
title:"Backend Development",
icon:Server,
skills:[
"Node.js",
"Express.js",
"REST APIs",
"JWT Authentication",
"API Integration",
"Middleware",
"Server Architecture",
"WebSockets"
],
color:"secondary"
},


{
title:"Database Engineering",
icon:Database,
skills:[
"MongoDB",
"Mongoose",
"PostgreSQL",
"MySQL",
"SQL",
"Firebase",
"Database Design",
"Query Optimization"
],
color:"primary"
},


{
title:"DSA & Problem Solving",
icon:Trophy,
skills:[
"C++",
"Data Structures",
"Algorithms",
"Problem Solving",
"LeetCode",
"Competitive Programming"
],
color:"secondary"
},


{
title:"AI Development",
icon:BrainCircuit,
skills:[
"Generative AI",
"OpenAI API",
"AI Integration",
"Prompt Engineering",
"AI Automation",
"LLM Applications"
],
color:"primary"
},


{
title:"Cloud & DevOps",
icon:Cloud,
skills:[
"Git",
"GitHub",
"Docker",
"AWS",
"Vercel",
"Netlify",
"CI/CD",
"Linux Basics"
],
color:"secondary"
}

];



export default function Skills(){


return (

<section
style={{
fontFamily:"Times New Roman"
}}
className="
relative
min-h-screen
overflow-hidden
bg-midnight
py-16
sm:py-24
"
>


{/* Background */}

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,_rgba(245,230,211,.15),transparent_45%)]
"
/>



<div
className="
relative
z-10
mx-auto
max-w-7xl
px-4
sm:px-6
lg:px-8
"
>



{/* Heading */}


<motion.div

initial={{
opacity:0,
y:-40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
mb-12
text-center
sm:mb-16
"

>


<div
className="
flex
items-center
justify-center
gap-2
font-mono
text-xs
uppercase
tracking-[0.3em]
text-secondary
sm:text-sm
"
>

<Network size={18}/>

Technology Stack

</div>



<h2

className="
mt-5
text-4xl
font-bold
leading-tight
text-white
sm:text-5xl
lg:text-6xl
"

>

Skills &

<span
className="
text-gradient
"
>

 Expertise

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

Modern frontend, backend and AI technologies
used to build scalable applications.

</p>



</motion.div>





{/* Cards */}


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
SKILLS.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div


key={item.title}


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
delay:index*0.1
}}


whileHover={{
y:-8
}}



className={`
group
relative
overflow-hidden
rounded-3xl
border
bg-black/40
p-5
backdrop-blur-xl
transition-all
sm:p-6


${
item.color==="primary"

?

"border-primary/30 hover:shadow-[0_0_35px_rgba(245,230,211,.25)]"

:

"border-secondary/30 hover:shadow-[0_0_35px_rgba(139,90,43,.35)]"

}

`}

>



{/* Glow */}

<div
className="
absolute
inset-0
bg-gradient-to-br
from-primary/10
to-transparent
opacity-0
transition
duration-500
group-hover:opacity-100
"
/>



<div
className="
relative
"
>



<div

className="
mb-5
flex
h-12
w-12
items-center
justify-center
rounded-xl
border
border-white/10
bg-white/5
"

>


<Icon
size={25}
className="text-primary"
/>


</div>




<h3

className="
mb-4
text-xl
font-bold
text-white
"

>

{item.title}

</h3>




<div

className="
flex
flex-wrap
gap-2
"

>


{
item.skills.map(skill=>(


<span

key={skill}

className="
rounded-full
border
border-white/10
bg-white/5
px-3
py-1.5
font-mono
text-[11px]
text-gray-300
transition
hover:bg-white/10
sm:text-xs
"

>

{skill}

</span>


))

}


</div>



</div>



</motion.div>


)

})

}



</div>


</div>


</section>


)

}