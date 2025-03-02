import { FaFacebook } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

const About = () => {
  return (
    <div className="py-5">
      <div className="space-y-2">
        <h1 className="text-6xl">I'm a Software Engineer.</h1>
        <h4 className="text-xl flex items-center">
          <span className="mr-2">Currently, I'm a Software Engineer at</span>
          <a
            href="https://appszonebd.com/"
            target="_blank"
            className="flex items-center"
          >
            <TiSocialFacebook className="bg-[#1877f2] mr-1 rounded-full" />
            <span className="text-[#1769d8] font-medium">
              Facebook<span className="text-white">,</span>
            </span>
          </a>
        </h4>
      </div>
      <p className="mt-14 text-xl">
        A self-taught UI/UX designer, functioning in the industry for 3+ years
        now. <br />
        I make meaningful and delightful digital products that create an
        equilibrium <br />
        between user needs and business goals.
      </p>
    </div>
  );
};

export default About;
