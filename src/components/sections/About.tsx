"use client";

import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";

import {
  useRef
} from "react";

import {
  Fingerprint,
  Activity,
  Sparkles,
  BrainCircuit,
  Code2,
  Rocket,
  Database
} from "lucide-react";



export default function About(){


const containerRef =
useRef<HTMLDivElement>(null);



const {scrollYProgress}=useScroll({

target:containerRef,

offset:[
"start end",
"end start"
]

});



const y =
useTransform(
scrollYProgress,
[0,1],
["0%","20%"]
);




const interests=[

{
icon:Code2,
title:"Full Stack Development",
desc:"MERN, Next.js & scalable web applications"
},


{
icon:BrainCircuit,
title:"Generative AI",
desc:"LLM apps, RAG pipelines & AI agents"
},


{
icon:Database,
title:"Backend Engineering",
desc:"APIs, databases & cloud systems"
},


{
icon:Rocket,
title:"Product Building",
desc:"Turning ideas into real-world solutions"
}


];





return(


<section

id="about"

ref={containerRef}

className="
relative
overflow-hidden
min-h-screen
bg-midnight
px-4
py-20
sm:px-6
md:py-32
font-serif
"


>


{/* BACKGROUND */}


<motion.div

style={{
y
}}

className="
absolute
inset-0
pointer-events-none
"

>


<div

className="
absolute
top-10
left-1/2
-translate-x-1/2
w-72
h-72
sm:w-[500px]
sm:h-[500px]
rounded-full
bg-primary/20
blur-[120px]
"

/>



<div

className="
absolute
bottom-20
right-0
w-64
h-64
sm:w-[450px]
sm:h-[450px]
rounded-full
bg-secondary/20
blur-[120px]
"

/>


</motion.div>






<div

className="
relative
z-10
max-w-6xl
mx-auto
"

>



{/* HEADER */}


<motion.div


initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}


className="
text-center
mb-14
"


>


<div

className="
inline-flex
items-center
gap-2
text-secondary
text-xs
tracking-[0.3em]
uppercase
"

>

<Fingerprint size={16}/>

Developer Identity

</div>




<h2

className="
mt-5
text-5xl
sm:text-6xl
md:text-7xl
font-black
text-white
"

>

About

<span
className="
text-primary
ml-2
"
>

Me

</span>


</h2>


<p

className="
mt-5
text-gray-400
max-w-2xl
mx-auto
text-sm
sm:text-base
"

>

AI focused Full Stack Developer building intelligent,
scalable and modern digital products.

</p>



</motion.div>









{/* MAIN CARD */}



<motion.div


initial={{
opacity:0,
scale:.95
}}


whileInView={{
opacity:1,
scale:1
}}


viewport={{
once:true
}}


transition={{
duration:.8
}}



className="
relative
glass
border
border-white/10
rounded-[2rem]
p-5
sm:p-10
overflow-hidden
"

>



<motion.div


animate={{

x:[
"-100%",
"100%"
]

}}


transition={{

duration:4,

repeat:Infinity,

ease:"linear"

}}



className="
absolute
top-0
left-0
h-[2px]
w-full
bg-gradient-to-r
from-transparent
via-primary
to-transparent
"

/>








<div

className="
grid
lg:grid-cols-2
gap-10
"

>






{/* TEXT */}



<div>


<div

className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-primary/10
border
border-primary/20
text-primary
text-xs
tracking-widest
mb-6
"

>

<BrainCircuit size={15}/>

AI ENGINEERING PROFILE

</div>




<p

className="
text-gray-300
leading-relaxed
text-base
sm:text-lg
"

>


I am Suraj Rawat, a BCA Computer Science student
and Full Stack Developer passionate about building
AI-powered applications.


<br/><br/>


My expertise includes MERN Stack Development,
Next.js, TypeScript, Generative AI,
Machine Learning, Retrieval-Augmented Generation
(RAG), and intelligent automation systems.


<br/><br/>


I enjoy designing scalable software architectures,
developing production-ready applications and solving
real-world problems through technology.


</p>



</div>









{/* INTEREST CARDS */}



<div

className="
grid
sm:grid-cols-2
lg:grid-cols-1
gap-4
"

>


{
interests.map((item,index)=>{


const Icon=item.icon;


return(

<motion.div


key={item.title}


initial={{

opacity:0,

x:30

}}


whileInView={{

opacity:1,

x:0

}}


transition={{

delay:index*.1

}}


viewport={{
once:true
}}



whileHover={{

scale:1.03,

y:-5

}}


className="
p-4
rounded-2xl
bg-white/5
border
border-white/10
backdrop-blur-xl
flex
gap-4
"

>


<div

className="
w-10
h-10
rounded-xl
bg-primary/20
flex
items-center
justify-center
"

>

<Icon
size={20}
className="text-primary"
/>

</div>




<div>


<h3

className="
text-white
font-bold
text-sm
"

>

{item.title}

</h3>



<p

className="
text-gray-400
text-xs
mt-1
"

>

{item.desc}

</p>


</div>



</motion.div>


)

})
}




</div>






</div>



</motion.div>









{/* FOOTER QUOTE */}



<motion.div


initial={{
opacity:0
}}


whileInView={{
opacity:1
}}


viewport={{
once:true
}}


className="
mt-14
text-center
"


>


<Sparkles

className="
mx-auto
text-secondary
mb-4
"

/>



<p

className="
text-gray-300
italic
text-lg
sm:text-xl
md:text-2xl
"

>

"Building intelligent systems that connect creativity,
technology and real-world impact."

</p>


</motion.div>





</div>


</section>


);


}