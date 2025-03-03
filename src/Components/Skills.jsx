import figma from "../assets/figma.png";
import react from "../assets/react.png";
import c from "../assets/c.png";
import node from "../assets/node.png";
import redux from "../assets/redux.png";
import js from "../assets/js.png";
import css from "../assets/css.png";
import ad from "../assets/ad.png";
import next from "../assets/next.png";
import g from "../assets/g.png";
import ai from "../assets/ai.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import logo from "../assets/navLogo.svg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="bg-[#11071f] py-20 flex flex-col items-center relative">
      <h1 className="text-center text-2xl">
        I'm currently looking to join a{" "}
        <span className="text-[#7b47c4]">cross-functional</span> team
      </h1>
      <p className="text-center text-base">
        that values improving people's lives through accessible design
      </p>
      <div className="flex justify-center gap-4 mt-6 items-center">
        <img className="w-7" src={figma} alt="figma" />
        <img className="w-7" src={react} alt="react" />
        <img className="w-7" src={c} alt="c" />
        <img className="w-7" src={node} alt="node" />
        <img className="w-7" src={redux} alt="redux" />
        <img className="w-7" src={js} alt="js" />
        <img className="w-7" src={css} alt="css" />
      </div>
      <div className="flex justify-center gap-4 mt-3 pb-44 items-center">
        <img className="w-7" src={ad} alt="ad" />
        <img className="w-7" src={next} alt="next" />
        <img className="w-7" src={g} alt="g" />
        <img className="w-7" src={ai} alt="ai" />
        <img className="w-7" src={express} alt="express" />
        <img className="w-7" src={mongo} alt="mongo" />
      </div>
      <div className="relative flex justify-center items-center w-[150px] h-[150px] rounded-full bg-[radial-gradient(circle,rgb(97,49,152)_10%,rgba(40,17,77,0)_65%)] z-0">
        <img
          src={logo}
          alt="logo"
          className="w-24 h-24 rotate-90 p-2 rounded-full shadow-lg"
        />
      </div>
      <div className="absolute top-3/5 left-1/4 w-[50%] h-[200px] border border-[#502877] rounded-[50%] skew-y-[0deg]"></div>
      <div className="absolute top-3/5 left-[22%] w-[55%] h-[220px] border border-[#502877] rounded-[50%] skew-y-[0deg]"></div>
      <div className="absolute top-3/5 left-[20%] w-[60%] h-[240px] border border-[#502877] rounded-[50%] skew-y-[0deg]"></div>
    </div>
  );
};

export default Skills;
