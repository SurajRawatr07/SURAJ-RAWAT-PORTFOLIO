"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {

  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);


  const systemLogs = [
    "Booting portfolio core...",
    "Loading interface modules...",
    "Optimizing animations...",
    "Connecting experience layers...",
    "Preparing final assets...",
    "System online"
  ];



  useEffect(() => {

    let current = 0;
    let logCount = 0;


    const timer = setInterval(() => {


      current += Math.floor(Math.random() * 5) + 4;


      if(current >= 100){

        current = 100;

        setProgress(100);

        setLogs(prev => [
          ...prev,
          "System online"
        ]);

        setReady(true);

        clearInterval(timer);

        return;

      }



      setProgress(current);



      if(
        logCount < systemLogs.length - 1 &&
        current > logCount * 18
      ){

        setLogs(prev => [
          ...prev,
          systemLogs[logCount]
        ]);

        logCount++;

      }



    },220);



    return () => clearInterval(timer);


  },[]);





  const launch = () => {


    if(!ready) return;


    window.dispatchEvent(
      new CustomEvent(
        "play-hero-video"
      )
    );


    onComplete();


  };






return (

<motion.div

initial={{
opacity:1
}}

exit={{
opacity:0,
scale:1.08,
filter:"blur(25px)"
}}

transition={{
duration:1
}}


className="
fixed
inset-0
z-[999]
overflow-hidden
flex
items-center
justify-center
bg-midnight
text-white
"


>



{/* Background Glow */}


<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,rgba(0,240,255,.20),transparent_45%)]
"
/>



<div
className="
absolute
inset-0
bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)]
bg-[size:50px_50px]
"
/>





{/* Moving Light */}


<motion.div

animate={{
x:["-120%","120%"]
}}

transition={{
duration:5,
repeat:Infinity,
ease:"linear"
}}


className="
absolute
top-0
left-0
w-[35%]
h-full
bg-gradient-to-r
from-transparent
via-primary/20
to-transparent
"
/>





{/* Main */}


<div
className="
relative
z-10
w-[90%]
max-w-md
flex
flex-col
items-center
"
>



{/* SR Logo */}


<motion.div

animate={{
scale:[1,1.05,1]
}}

transition={{
duration:3,
repeat:Infinity
}}


className="
relative
w-36
h-36
sm:w-44
sm:h-44
rounded-full
flex
items-center
justify-center
bg-white/5
backdrop-blur-xl
border
border-primary/40
shadow-[0_0_80px_rgba(0,240,255,.35)]
"

>


<motion.div

animate={{
rotate:360
}}

transition={{
duration:12,
repeat:Infinity,
ease:"linear"
}}


className="
absolute
inset-[-12px]
rounded-full
border
border-secondary/40
border-t-primary
"

/>



<span

className="
text-5xl
sm:text-6xl
font-black
tracking-widest
bg-gradient-to-r
from-primary
via-cyan-300
to-secondary
bg-clip-text
text-transparent
"

>

SR

</span>


</motion.div>




{/* System Console */}


<div

className="
mt-14
w-full
rounded-2xl
border
border-white/10
bg-white/5
backdrop-blur-2xl
p-5
shadow-[0_0_60px_rgba(0,0,0,.4)]
"

>



<div

className="
flex
items-center
justify-between
mb-4
"

>


<span

className="
text-[10px]
sm:text-xs
font-mono
tracking-[0.35em]
text-gray-400
uppercase
"

>

SYSTEM BOOT

</span>



<span

className="
text-primary
font-mono
text-sm
"

>

{progress}%

</span>


</div>





{/* Logs */}


<div

className="
h-24
overflow-hidden
space-y-2
font-mono
text-[10px]
sm:text-xs
"

>


{

logs.map((log,index)=>(


<motion.p

key={index}

initial={{
opacity:0,
x:-15
}}

animate={{
opacity:1,
x:0
}}


className="
text-gray-300
"

>

<span className="text-primary">
&gt;
</span>

{" "}

{log}


</motion.p>


))


}



</div>





{/* Progress Bar */}


<div

className="
mt-5
h-2
rounded-full
overflow-hidden
bg-white/10
border
border-white/10
"

>


<motion.div


animate={{

width:`${progress}%`

}}


transition={{

duration:.4

}}


className="
h-full
rounded-full
bg-gradient-to-r
from-primary
via-cyan-300
to-secondary
shadow-[0_0_30px_rgba(0,240,255,.7)]
"

/>


</div>



</div>







{/* Launch Button */}



{

ready && (


<motion.button


initial={{

opacity:0,
y:20

}}


animate={{

opacity:1,
y:0

}}


transition={{

duration:.6

}}


whileHover={{

scale:1.05

}}


whileTap={{

scale:.95

}}


onClick={launch}



className="
mt-8
w-full
py-4
rounded-xl
border
border-primary/50
bg-primary/10
text-primary
font-bold
tracking-[0.4em]
text-xs
uppercase
hover:bg-primary
hover:text-midnight
transition-all
shadow-[0_0_40px_rgba(0,240,255,.35)]
"


>


ENTER PORTFOLIO


</motion.button>


)


}





</div>



</motion.div>


);

}