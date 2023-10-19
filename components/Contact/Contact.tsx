import ContactForm from "@/components/ContactForm/ContactForm";
import GitHubLink from "@/components/GitHubLink/GitHubLink";
import MiscLink from "@/components/MiscLink/MiscLink";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import bg from "@/public/eberhard.jpg";

const Contact = () => {
  return (
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
  );
};

export default Contact;
