"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Cursor (){
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e : any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="w-10 h-10 border-r-4 border-4 fixed z-50 rounded-full"
      animate={{ x: position.x+10, y: position.y+10 }}
    ></motion.div>
  );
};

