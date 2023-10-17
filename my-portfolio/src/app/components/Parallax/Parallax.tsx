"use client"; 


import mountains from "@/assets/mountains.png";
import planets from "@/assets/planets.png";
import sun from "@/assets/sun.png";
import stars from "@/assets/stars.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps{
    type: string;
}


export default function Parallax({type} : ParallaxProps){

    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["100vh start", "end start"],
      });


    
      const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return(
        <div className="relative flex align-middle items-center justify-center overflow-hidden">
            <h1 className="absolute text-7xl text-center align-middle z-50 text-gray-300 font-bold">{type === "services" ? "What I Do?" : "What I Did?"}</h1>
            <div className={type=== "services" ? "relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%": "relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}>
                
                <Image 
                    src={mountains}
                    alt="mountains"
                    className="h-screen"
                />
        
                <motion.div  className="absolute top-0 overflow-hidden" style={{y: yBg}} viewport={{ root: ref }}>
                    {type==="services" 
                    ?  <Image 
                        src={planets}
                        alt="planets"
                       
                    />
                    : <Image 
                            src={sun}
                            alt="sun"
                            className=""

                    />}
                </motion.div>

                <motion.div className="absolute top-0 left-0" style={{ x: yBg }} >
                    <Image 
                        src={stars}
                        alt="starts"
                        className="h-screen overflow-hidden"
                    />
                </motion.div>

                

            </div>
            
        </div>
    );
}