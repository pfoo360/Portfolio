import Blobs from "@/components/Blobs/Blobs";

const SplashScreen = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen flex flex-row justify-center items-start"
    >
      <div className="flex flex-col justify-center items-start h-full px-5 py-40 w-11/12 max-w-screen-xl">
        <h1 className="font-roboto text-secondary-black text-[8rem] leading-none tracking-tight font-bold break-word text-justify uppercase">
          HI,
        </h1>
        <h1 className="font-roboto text-secondary-black text-[8rem] leading-none tracking-tight font-bold break-word text-justify uppercase">
          I AM
        </h1>
        <div className="absolute w-full max-w-xs top-96">
          <Blobs />
        </div>
        <h1 className="font-roboto text-primary-purple text-[8.5rem] leading-none tracking-tight font-bold break-all text-justify uppercase">
          PHILLIP F.
        </h1>
        <h3 className="font-playfair text-white opacity-30 text-[1rem] leading-[1.5rem] tracking-[.1rem]">
          SOFTWARE ENGINEER
        </h3>
      </div>
    </div>
  );
};

export default SplashScreen;
