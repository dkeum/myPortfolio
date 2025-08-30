"use client";

import react from "@/assets/react.png";
import nextjs from "@/assets/nextjs.png";
import typescript from "@/assets/typescript.png";
import tailwind from "@/assets/tailwind.png";
import mongodb from "@/assets/mongodb.png";
import prisma from "@/assets/prisma.png";
import daisyUI from "@/assets/daisyui.png";
import ecommerce from "@/assets/ecommerce.jpg";
import pokedex from "@/assets/pokedex.jpg";
import express from "@/assets/express.png";
import nodejs from "@/assets/nodejs.png";
import firebase from "@/assets/firebase.png";
import bootstrap from "@/assets/bootstrap.jpeg";
import postgresql from "@/assets/postgresql.png";
import ai_chatbot from "@/assets/ai_chatbot.jpg";
import twitter_clone from "@/assets/twitter_clone.jpg"

import Image from "next/image";

interface PortfolioProps {
  type: string;
}

export default function Portfolio({ type }: PortfolioProps) {
  return (
    <>
      {type === "Portfolio1" && (
        <div className="h-screen text-white font-bold flex flex-row justify-center align-middle">
          <div className="flex flex-row items-center justify-center align-middle gap-5 gap-x-10">
            <div className="flex flex-col w-[300px]">
              <h1 className="font-bold text-3xl text-purple-500">
                Ecommerce Website
              </h1>

              <p className="mt-5">
                {" "}
                <span className="text-purple-500">Description:</span> Welcome to
                my vibrant and user-friendly e-commerce website, where shopping
                becomes an effortless and enjoyable experience. Responsive for
                both Mobile and PC users.{" "}
              </p>
              <p className="mt-5 text-purple-500">
                {" "}
                Made with:
                <div className="flex flex-row gap-x-1 py-5">
                  <Image src={react} alt="react" width={30} height={30} />
                  <Image src={nextjs} alt="nextjs" width={30} height={30} />
                  <Image src={typescript} alt="nextjs" width={30} height={30} />
                  <Image src={tailwind} alt="tailwind" width={30} height={30} />
                  <Image src={mongodb} alt="mongodb" width={30} height={30} />
                  <Image src={prisma} alt="prisma" width={30} height={30} />
                  <Image src={daisyUI} alt="daisyUI" width={30} height={30} />
                </div>
              </p>

              <div className="flex flex-row gap-x-5 justify-center mt-10">
                <a
                  href="https://ecommerce-henna-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/dkeum/Ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                    View Code
                  </button>
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
      )}

      {type === "Portfolio2" && (
        <div className="h-screen text-white font-bold flex flex-row justify-center align-middle">
          <div className="flex flex-row items-center justify-center align-middle gap-5 gap-x-10">
            <div className="flex flex-col w-[300px]">
              <h1 className="font-bold text-3xl text-purple-500">Pokedex</h1>

              <p className="mt-5">
                {" "}
                <span className="text-purple-500">Description:</span> Your
                ultimate destination for all things Pokémon. Whether you are a
                seasoned Pokémon trainer or just beginning your journey, our
                website is the perfect companion for discovering, exploring, and
                researching Pokémon species.{" "}
              </p>
              <p className="mt-5 text-purple-500">
                {" "}
                Made with:
                <div className="flex flex-row gap-x-1 py-5">
                  <Image src={react} alt="react" width={30} height={30} />

                  <Image src={express} alt="express" width={50} height={30} />

                  <Image src={mongodb} alt="monogodb" width={50} height={30} />
                  <Image src={nodejs} alt="nodejs" width={30} height={30} />
                  <Image
                    src={bootstrap}
                    alt="bootstrap"
                    width={30}
                    height={30}
                  />
                  <Image src={firebase} alt="firebase" width={30} height={30} />
                </div>
              </p>

              <div className="flex flex-row gap-x-5 justify-center mt-10">
                <a
                  href="https://pokemon-encyclopedia-v1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/dkeum/PokemonEncyclopedia_v1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                    View Code
                  </button>
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
        </div>
      )}

      {type === "Portfolio3" && (
        <div className="h-screen text-white font-bold flex flex-row justify-center align-middle">
          <div className="flex flex-row items-center justify-center align-middle gap-5 gap-x-10">
            <div className="flex flex-col w-[300px]">
              <h1 className="font-bold text-3xl text-purple-500">
                AI Chat bot
              </h1>

              <p className="mt-5">
                {" "}
                <span className="text-purple-500">Description:</span> Explore
                the intricate realm of psychology with MindBot, your trusted AI
                chatbot. Whether you&apos;re a psychology enthusiast, a student,
                or someone seeking mental health support, MindBot is your 24/7
                resource. Benefit from its comprehensive knowledge, personalized
                guidance, and non-judgmental listening. Discover a library of
                educational content, self-assessment tools, therapy support,
                mindfulness exercises, and engaging conversations. Join the
                MindBot community today and embark on a journey of
                self-discovery and personal growth with the guidance of a
                friendly, knowledgeable companion. Your mind is your most
                powerful asset, and MindBot is here to help you unlock its
                potential.{" "}
              </p>
              <p className="mt-5 text-purple-500">
                {" "}
                Made with:
                <div className="flex flex-row gap-x-1 py-5">
                  <Image src={react} alt="react" width={30} height={30} />
                  <Image src={nextjs} alt="nextjs" width={50} height={30} />
                  <Image src={tailwind} alt="tailwind" width={50} height={30} />
                  <Image
                    src={postgresql}
                    alt="postgresql"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={bootstrap}
                    alt="bootstrap"
                    width={30}
                    height={30}
                  />
                  <Image src={firebase} alt="firebase" width={30} height={30} />
                </div>
              </p>

              <div className="flex flex-row gap-x-5 justify-center mt-10">
                <a
                  href="https://aichatbot-dkeum.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/dkeum/AI_ChatBot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                    View Code
                  </button>
                </a>
              </div>
            </div>

            <Image
              src={ai_chatbot}
              alt="ai chatbot website"
              width={500}
              height={800}
              className="aspect-[4/3]"
            />
          </div>
        </div>
      )}

      {type === "Portfolio4" && (
        <div className="h-screen text-white font-bold flex flex-row justify-center align-middle mt-20">
          <div className="flex flex-row items-center justify-center align-middle gap-5 gap-x-10">
            <div className="flex flex-col w-[300px]">
              <h1 className="font-bold text-3xl text-purple-500">
                Twitter Clone
              </h1>

              <p className="mt-5">
                {" "}
                <span className="text-purple-500">Description:</span> Welcome to
                TweetHub, the premier social media platform that emulates the
                Twitter experience. Share your thoughts, opinions, and updates
                with the world in 280 characters or less. Connect with friends,
                influencers, and trending topics, all in real-time. Explore the
                latest news, engage in conversations, and follow your interests
                with ease. TweetHub is your destination for concise, impactful,
                and real-time communication. Join us and be a part of a global
                conversation, where every tweet is a chance to make your voice
                heard.{" "}
              </p>
              <p className="mt-5 text-purple-500">
                {" "}
                Made with:
                <div className="flex flex-row gap-x-1 py-5">
                  <Image src={react} alt="react" width={30} height={30} />

                  <Image src={nextjs} alt="nextjs" width={50} height={30} />

                  <Image src={postgresql} alt="postgresq" width={50} height={30} />
                  <Image src={tailwind} alt="tailwind" width={30} height={30} />
  
                </div>
              </p>

              <div className="flex flex-row gap-x-5 justify-center mt-10">
                <a
                  href="https://twitter-clone-eta-mauve.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/dkeum/Twitter_Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="shadow-lg shadow-indigo-500/50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                    View Code
                  </button>
                </a>
              </div>
            </div>

            <Image
              src={twitter_clone}
              alt="pokedex website"
              width={500}
              height={800}
            />
          </div>
        </div>
      )}
    </>
  );
}
