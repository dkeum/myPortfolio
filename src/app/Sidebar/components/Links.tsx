"use client";

import {motion} from "framer-motion";

interface LinksProps {
    className?: string;
}

export default function Links({className} : LinksProps){

    const items = ["Homepage", "Services", "Portfolio", "Contact"];
    const variants = {
        open: {
          transition: {
            staggerChildren: 0.1,
          },
        },
        closed: {
          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
          },
        },
      };
      const itemVariants = {
        open: {
          y: 0,
          opacity: 1,
        },
        closed: {
          y: 50,
          opacity: 0,
        },
      };


    return(
        <motion.div 
        className={`h-screen flex flex-col text-center justify-center gap-5 ${className}`}
        variants={variants}        
        >
            
            {items.map((item)=>(
                <motion.a href={`#${item}`} 
                key={item} 
                className="z-50"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                    {item}
                </motion.a>
            ))}
            
        </motion.div>
    );
}