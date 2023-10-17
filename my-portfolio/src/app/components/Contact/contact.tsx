"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";


export default function Contact(){

    const variants = {
        initial: {
          y: 500,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            staggerChildren: 0.1,
          },
        },
      };

    const ref = useRef<any>();
    const formRef = useRef<any>();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const isInView = useInView(ref, { margin: "-100px" });

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_s6c3sar",
            "template_7ikqj5g",
            formRef.current,
            "TCOCZqPuSb5g5xdxc"
          )
          .then(
            (result) => {
              setSuccess(true)
            },
            (error) => {
              console.error(error);
              setError(true);
            }
          );
      };

    return(
        <motion.div 
            className="font-bold text-white" 
            ref={ref}
            variants={variants}
            initial="initial"
            whileInView="animate"> 

            <div className="h-screen flex flex-row gap-48 justify-center ">
                <div className="flex flex-col justify-center ">
                    <h1 className="text-6xl mb-10 text-purple-500">Let&#39;s Work <br/>Together</h1>

                    <h2 className="text-2xl">Mail</h2>
                    <h2>onlyfortok@gmail.com</h2>

                    <h2 className="text-2xl mt-5">Address</h2>
                    <h2>Located in Greater Vancouver Area, BC</h2>

                    <h2 className="text-2xl mt-5">Phone</h2>
                    <h2>+1 604 440 9543</h2>
                </div>
                
                <div className="flex flex-col gap-y-5 align-middle justify-center">
                <motion.form 
                    className="flex flex-col justify-center gap-y-4 ms-5 text-black mt-10" 
                    onSubmit={sendEmail} 
                    ref={formRef}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                        <input type="text" required placeholder="Name" name="name"/>
                        <input type="email" required placeholder="Email" name="email"/>
                        <textarea rows={8} placeholder="Message" name="message"/>
                    <button className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
                </motion.form>
                <h1 className="text-white">{error && "Error"}
                    {success && "Success"}</h1>
                 </div>
            </div>
            
        
        </motion.div>
    );
}