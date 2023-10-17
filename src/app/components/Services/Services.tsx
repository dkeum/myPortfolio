"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import javascript from "@/assets/javascript.png"
import typescript from "@/assets/typescript.png"
import html5 from "@/assets/html5.png"
import css from "@/assets/css.png"
import python from "@/assets/python.png"
import cpp from "@/assets/cpp.png"
import csharp from "@/assets/csharp.png"
import sass from "@/assets/sass.png"
import react from "@/assets/react.png"
import nodejs from "@/assets/nodejs.png"
import express from "@/assets/express.png"
import nextjs from "@/assets/nextjs.png"
import mongodb from "@/assets/mongodb.png"
import postgresql from "@/assets/postgresql.png"
import tailwind from "@/assets/tailwind.png"
import bootstrap from "@/assets/bootstrap.jpeg"
import github from "@/assets/github.png"
import firebase from "@/assets/firebase.png"
import vercel from "@/assets/vercel.png"
import prisma from "@/assets/prisma.png"
import daisyui from "@/assets/daisyui.png"
import oauth from "@/assets/oauth.png"
import stripe from "@/assets/stripe.png"
import gcp from "@/assets/gcp.png"
import aws from "@/assets/aws.png"



import Image from "next/image";


export default function Services(){

    const ref = useRef<any>();

    const isInView = useInView(ref, { margin: "-100px" });
    const variants = {
        initial: {
          x: -500,
          y: 100,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            staggerChildren: 0.1,
          },
        },
      };
      

    return(
        <motion.div animate={isInView && "animate"} variants={variants} initial="initial" ref={ref}  className="flex flex-col relative">


            <motion.div variants={variants} className="text-4xl font-bold text-white text-center justify-center mt-36 flex flex-row"> 
                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
                <h1>My <b className="text-4xl text-purple-500">Skills</b></h1>
                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            </motion.div>

            <div className="flex flex-row gap-10 justify-center my-10">
                <div className="border-4 border-slate-100 w-96 h-96 bg-slate-800 flex flex-col align-top ">
                    <motion.h1 variants={variants} className="font-bold text-white text-center text-2xl mt-5">Languages</motion.h1>
                    
                    <motion.div variants={variants} className="text-white flex flex-col justify-center text-center mt-5 gap-y-3">
                        <motion.div variants={variants} className=" flex flex-row justify-center gap-3">
                            <p>JS/TS</p>
                            <Image
                                src={javascript}
                                alt="javascript icon"
                                width={20}
                                height={10}
                            />
                            <Image
                                src={typescript}
                                alt="typescript icon"
                                width={20}
                                height={10}
                            />
                        </motion.div>
                        <motion.div variants={variants}  className=" flex flex-row justify-center gap-3">
                            <p>HTML5</p>
                            <Image
                                src={html5}
                                alt="html icon"
                                width={20}
                                height={10}
                            />
                        </motion.div>
                        <motion.div variants={variants} className=" flex flex-row justify-center gap-3">
                            <p>CSS/SASS</p>
                            <Image
                                src={css}
                                alt="css icon"
                                width={20}
                                height={10}
                            />
                             <Image
                                src={sass}
                                alt="sass icon"
                                width={20}
                                height={10}
                            />
                        </motion.div>
                        <motion.div variants={variants} className=" flex flex-row justify-center gap-3">
                            <p>Python</p>
                            <Image
                                src={python}
                                alt="python icon"
                                width={20}
                                height={10}
                            />
                        </motion.div>
                        <motion.div variants={variants} className=" flex flex-row justify-center gap-3">
                            <p>C/C++</p>
                            <Image
                                src={cpp}
                                alt="cpp icon"
                                width={20}
                                height={10}
                            />
                        </motion.div>
                        <motion.div variants={variants} className=" flex flex-row justify-center gap-3">
                            <p>C#</p>
                            <Image
                                src={csharp}
                                alt="csharp icon"
                                width={20}
                                height={10}
                            />
                        </motion.div>
                    </motion.div>

                </div>
                <motion.div variants={variants} className="border-4 border-slate-100 w-96 h-96 bg-slate-800 flex flex-col align-middle justify-center"> 
                    <h1 className="font-bold text-white text-center text-2xl">Framework/Library/Database</h1>
                    <div className="text-white text-lg flex flex-col justify-center text-center mt-5 gap-y-2" >
                        <motion.div variants={variants} className=" flex flex-row justify-center gap-3">
                            <p>React</p>
                            <Image
                                src={react}
                                alt="react icon"
                                width={30}
                                height={10}
                            />
                            
                        </motion.div>
                        <motion.div variants={variants} className=" flex flex-row justify-center gap-3">
                            <p>Node/Express</p>
                            <Image
                                src={nodejs}
                                alt="nodejs icon"
                                width={30}
                                height={10}
                            />
                            <Image
                                src={express}
                                alt="express icon"
                                width={30}
                                height={10}
                            />
                        </motion.div>
                        <motion.div variants={variants} className=" flex flex-row justify-center gap-3">
                            <p>NextJS</p>
                            <Image
                                src={nextjs}
                                alt="nextjs icon"
                                width={30}
                                height={10}
                            />
                        </motion.div>
                        
                        <motion.div variants={variants} className=" flex flex-row justify-center gap-3">
                            <p>Mongodb</p>
                            <Image
                                src={mongodb}
                                alt="mongodo icon"
                                width={30}
                                height={10}
                            />
                        </motion.div>
                        <motion.div variants={variants} className=" flex flex-row justify-center gap-3">
                            <p>PostgreSQL</p>
                            <Image
                                src={postgresql}
                                alt="postgresql icon"
                                width={30}
                                height={10}
                            />
                        </motion.div>

                        <motion.div variants={variants} className="flex flex-row justify-center gap-3">
                            <p>DaisyUI</p>
                             <Image
                                src={daisyui}
                                alt="daisyui icon"
                                width={30}
                                height={10}
                            />
                        </motion.div>

                        <motion.div variants={variants} className=" flex flex-row justify-center gap-3">
                            <p>Tailwind</p>
                            <Image
                                src={tailwind}
                                alt="tailwind icon"
                                width={30}
                                height={10}
                            />
                        </motion.div>
                        <motion.div variants={variants} className=" flex flex-row justify-center gap-3">
                            <p>BootStrap</p>
                            <Image
                                src={bootstrap}
                                alt="bootstrap icon"
                                width={30}
                                height={10}
                            />
                        </motion.div>

                    </div>
                </motion.div>

                <motion.div className="border-4 border-slate-100 w-96 h-96 bg-slate-800 flex flex-col align-middle justify-center">
                    <motion.h1 variants={variants} className="font-bold text-white text-center text-2xl">Technologies</motion.h1> 
                    <div className="text-white text-lg flex flex-col justify-center text-center mt-5 gap-y-4" >
                        <motion.div variants={variants} className="flex flex-row justify-center gap-3">
                            <p>Git, Github Actions</p>
                             <Image
                                src={github}
                                alt="github icon"
                                width={30}
                                height={10}
                                className="bg-white"
                            />
                        </motion.div>
                        
                        <motion.div variants={variants} className="flex flex-row justify-center gap-3">
                            <p>Firebase</p>
                             <Image
                                src={firebase}
                                alt="firebase icon"
                                width={30}
                                height={10}
                            />
                        </motion.div>

                        <motion.div variants={variants} className="flex flex-row justify-center gap-3">
                            <p>Vercel</p>
                             <Image
                                src={vercel}
                                alt="vercel icon"
                                width={30}
                                height={10}
                            />
                        </motion.div>
                         <motion.div variants={variants} className="flex flex-row justify-center gap-3">
                            <p>Prisma</p>
                             <Image
                                src={prisma}
                                alt="Prisma icon"
                                width={30}
                                height={10}
                            />
                        </motion.div>

                        <motion.div variants={variants} className="flex flex-row justify-center gap-3">
                            <p>OAuth</p>
                             <Image
                                src={oauth}
                                alt="OAuth icon"
                                width={30}
                                height={10}
                            />
                        </motion.div>

                        <motion.div variants={variants} className="flex flex-row justify-center gap-3">
                            <p>Stripe</p>
                             <Image
                                src={stripe}
                                alt="Stripe icon"
                                width={30}
                                height={10}
                            />
                        </motion.div>

                       
            

                    </div>
                </motion.div>
            </div>
            
        
        </motion.div>
    );
}