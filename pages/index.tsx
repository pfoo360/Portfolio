import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/Card/Card";
import Modal from "@/components/Modal/Modal";
import skills from "@/utils/skills";
import works from "@/utils/works";
import MoreInfo from "@/components/MoreInfo/MoreInfo";
import ContactForm from "@/components/ContactForm/ContactForm";
import Link from "next/link";
import GitHubLink from "@/components/GitHubLink/GitHubLink";
import MiscLink from "@/components/MiscLink/MiscLink";
import { AiFillLinkedin } from "react-icons/ai";
import {
  IoPersonSharp,
  IoLocationSharp,
  IoMailSharp,
  IoCodeSlashSharp,
} from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Phillip F.</title>
        <meta name="description" content="Phillip F. Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed w-screen h-16 flex flex-row justify-center z-50">
        <div className="flex flex-row items-center w-11/12 bg-opacity-10 backdrop-filter backdrop-blur-sm border border-white border-t-0 border-x-0 border-opacity-50">
          <nav className="flex flex-row text-gray-100">
            <p>ABOUT</p>
            <p>SKILLS</p>
            <p>PROJECTS</p>
            <p>CONTACT</p>
          </nav>
        </div>
      </div>
      <div className="bg-[#120f0f] h-screen w-screen px-5 pt-16">
        <h1 className="text-[140px] leading-none text-[#2d2c2c] font-bold font-roboto break-all text-justify">
          HI,
        </h1>
        <h1 className="w-full text-[140px] leading-none text-[#2d2c2c] font-bold font-roboto text-justify">
          I AM
        </h1>
        <h1 className="text-[140px] leading-none text-[#b4acc1] font-bold font-roboto break-all text-justify">
          PHILLIP F.
        </h1>

        <h3 className="font-serif tracking-[11px] text-gray-50 text-sm opacity-30">
          SOFTWARE ENGINEER
        </h3>
        <div className="absolute bottom-0 right-0 text-gray-50 opacity-20 w-full flex flex-row justify-center font-mono ">
          <p>scroll down to learn more</p>
        </div>
      </div>
      <div className="bg-[#120f0f] h-screen w-screen p-5 text-gray-50 font-roboto font-semibold">
        <h1 className="text-[100px] leading-none text-[#b4acc1] font-bold font-roboto">
          ABOUT ME
        </h1>
        <p className="font-serif font-normal text-lg leading-[22px] text-justify pl-4">{`MY NAME IS PHILLIP F.`}</p>
        <p className="font-serif font-normal text-[20px] leading-[28px] text-justify pl-4 pr-2">
          I AM A SOFTWARE ENGINEER BASED IN NEW YORK CITY. I GRADUATED FROM
          HUNTER COLLEGE WITH A BACHELOR&apos;S DEGREE IN COMPUTER SCIENCE. FROM
          AN EARLY AGE I HAVE HAD AN INTEREST FOR ALL THINGS TECH, WHICH HAS
          NATURALLY GUIDED ME INTO THE WORLD OF PROGRAMMING.
        </p>
        <p className="font-serif font-normal  text-[18px] leading-[25px] opacity-50 pl-4 pr-2 text-justify">
          WHEN I AM NOT CODING, I AM EXPLORING MY OTHER PASSIONS, SUCH AS
          DIGITAL DESIGN & ARTIFICAL INTELLIGENCE.
        </p>
        <div className="mt-5 grid grid-cols-2 pl-4 gap-y-2">
          <div className="flex flex-row items-center justify-start">
            <p className="text-gray-50 font-mono font-normal tracking-wide  flex flex-row justify-start gap-2">
              <IoPersonSharp className="h-6 w-6" />
              PHILLIP FOO
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <p className="text-gray-50 font-mono font-normal tracking-wide flex flex-row justify-start gap-2">
              <IoLocationSharp className="h-6 w-6" />
              NEW YORK
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <Link
              href="#myWork"
              className="text-gray-50 font-mono font-normal tracking-wide flex flex-row justify-start gap-2 hover:cursor-pointer hover:underline hover:decoration-dotted"
            >
              <IoCodeSlashSharp className="h-6 w-6" />
              MY PROJECTS
            </Link>
          </div>
          <div className="flex flex-row items-center justify-start">
            <Link
              href="#contactMe"
              className="text-gray-50 font-mono font-normal tracking-wide flex flex-row justify-start gap-2 hover:cursor-pointer hover:underline hover:decoration-dotted"
            >
              <IoMailSharp className="h-6 w-6" />
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#120f0f] h-screen w-screen p-5">
        <h1 className="text-[100px] leading-none text-[#b4acc1] font-bold font-roboto pt-16">
          MY SKILLS
        </h1>
        <p className="text-gray-50 font-mono text-xs opacity-30 mb-3">
          A (non-exhaustive) list of technologies I work with & will bring to
          projects!
        </p>
        <div className="container grid grid-cols-4 justify-center place-items-center place-content-center gap-3">
          {skills.map((skill) => (
            <Card
              key={skill.info}
              value={skill}
              className="bg-[#d3c3c0] group w-20 h-20 p-1 flex flex-col justify-center items-center opacity-60 hover:opacity-100"
              image={<Card.Image className="fill-current text-gray-900 w-16" />}
              info={
                <Card.Tooltip className="text-gray-50 w-auto p-2 m-2 min-w-max rounded-md shadow-md bg-[#b4acc1] text-xs font-mono transition-all duration-100 scale-0 origin-top group-hover:scale-100" />
              }
            />
          ))}
        </div>

        <p className="text-gray-50 font-mono text-xs opacity-30 mt-1">
          If there is a technical skill that is needed, and is not listed above,
          I am always interested in learning new languages, frameworks, and
          concepts!
        </p>
      </div>
      <div className="bg-[#120f0f] h-auto w-screen p-5">
        <h1
          id="myWork"
          className="text-[100px] leading-none text-[#b4acc1] font-bold font-roboto pt-16"
        >
          MY WORK
        </h1>
        <div className="container grid grid-cols-1 gap-4 justify-center place-items-center place-content-center">
          {works.map((work) => (
            <Card
              key={work.name}
              value={work}
              className="relative bg-[#b4acc1] flex flex-col justify-center items-center"
              image={<Card.Image className={`w-[340px] h-[160px]`} />}
              info={<MoreInfo value={work} />}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#120f0f] h-auto w-screen p-5">
        <h1
          id="contactMe"
          className="text-7xl leading-none text-[#b4acc1] font-bold font-roboto pt-16"
        >
          CONTACT ME
        </h1>
        <div className="flex flex-row justify-between items-center my-5">
          <GitHubLink
            link="https://github.com/pfoo360"
            text="GITHUB"
            className="w-5/12"
          />
          <MiscLink
            link="https://www.linkedin.com/in/phillip-foo-61a836227/"
            text="LINKEDIN"
            icon={<AiFillLinkedin className="w-[21px] h-[21px]" />}
            className="w-5/12"
          />
        </div>
        <ContactForm />
      </div>
    </>
  );
}

//todo:dl resume btn in abt me, contact frm, resume btn in contact me,icon, footer, highlight color, scrollbar, blobs, parallax,header mobile v tablet v desktop,skills
//#e0e2eb
//#dddfeb
//#bca49c
//#bfb1ac
//#c7b4b0
//#f5eee6

//#723ace
//#b4acc1
//#d3c3c0

//https://www.linkedin.com/in/phillip-foo-61a836227/
