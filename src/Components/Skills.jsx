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
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";
import arrow3 from "../assets/arrow3.png";
import arrow4 from "../assets/arrow4.png";
import arrow5 from "../assets/arrow5.png";
import arrow6 from "../assets/arrow6.png";
import logo from "../assets/skillsLogo.png";

const Skills = () => {
  return (
    <div className="bg-[#11071f] py-20 flex flex-col items-center relative">
      <h1 className="text-2xl text-center">
        I'm currently looking to join a{" "}
        <span className="text-[#A362FF]">cross-functional</span> team
      </h1>
      <h5 className="text-lg text-center">
        that values improving people's lives through accessible design
      </h5>
      <div className="flex gap-4 items-center justify-center mt-10">
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={figma} alt="figma" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={react} alt="react" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={c} alt="c" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={node} alt="node" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={redux} alt="redux" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={js} alt="js" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={css} alt="css" />
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center mt-5">
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={ad} alt="adobe" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={next} alt="nextjs" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={g} alt="g" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={ai} alt="ai" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={express} alt="express" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={mongo} alt="mongo" />
        </div>
      </div>
      <div className="flex justify-center w-[350px] mx-auto">
        <div>
          <img src={arrow1} alt="arrow1" />
        </div>
        <div className="pr-10">
          <img src={arrow2} alt="arrow2" />
        </div>
        <div className="pr-10">
          <img src={arrow3} alt="arrow3" />
        </div>
        <div className="pr-10">
          <img src={arrow4} alt="arrow4" />
        </div>
        <div>
          <img src={arrow5} alt="arrow5" />
        </div>
        <div>
          <img src={arrow6} alt="arrow6" />
        </div>
      </div>
      <div className="relative size-[180px] flex justify-center items-center rounded-full">
        <div className="relative bottom-10 flex justify-center items-center w-[150px] h-[150px] rounded-full bg-[radial-gradient(circle,rgb(97,49,152)_10%,rgba(40,17,77,0)_65%)] z-0">
          <img
            src={logo}
            alt="logo"
            className="w-24 h-24 p-2 rounded-full shadow-lg"
          />
        </div>
        <div className="w-[295px] h-[164px] absolute -top-8 bg-transparent border-b border-[#65339A] rounded-[50%]" />
        <div className="w-[265px] h-[185px] absolute -top-8 bg-transparent border-b border-[#65339A] rounded-[70%]" />
      </div>
      <div className="absolute top-3/5 left-1/4 w-[50%] h-[200px] border border-[#502877] rounded-[50%]"></div>
      <div className="absolute top-3/5 left-[22%] w-[55%] h-[220px] border border-[#502877] rounded-[50%]"></div>
      <div className="absolute top-3/5 left-[20%] w-[60%] h-[240px] border border-[#502877] rounded-[50%]"></div>
    </div>
  );
};

export default Skills;
