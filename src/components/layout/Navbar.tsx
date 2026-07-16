"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";


const NAV_ITEMS = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Education",
  "Skills",
  "Hackathons",
  "Achievements",
  "Certifications",
  "Contact",
];



export default function Navbar() {


  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");




  useEffect(() => {


    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

    };


    window.addEventListener(
      "scroll",
      handleScroll,
      { passive:true }
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  }, []);






  useEffect(() => {


    document.body.style.overflow = open
      ? "hidden"
      : "";


    return () => {

      document.body.style.overflow = "";

    };


  }, [open]);







  useEffect(() => {


    const sections = NAV_ITEMS
      .map(item =>
        document.getElementById(
          item.toLowerCase()
        )
      )
      .filter(Boolean);



    const observer = new IntersectionObserver(

      entries => {

        entries.forEach(entry => {


          if(entry.isIntersecting){

            const id = entry.target.id;


            setActive(
              id.charAt(0).toUpperCase()
              +
              id.slice(1)
            );


          }


        });


      },

      {
        threshold:0.3,
        rootMargin:"-100px"
      }

    );




    sections.forEach(section => {

      if(section){

        observer.observe(section);

      }

    });



    return () => {

      observer.disconnect();

    };


  }, []);







  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id:string
  ) => {


    e.preventDefault();


    const section =
      document.getElementById(id);



    if(section){

      section.scrollIntoView({

        behavior:"smooth",
        block:"start"

      });

    }


    setOpen(false);


  };







  return (

    <>


      <motion.nav


        initial={{
          y:-80,
          opacity:0
        }}


        animate={{
          y:0,
          opacity:1
        }}


        transition={{
          duration:.6
        }}



        className={clsx(

          "fixed top-0 left-0 w-full z-50",

          "px-4 sm:px-6 lg:px-10",

          "py-4",

          "font-serif",


          scrolled

          ?

          `
          bg-black/70
          backdrop-blur-2xl
          border-b
          border-white/10
          shadow-[0_20px_50px_rgba(0,0,0,.45)]
          `


          :

          `
          bg-transparent
          `


        )}


      >



        <div className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
        ">



          {/* LOGO */}


          <motion.div

            whileHover={{
              scale:1.08
            }}


            className="
            text-3xl
            font-black
            tracking-[0.35em]
            cursor-pointer
            bg-gradient-to-r
            from-cyan-400
            via-purple-400
            to-pink-400
            bg-clip-text
            text-transparent
            "

          >

            SR

          </motion.div>





          {/* DESKTOP MENU */}


          <div className="
            hidden
            lg:flex
            items-center
            gap-1
          ">


            {NAV_ITEMS.map(item => (


              <motion.a


                key={item}


                href={`#${item.toLowerCase()}`}


                onClick={(e)=>
                  scrollToSection(
                    e,
                    item.toLowerCase()
                  )
                }


                whileHover={{
                  y:-3
                }}


                whileTap={{
                  scale:.9
                }}


                className={clsx(

                  `
                  relative
                  px-4
                  py-2
                  rounded-full
                  text-xs
                  uppercase
                  tracking-widest
                  transition-all
                  duration-300
                  `,


                  active === item

                  ?

                  `
                  text-white
                  bg-cyan-400/10
                  border
                  border-cyan-400/40
                  shadow-[0_0_25px_rgba(34,211,238,.4)]
                  `


                  :

                  `
                  text-gray-400
                  hover:text-white
                  hover:bg-white/10
                  `

                )}

              >


                {item}


              </motion.a>


            ))}


          </div>
                    {/* MOBILE BUTTON */}

          <motion.button

            whileTap={{
              scale:.85
            }}

            onClick={() => setOpen(!open)}


            className="
            lg:hidden
            p-3
            rounded-2xl
            bg-white/10
            border
            border-white/20
            backdrop-blur-xl
            text-white
            "

          >

            {
              open
              ?
              <X size={26}/>
              :
              <Menu size={26}/>
            }


          </motion.button>



        </div>


      </motion.nav>









      {/* MOBILE MENU */}



      <AnimatePresence>


      {

        open && (


          <motion.div


            initial={{
              opacity:0,
              y:-20
            }}


            animate={{
              opacity:1,
              y:0
            }}


            exit={{
              opacity:0,
              y:-20
            }}


            transition={{
              duration:.3
            }}



            className="
            fixed
            inset-0
            z-40
            bg-black/95
            backdrop-blur-3xl
            flex
            items-center
            justify-center
            lg:hidden
            "

          >





            <div className="
            flex
            flex-col
            items-center
            gap-6
            w-full
            px-6
            ">



              {
                NAV_ITEMS.map((item,index)=>(


                  <motion.a


                    key={item}


                    href={`#${item.toLowerCase()}`}


                    onClick={(e)=>
                      scrollToSection(
                        e,
                        item.toLowerCase()
                      )
                    }



                    initial={{
                      opacity:0,
                      y:25
                    }}



                    animate={{
                      opacity:1,
                      y:0
                    }}



                    transition={{
                      delay:index * 0.04
                    }}



                    whileTap={{
                      scale:.9
                    }}



                    className={clsx(

                      `
                      text-2xl
                      sm:text-3xl
                      tracking-wide
                      font-serif
                      transition-all
                      `,


                      active === item


                      ?

                      `
                      text-cyan-400
                      drop-shadow-[0_0_25px_rgba(34,211,238,.8)]
                      `


                      :

                      `
                      text-gray-300
                      hover:text-white
                      `


                    )}

                  >


                    {item}


                  </motion.a>


                ))
              }




            </div>



          </motion.div>


        )


      }


      </AnimatePresence>



    </>

  );


}