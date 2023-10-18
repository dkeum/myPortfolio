"use client";

import react from "@/assets/react.png"
import nextjs from "@/assets/nextjs.png"
import typescript from "@/assets/typescript.png"
import tailwind from "@/assets/tailwind.png"
import mongodb from "@/assets/mongodb.png"
import prisma from "@/assets/prisma.png"
import daisyUI from "@/assets/daisyui.png"
import ecommerce from "@/assets/ecommerce.jpg"
import pokedex from "@/assets/pokedex.jpg"
import express from "@/assets/express.png"
import nodejs from "@/assets/nodejs.png"
import firebase from "@/assets/firebase.png"
import bootstrap from "@/assets/bootstrap.jpeg"


import Image from "next/image";

interface PortfolioProps {
    type: string; 
}

export default function Portfolio({type} : PortfolioProps){

   



   return(
   <>
       {type=== "Portfolio1" &&  
       <div className="h-screen text-white font-bold flex flex-row justify-center align-middle">   
        
        <div className="flex flex-row items-center justify-center align-middle gap-5 gap-x-10">
            <div className="flex flex-col w-[300px]">
                <h1 className="font-bold text-3xl text-purple-500">Ecommerce Website</h1>

                <p className="mt-5"> <span className="text-purple-500">Description:</span> Welcome to my vibrant and user-friendly e-commerce website, where shopping becomes an effortless and enjoyable experience. Responsive for both Mobile and PC users. </p>
                <p className="mt-5 text-purple-500"> Made with: 
                

                <div className="flex flex-row gap-x-1 py-5">
                <Image
                    src={react}
                    alt="react"
                    width={30}
                    height={30}
                />
                <Image
                    src={nextjs}
                    alt="nextjs"
                    width={30}
                    height={30}
                />
                <Image
                    src={typescript}
                    alt="nextjs"
                    width={30}
                    height={30}
                />
                <Image
                    src={tailwind}
                    alt="tailwind"
                    width={30}
                    height={30}
                />
                <Image
                    src={mongodb}
                    alt="mongodb"
                    width={30}
                    height={30}
                />
                <Image
                    src={prisma}
                    alt="prisma"
                    width={30}
                    height={30}
                />
                <Image
                    src={daisyUI}
                    alt="daisyUI"
                    width={30}
                    height={30}
                />
                </div>                
                </p>
               
                <div className="flex flex-row gap-x-5 justify-center mt-10">

                    <a
                        href="https://ecommerce-henna-one.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <button className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Demo</button>
                    </a>
                    
                    <a
                        href="https://github.com/dkeum/Ecommerce"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <button  className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">View Code</button>
                    </a>
                </div>
               
            </div>
            
            <Image
                src={ecommerce}
                alt="my Ecommerce website"
                width={500}
                height={800}
            />


        </div>
    
        </div>
        }

        {type=== "Portfolio2" &&  
         <div className="h-screen text-white font-bold flex flex-row justify-center align-middle">   
        
         <div className="flex flex-row items-center justify-center align-middle gap-5 gap-x-10">
             <div className="flex flex-col w-[300px]">
                 <h1 className="font-bold text-3xl text-purple-500">Pokedex</h1>
 
                 <p className="mt-5"> <span className="text-purple-500">Description:</span> Your ultimate destination for all things Pokémon. Whether you are a seasoned Pokémon trainer or just beginning your journey, our website is the perfect companion for discovering, exploring, and researching Pokémon species. </p>
                 <p className="mt-5 text-purple-500"> Made with: 
                 
 
                 <div className="flex flex-row gap-x-1 py-5">
                 <Image
                     src={react}
                     alt="react"
                     width={30}
                     height={30}
                 />

                 <Image
                     src={mongodb}
                     alt="mongodb"
                     width={50}
                     height={30}
                 />

                <Image
                     src={express}
                     alt="express"
                     width={50}
                     height={30}
                 />
                 <Image
                     src={nodejs}
                     alt="nodejs"
                     width={30}
                     height={30}
                 />
                <Image
                     src={bootstrap}
                     alt="bootstrap"
                     width={30}
                     height={30}
                 />
                 <Image
                     src={firebase}
                     alt="firebase"
                     width={30}
                     height={30}
                 />
                 </div>                
                 </p>
                
                 <div className="flex flex-row gap-x-5 justify-center mt-10">
 
                     <a
                         href="https://pokemon-encyclopedia-v1.vercel.app/"
                         target="_blank"
                         rel="noopener noreferrer"
                     >
                     <button className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Demo</button>
                     </a>
                     
                     <a
                         href="https://github.com/dkeum/PokemonEncyclopedia_v1"
                         target="_blank"
                         rel="noopener noreferrer"
                     >
                     <button  className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">View Code</button>
                     </a>
                 </div>
                
             </div>
             
             <Image
                 src={pokedex}
                 alt="pokedex website"
                 width={500}
                 height={800}
             />
         </div>
         </div>}

    </>
   ); 
}