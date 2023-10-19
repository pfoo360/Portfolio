import {
  IoPersonSharp,
  IoLocationSharp,
  IoMailSharp,
  IoCodeSlashSharp,
} from "react-icons/io5";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-min flex flex-row justify-center items-start"
    >
      <div className="flex flex-col justify-start items-start h-full p-5 w-11/12 max-w-screen-xl">
        <h1 className="font-roboto text-primary-purple text-[4rem] leading-[6rem] tracking-tight font-bold uppercase">
          ABOUT
        </h1>
        <p className="font-playfair text-white text-[1.1rem] leading-[1.6rem] text-justify uppercase">
          HELLO, MY NAME IS PHILLIP.
        </p>
        <p className="font-playfair text-white text-[1.1rem] leading-[1.6rem] text-justify uppercase">
          I AM A SOFTWARE ENGINEER BASED IN NEW YORK CITY. I GRADUATED FROM
          HUNTER COLLEGE WITH A BACHELOR&apos;S DEGREE IN COMPUTER SCIENCE. FROM
          AN EARLY AGE I HAVE HAD AN INTEREST FOR ALL THINGS TECH, WHICH HAS
          NATURALLY GUIDED ME INTO THE WORLD OF PROGRAMMING.
        </p>
        <p className="font-playfair text-white text-[1.1rem] leading-[1.6rem] text-justify uppercase">
          WHEN I AM NOT CODING I AM EXPLORING MY OTHER PASSIONS, SUCH AS DIGITAL
          DESIGN & MACHINE LEARNING.
        </p>
        <div className="mt-5 w-full max-w-screen-lg h-auto flex flex-row items-center justify-start">
          <div className="w-11/12 grid grid-cols-2 gap-y-4 gap-x-2">
            <p className="text-white font-roboto-mono tracking-wide flex flex-row items-center justify-start gap-1 uppercase">
              <IoPersonSharp className="h-6 w-6" />
              PHILLIP FOO
            </p>
            <p className="text-white font-roboto-mono tracking-wide flex flex-row items-center justify-start gap-1 uppercase">
              <IoLocationSharp className="h-6 w-6" />
              NEW YORK
            </p>
            <Link
              href="#work"
              className="text-white font-roboto-mono tracking-wide flex flex-row items-center justify-start gap-1 uppercase hover:underline hover:decoration-dotted"
            >
              <IoCodeSlashSharp className="h-6 w-6" />
              WORK
            </Link>
            <Link
              href="#contact"
              className="text-white font-roboto-mono tracking-wide flex flex-row items-center justify-start gap-1 uppercase hover:underline hover:decoration-dotted"
            >
              <IoMailSharp className="h-6 w-6" />
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
