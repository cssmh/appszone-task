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
const Skills = () => {
  return (
    <div className="bg-[#11071f] py-20">
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
      <div className="flex justify-center gap-4 mt-3 items-center">
        <img className="w-7" src={ad} alt="ad" />
        <img className="w-7" src={next} alt="next" />
        <img className="w-7" src={g} alt="g" />
        <img className="w-7" src={ai} alt="ai" />
        <img className="w-7" src={express} alt="express" />
        <img className="w-7" src={mongo} alt="mongo" />
      </div>
      <div>
        <img src={logo} alt="logo" className="rotate-90" />
      </div>
    </div>
  );
};

export default Skills;
