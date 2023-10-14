"use client";

import Image from "next/image";
import github from "@/assets/github.png";
import linkedin from "@/assets/linkedin.png";
import Link from "next/link";
import {motion} from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

export default function NavBar(){


    const nameInitialState = {opacity:0, scale:0.5};
    const nameFinalState = {opacity:1, scale:1};
    const nameTransition = {duration:0.5};

    return(
        <div className="h-[100px]">
            <div className="flex justify-between "> 
                <div className="flex flex-row text-white gap-4 font-bold text-lg">
                    <Sidebar/>
                    <motion.span className="items-center my-5" initial={nameInitialState} animate={nameFinalState} transition={nameTransition} >Daniel Keum</motion.span>
                </div>    
                
                <div className="flex flex-row gap-4 mx-4 my-5">

                <Link 
                    href= "https://dkeum.github.io/"
                >
                    <div className="flex flex-col align-middle">
                        <span className="text-white font-bold ">My Other </span>
                        <span className="text-white font-bold ">Websites</span>
                    </div>
                   
                </Link>

                <Link href="https://github.com/dkeum?tab=repositories" className="btn btn-ghost text-xl normal-case bg-gray-200 rounded-full w-10 h-10" target="_blank">
                    <Image 
                        src={github}
                        alt="github logo"
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/daniel-keum-9361a6186/" className="btn btn-ghost text-xl normal-case " target="_blank"> 
                
                    <Image 
                        src={linkedin}
                        alt="linked logo"
                        height={40}
                        width={40}
                    />
                </Link>
                </div>
                

            </div>
        </div>
    );
}