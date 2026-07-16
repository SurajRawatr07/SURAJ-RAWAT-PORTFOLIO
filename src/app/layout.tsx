import type { Metadata, Viewport } from "next";

import {
  Geist,
  Geist_Mono,
  Inter
} from "next/font/google";

import "./globals.css";

import LenisProvider from "@/components/layout/LenisProvider";



const geistSans = Geist({

  variable:"--font-geist-sans",

  subsets:["latin"],

  display:"swap",

});



const geistMono = Geist_Mono({

  variable:"--font-geist-mono",

  subsets:["latin"],

  display:"swap",

});



const inter = Inter({

  variable:"--font-inter",

  subsets:["latin"],

  display:"swap",

});






export const metadata: Metadata = {


  title:{

    default:
    "Suraj Rawat | AI Engineer & Full Stack Developer",

    template:
    "%s | Suraj Rawat"

  },



  description:

  "Suraj Rawat is an AI Engineer and Full Stack Developer specializing in Generative AI, Machine Learning, MERN Stack, Next.js, RAG systems and scalable software applications.",




  keywords:[


    "Suraj Rawat",

    "AI Engineer",

    "Machine Learning Developer",

    "Generative AI",

    "LLM Applications",

    "RAG Developer",

    "MERN Stack Developer",

    "Next.js Developer",

    "Full Stack Developer",

    "React Developer",

    "Software Engineer"


  ],




  authors:[

    {

      name:"Suraj Rawat"

    }

  ],




  creator:"Suraj Rawat",



  metadataBase:
  new URL(
    "https://your-domain.com"
  ),




  openGraph:{


    title:
    "Suraj Rawat | AI Engineer & Full Stack Developer",


    description:

    "Building intelligent AI systems, modern web applications and scalable software solutions.",



    type:"website",



    locale:"en_US",


  },




  twitter:{


    card:"summary_large_image",


    title:

    "Suraj Rawat | AI Engineer",


    description:

    "AI Engineer building Generative AI applications and scalable software systems.",


  },





  robots:{


    index:true,


    follow:true,


  }



};







export const viewport:Viewport={


  width:"device-width",

  initialScale:1,

  themeColor:"#030712"


};









export default function RootLayout({

children,

}:Readonly<{

children:React.ReactNode;

}>) {


return (

<html

lang="en"

className={`
${geistSans.variable}
${geistMono.variable}
${inter.variable}
antialiased
`}

>


<body

className="
min-h-screen
flex
flex-col
bg-midnight
text-text
selection:bg-primary
selection:text-white
overflow-x-hidden
"

>


<LenisProvider>


{children}


</LenisProvider>



</body>


</html>


);


}