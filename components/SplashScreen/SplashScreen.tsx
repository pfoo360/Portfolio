import StarsCanvas from "@/components/Stars/Stars";

const SplashScreen = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen flex flex-row justify-center items-start bg-[#212028]"
    >
      <StarsCanvas />
      <div className="flex flex-col justify-center items-center h-full px-5 py-40 w-11/12 max-w-screen-xl z-[10]">
        <h1 className="font-roboto text-primary-purple text-[8.5rem] leading-none tracking-tight font-bold break-all text-justify uppercase">
          PHILLIP FOO
        </h1>
        <h3 className="font-playfair text-white opacity-50 text-[1rem] leading-[1.5rem] tracking-[.1rem]">
          SOFTWARE ENGINEER
        </h3>
      </div>
    </div>
  );
};

export default SplashScreen;
