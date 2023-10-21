import StarsCanvas from "@/components/Stars/Stars";
import Mountain from "@/components/Mountain/Mountain";

const SplashScreen = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen flex flex-row justify-center items-start bg-[#212028] relative"
    >
      <StarsCanvas />
      <Mountain />
      <div className="flex flex-col justify-center items-center h-full px-5 py-32 w-11/12 max-w-screen-xl z-[10]">
        <h1 className="font-roboto text-primary-purple text-[8.5rem] leading-none tracking-tight font-bold break-all text-justify uppercase sm:hidden">
          PHIL
        </h1>
        <h1 className="font-roboto text-primary-purple text-[9.5rem] leading-none tracking-tight font-bold break-all text-justify uppercase hidden sm:block">
          PHILLIP
        </h1>
        <h1 className="font-roboto text-primary-purple text-[7.5rem] leading-none tracking-tight font-bold break-all text-justify uppercase sm:text-[11rem]">
          FOO
        </h1>
        <h3 className="font-playfair text-white opacity-50 text-[1rem] leading-[1.5rem] tracking-[.1rem]">
          SOFTWARE ENGINEER
        </h3>
      </div>
    </div>
  );
};

export default SplashScreen;
