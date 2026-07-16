"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Terminal,
  ExternalLink,
  Hexagon,
  MapPin,
  Send,
  Sparkles
} from "lucide-react";

const GithubIcon = () => (
<svg
viewBox="0 0 24 24"
fill="currentColor"
className="w-6 h-6"
>
<path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.38-2.04 1-2.76-.1-.26-.43-1.3.1-2.72 0 0 .82-.27 2.75 1.05A9.2 9.2 0 0112 6.84a9.2 9.2 0 012.5.35c1.92-1.32 2.74-1.05 2.74-1.05.54 1.42.2 2.46.1 2.72.62.72 1 1.64 1 2.76 0 3.92-2.34 4.78-4.57 5.04.36.32.67.94.67 1.9v2.82c0 .27.18.59.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
</svg>
);


const LinkedinIcon = () => (
<svg
viewBox="0 0 24 24"
fill="currentColor"
className="w-6 h-6"
>
<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.95v5.67H9.31V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.29 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.07 20.45H3.5V9h3.57v11.45z"/>
</svg>
);

const SOCIAL_LINKS = [

 {
  name: "GitHub",
  username: "SurajRawatr07",
  url: "https://github.com/SurajRawatr07",
  icon: <GithubIcon />,
},


 {
  name: "LinkedIn",
  username: "Suraj Rawat",
  url: "https://www.linkedin.com/in/suraj-rawat-30513b340/",
  icon: <LinkedinIcon />,
},


  {
    name: "LeetCode",
    username: "SurajRawat07",
    url: "https://leetcode.com/u/SurajRawat07/",
    icon: <Terminal size={24} />,
  },


  {
    name: "Hugging Face",
    username: "Surajrwt07",
    url: "https://huggingface.co/Surajrwt07",
    icon: <Hexagon size={24} />,
  }

];



