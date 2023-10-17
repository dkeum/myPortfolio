"use client";

import React from 'react';
import Image from 'next/image';
import hero from '@/assets/hero.png';
import scroll from '@/assets/scroll.png';
import { motion } from 'framer-motion';

import './hero.scss';

export default function Hero() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: '-220%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 20,
      },
    },
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('Portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const ContactSection = document.getElementById('Contact');
    if ( ContactSection) {
       ContactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="h-screen flex relative justify-center sm:justify-end items-center gap-5">
        <motion.div className="text-white font-bold text-center">
          <motion.div className="flex flex-col gap-y-5" initial="initial" animate="animate">
            <motion.h2 variants={textVariants} className="text-purple-500 text-4xl">
              Daniel Keum
            </motion.h2>
            <motion.h1 variants={textVariants} className="text-5xl">
              Full Stack Developer
            </motion.h1>
          </motion.div>
          <motion.div className="flex flex-row gap-5 mt-5 justify-center" initial="initial" animate="animate">
            <motion.button onClick={scrollToPortfolio} variants={textVariants} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-50">
              View Latest Works
            </motion.button>
            <motion.button onClick={scrollToContact} variants={textVariants} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-50">
              Contact me
            </motion.button>
          </motion.div>
          <motion.div className="flex flex-row mt-10 gap-4" initial="initial" animate="scrollButton">
            <Image src={scroll} alt="scroll" height={40} />
            <p>Scroll Down to See More</p>
          </motion.div>
        </motion.div>
        <div className="">
          <Image src={hero} alt="hero picture" height={500} />
        </div>
      </div>

      <motion.div
        //@ts-ignore
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer text-white -z-50 overflow-hidden">
        Writer Context Creator Influencer
      </motion.div>
    </>
  );
}
