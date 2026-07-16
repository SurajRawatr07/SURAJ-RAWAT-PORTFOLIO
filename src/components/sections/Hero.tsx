"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Mail,
} from "lucide-react";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {

      if (containerRef.current) {

        gsap.to(".hero-video-wrapper", {
          yPercent: 30,
          ease: "none",

          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

      }

    });


    return () => {
      mm.revert();
    };

  }, []);


  return (

    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-end justify-center overflow-hidden pb-16 md:pb-32"
    >

      {/* Background Video */}

      <div className="absolute inset-0 z-0 bg-midnight hero-video-wrapper transform-gpu">

        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 transform-gpu will-change-transform"
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
        />


        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent z-10 pointer-events-none" />

      </div>



      {/* Content */}

      <div className="relative z-20 flex flex-col items-center justify-end text-center px-4 max-w-4xl mx-auto w-full">


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >

          Suraj <span className="text-gradient">Rawat</span>

        </motion.h1>



        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-300 mb-6 tracking-wide"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >

          MERN Stack Developer

          <span className="text-primary px-3">|</span>

          Open Source Contributor

          <span className="text-primary px-3">|</span>

          BCA Student

        </motion.h2>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >


          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-midnight transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(0,240,255,0.5)]"
          >

            View Projects

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

          </a>



          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/10"
          >

            <Mail className="h-5 w-5 text-primary" />

            Contact Me

          </a>



          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:border-secondary hover:bg-secondary/10"
          >

            <Download className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:-translate-y-0.5" />

            Download Resume

          </a>


        </motion.div>


      </div>
            {/* Floating Social Icons */}


      <motion.a
        href="https://www.linkedin.com/in/suraj-rawat-30513b340/"
        target="_blank"
        rel="noopener noreferrer"

        initial={{ top: "20%", left: "15%" }}

        animate={{
          x: ["0vw", "30vw", "10vw", "-10vw", "0vw"],
          y: ["0vh", "20vh", "-30vh", "10vh", "0vh"],
          rotate: [0, 10, -5, 8, 0]
        }}

        transition={{
          repeat: Infinity,
          duration: 45,
          ease: "linear"
        }}

        className="absolute z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all shadow-[0_0_20px_rgba(10,102,194,0.4)]"

        aria-label="LinkedIn"
      >

        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 md:w-8 md:h-8 fill-[#0A66C2]"
        >

          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>

        </svg>

      </motion.a>





      <motion.a

        href="https://github.com/SurajRawatr07"

        target="_blank"

        rel="noopener noreferrer"


        initial={{ top: "60%", right: "15%" }}


        animate={{

          x: ["0vw", "-30vw", "-10vw", "10vw", "0vw"],

          y: ["0vh", "-25vh", "20vh", "-10vh", "0vh"],

          rotate: [0, -15, 10, -5, 0]

        }}


        transition={{

          repeat: Infinity,

          duration: 50,

          ease: "linear"

        }}


        className="absolute z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"

        aria-label="GitHub"

      >

        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 md:w-8 md:h-8 fill-white"
        >

          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>

        </svg>

      </motion.a>





      <motion.a

        href="https://leetcode.com/u/SurajRawat07/"

        target="_blank"

        rel="noopener noreferrer"


        initial={{ bottom:"25%", left:"20%" }}


        animate={{

          x:["0vw","30vw","10vw","40vw","0vw"],

          y:["0vh","-30vh","-10vh","-20vh","0vh"],

          rotate:[0,20,-10,15,0]

        }}


        transition={{

          repeat:Infinity,

          duration:40,

          ease:"linear"

        }}


        className="absolute z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all shadow-[0_0_20px_rgba(255,161,22,0.3)]"

        aria-label="LeetCode"

      >

        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 md:w-8 md:h-8 fill-[#FFA116]"
        >

          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>

        </svg>


      </motion.a>

    </section>
  );
}