export default function Contact(){


return (

<section

style={{
fontFamily:"'Times New Roman', Times, serif"
}}

className="
relative
min-h-screen
overflow-hidden
bg-midnight
px-4
py-20
sm:px-6
lg:px-10
"


>


{/* Background Effects */}

<div className="
absolute
inset-0
pointer-events-none
overflow-hidden
">


<motion.div

animate={{
scale:[1,1.25,1],
opacity:[0.2,0.5,0.2]
}}

transition={{
duration:8,
repeat:Infinity
}}

className="
absolute
left-1/2
top-1/3
h-[280px]
w-[280px]
-translate-x-1/2
rounded-full
bg-primary/20
blur-[120px]
sm:h-[500px]
sm:w-[500px]
"

/>


<motion.div

animate={{
y:[0,-50,0]
}}

transition={{
duration:7,
repeat:Infinity
}}

className="
absolute
right-0
top-20
h-[250px]
w-[250px]
rounded-full
bg-secondary/20
blur-[120px]
"

/>



<div

className="
absolute
inset-0
bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
bg-[size:45px_45px]
opacity-20
"

/>


</div>





<div className="
relative
z-10
mx-auto
max-w-7xl
">



{/* Header */}

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
text-center
mb-14
sm:mb-20
"

>


<div className="
flex
justify-center
items-center
gap-2
text-primary
uppercase
tracking-[0.35em]
text-xs
sm:text-sm
mb-5
">

<MessageSquare size={18}/>

Contact Terminal

</div>



<h2 className="
text-4xl
sm:text-5xl
md:text-7xl
font-bold
text-white
leading-tight
">


Let's Build


<span className="
text-gradient
">

Something Amazing

</span>


</h2>



<p className="
mt-6
mx-auto
max-w-3xl
text-gray-400
text-sm
sm:text-lg
leading-7
">


Open for internships, collaborations,
freelance projects and innovative ideas.


</p>


</motion.div>



{/* Main Section */}

<div className="
grid
grid-cols-1
lg:grid-cols-5
gap-6
lg:gap-8
">


{/* Contact Card */}

<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

whileHover={{
y:-8
}}

className="
lg:col-span-3
relative
overflow-hidden
rounded-[2rem]
border
border-white/10
bg-black/40
backdrop-blur-2xl
p-6
sm:p-8
md:p-12
group
"


>


<div className="
absolute
inset-0
bg-gradient-to-br
from-primary/10
to-secondary/10
opacity-0
group-hover:opacity-100
transition
duration-700
"/>


<div className="
relative
z-10
">


<div className="
flex
items-center
justify-center
w-16
h-16
rounded-2xl
bg-white/5
border
border-white/10
mb-6
">

<Mail
size={35}
className="text-primary"
/>

</div>
<h3 className="
text-2xl
sm:text-3xl
font-bold
text-white
mb-4
">

Direct Communication

</h3>



<p className="
text-gray-400
text-sm
sm:text-base
leading-7
mb-8
">

Open for internships, freelance projects,
collaborations and developer opportunities.

</p>



<a

href="mailto:rawatsuraj80627@gmail.com"

className="
flex
items-center
justify-between
gap-4
rounded-2xl
border
border-white/10
bg-white/5
p-4
sm:p-5
hover:border-primary/50
hover:bg-white/10
transition-all
duration-300
"

>


<div>


<p className="
text-primary
uppercase
tracking-widest
text-xs
mb-1
">

Email

</p>



<p className="
text-white
text-sm
sm:text-lg
break-all
">

rawatsuraj80627@gmail.com

</p>


</div>



<ExternalLink

size={20}

className="
text-gray-400
"

/>


</a>



<div className="
mt-8
flex
flex-wrap
gap-4
text-gray-400
text-sm
">


<div className="
flex
items-center
gap-2
">

<MapPin
size={16}
className="text-primary"
/>

India

</div>



<div className="
flex
items-center
gap-2
">

<Sparkles
size={16}
className="text-primary"
/>

Available For Opportunities

</div>


</div>


</div>


</motion.div>







{/* Social Cards */}


<div className="
lg:col-span-2
flex
flex-col
gap-4
">


{

SOCIAL_LINKS.map((link,index)=>(


<motion.a


key={link.name}


href={link.url}


target="_blank"


rel="noopener noreferrer"



initial={{
opacity:0,
x:40
}}



whileInView={{
opacity:1,
x:0
}}



viewport={{
once:true
}}



transition={{
delay:index*0.12
}}



whileHover={{
x:8,
scale:1.03
}}



className="
group
flex
items-center
justify-between
rounded-2xl
border
border-white/10
bg-black/40
backdrop-blur-xl
p-5
hover:border-primary/40
transition-all
duration-300
"

>


<div className="
flex
items-center
gap-4
">


<div className="
flex
items-center
justify-center
h-12
w-12
rounded-xl
bg-white/5
border
border-white/10
text-primary
group-hover:scale-110
transition
">

{link.icon}

</div>



<div>


<h4 className="
text-white
font-bold
text-lg
">

{link.name}

</h4>



<p className="
text-gray-500
text-sm
">

@{link.username}

</p>


</div>


</div>



<ExternalLink

size={18}

className="
text-gray-500
group-hover:text-primary
transition
"

/>


</motion.a>


))

}


</div>



</div>
{/* Bottom CTA */}

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
mt-16
sm:mt-24
rounded-3xl
border
border-white/10
bg-black/30
backdrop-blur-xl
p-6
sm:p-10
text-center
"

>


<div className="
flex
justify-center
mb-5
">

<div className="
flex
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
">

<Send size={16}/>

Let's Connect

</div>

</div>




<h3 className="
text-2xl
sm:text-4xl
font-bold
text-white
mb-4
">


Have a project idea?


<span className="
text-gradient
">

Let's Create It

</span>


</h3>



<p className="
max-w-2xl
mx-auto
text-gray-400
text-sm
sm:text-base
leading-7
">

I enjoy building modern web applications,
AI powered solutions and scalable products.

</p>



<a

href="mailto:rawatsuraj80627@gmail.com"

className="
inline-flex
items-center
gap-3
mt-7
rounded-full
bg-primary
px-7
py-3
text-black
font-bold
hover:scale-105
transition
duration-300
"

>

<Mail size={18}/>

Send Message


</a>


</motion.div>







{/* Footer */}


<footer className="
mt-16
pt-6
border-t
border-white/10
flex
flex-col
md:flex-row
items-center
justify-between
gap-4
text-center
">


<div className="
flex
items-center
gap-2
text-gray-400
text-sm
">


<span className="
w-2
h-2
rounded-full
bg-primary
animate-pulse
"/>


Available For Opportunities


</div>




<p className="
text-gray-500
text-sm
">


© {new Date().getFullYear()} Suraj Rawat.
Built with React & Next.js ❤️


</p>


</footer>





</div>


</section>


);

}