"use client";


import { useState } from "react";
import Links from "./components/Links";
import ToggleButton from "./components/ToggleButton";
import {motion} from "framer-motion";
import { MouseEvent } from "react"; // Import MouseEvent

export default function Sidebar(){

    const [open, setOpen] = useState<boolean>(false);

    const variants = {
        open: {
          clipPath: "circle(1200px at 50px 50px)",
          transition: {
            type: "spring",
            stiffness: 20,
          },
        },
        closed: {
          clipPath: "circle(30px at 50px 50px)",
          transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
          },
        },
      };


     // Define a function to handle the toggle action
    const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
        setOpen((prev) => !prev);
    };

    return(
        <motion.div className="text-black rounded-full relative" animate={open ? "open" : "closed"}>
           {open ? 
           <>
            <motion.div className="w-[400px] bg-white" variants={variants}>
                <Links className="text-4xl"/>
            </motion.div>
            </>
            :
            <div className="w-[400px] ">
            </div>

           }
            
            <ToggleButton onClick={handleToggle} className="flex bg-white w-10 h-10 items-center justify-center align-middle absolute top-10 left-10 z-50 cursor-pointer rounded-full" />
        </motion.div>

    );
}




        
      
        