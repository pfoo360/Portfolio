import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/Card/Card";
import skills from "@/utils/skills";
import works from "@/utils/works";
import MoreInfo from "@/components/MoreInfo/MoreInfo";
import ContactForm from "@/components/ContactForm/ContactForm";
import Link from "next/link";
import GitHubLink from "@/components/GitHubLink/GitHubLink";
import MiscLink from "@/components/MiscLink/MiscLink";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import About from "@/components/About/About";
import Blobs from "@/components/Blobs/Blobs";
import Navigation from "@/components/Navigation/Navigation";
import { AiFillLinkedin } from "react-icons/ai";
import {
  IoPersonSharp,
  IoLocationSharp,
  IoMailSharp,
  IoCodeSlashSharp,
} from "react-icons/io5";
import bg from "@/public/eberhard.jpg";

//TODO: resume dl btn in about me section and contact section

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Phillip F.</title>
        <meta name="description" content="Phillip F. Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navigation />
      <SplashScreen />
      <About />

      <div
        id="skills"
        className="w-full min-h-min flex flex-row justify-center items-start"
      >
        <div className="flex flex-col justify-start items-start h-full p-5 w-11/12 max-w-screen-xl">
          <h1 className="font-roboto text-primary-purple text-[4rem] leading-none mt-5 tracking-tight font-bold uppercase">
            SKILLS
          </h1>
          <p className="font-roboto-mono text-white opacity-30 text-xs mb-5">
            A (non-exhaustive) list of technologies I work with.
          </p>
          <div className="w-full max-w-screen-xl flex flex-row justify-center items-start">
            <div className="w-11/12 grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-6 justify-center place-items-center place-content-center">
              {skills.map((skill) => (
                <Card
                  key={skill.info}
                  value={skill}
                  image={
                    <Card.Image className="fill-current text-gray-900 w-16" />
                  }
                  info={
                    <Card.Tooltip className="text-white w-auto p-2 m-2 min-w-max rounded-sm shadow-md text-xs font-roboto-mono transition-all duration-100 scale-0 origin-top group-hover:scale-100 backdrop-filter backdrop-blur-sm bg-opacity-10" />
                  }
                  className="bg-primary-sand group w-20 h-20 p-1 flex flex-col justify-center items-center opacity-50 hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        id="work"
        className="w-full min-h-min flex flex-row justify-center items-start"
      >
        <div className="flex flex-col justify-start items-start h-full p-5 w-11/12 max-w-screen-xl">
          <h1 className="font-roboto text-primary-purple text-[4rem] leading-[6rem] tracking-tight font-bold uppercase">
            WORK
          </h1>
          <div className="w-full max-w-screen-xl flex flex-row justify-center items-start">
            <div className="w-full grid grid-cols-1 justify-center place-items-center place-content-center gap-3">
              {works.map((work) => (
                <Card
                  key={work.name}
                  value={work}
                  className="relative w-full h-[15rem] md:h-[25rem] bg-primary-purple flex flex-col justify-center items-center"
                  image={<Card.Image />}
                  info={<MoreInfo value={work} />}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="w-full min-h-min flex flex-row justify-center items-start"
      >
        <div className="flex flex-col justify-start items-start h-full p-5 w-11/12 max-w-screen-xl">
          <h1 className="font-roboto text-primary-purple text-[4rem] leading-[6rem] tracking-tight font-bold uppercase">
            CONTACT
          </h1>
          <div className="mb-10 w-full flex flex-col gap-4 sm:flex-row">
            <GitHubLink
              link="https://github.com/pfoo360"
              text="GITHUB"
              className="md:max-w-[8rem]"
            />
            <MiscLink
              link="https://www.linkedin.com/in/phillip-foo-61a836227/"
              text="LINKEDIN"
              icon={<AiFillLinkedin className="w-[1.5rem] h-[1.5rem]" />}
            />
          </div>

          <div className="flex flex-row justify-center w-full">
            <div className="w-full max-w-[40rem] ">
              <ContactForm />
            </div>
            <div className="hidden lg:inline-block absolute w-full max-w-[63rem] h-full max-h-[47.25rem] bottom-screen z-[-999]">
              <Image src={`${bg.src}`} alt="bg" fill className="opacity-90" />
              <div className="absolute -top-1 z-10 bg-gradient-to-b from-primary-black to-transparent h-[10vh] w-full" />
              <div className="absolute bottom-0 z-10 bg-gradient-to-t from-primary-black to-transparent h-[15vh] w-full" />
              <div className="absolute z-10 -right-1 bg-gradient-to-l from-primary-black to-transparent h-full w-6/12" />
              <div className="absolute z-10 -left-1 bg-gradient-to-r from-primary-black to-transparent h-full w-6/12" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
