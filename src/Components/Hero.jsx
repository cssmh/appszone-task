import hero from "../assets/hero.png";
import bottomArrow from "../assets/bottom_arrow.png";

const Hero = () => {
  return (
    <section className="relative flex h-screen text-white bg-[#10051e]">
      <div className="flex justify-center items-center w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(66,30,113,1)_26%,rgba(40,16,76,0)_65%)] transform -ml-24 mt-24 z-0">
        <div className="flex justify-center items-center w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(181,170,193,1)_10%,rgba(40,17,77,0)_65%)] z-0">
          <img
            src={hero}
            alt="Hero"
            width={150}
            height={150}
            className="-translate-y-2"
          />
        </div>
      </div>
      <img
        src={bottomArrow}
        alt="Hero"
        className="absolute top-[88px] left-28"
      />
      <div className="mt-[105px] -ml-14">
        <h3 className="text-xl -ml-3">
          Hello! I am{" "}
          <span className="text-[#7127BA] font-semibold">Ariful Islam</span>
        </h3>

        <div className="mt-[68px]">
          <h3 className="text-xl">A Designer who</h3>
          <div>
            <h1 className="text-6xl mt-2">
              Judges a book <br /> by its{" "}
              <span className="text-purple-400 mr-0.5">cover</span>
              <span>...</span>
            </h1>
            <p className="text-xs text-gray-300 mt-3">
              Because if the cover does not impress you, what else can?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
