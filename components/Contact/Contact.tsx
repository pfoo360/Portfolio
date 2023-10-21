import ContactForm from "@/components/ContactForm/ContactForm";
import GitHubLink from "@/components/GitHubLink/GitHubLink";
import MiscLink from "@/components/MiscLink/MiscLink";
import Stalactites from "@/components/Stalactites/Stalactites";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-min flex flex-row justify-center items-start bg-[#252028] relative"
    >
      <Stalactites />
      <div className="flex flex-col justify-start items-start h-full p-5 w-11/12 max-w-screen-xl z-[10]">
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

        <div className="flex flex-row justify-center w-full h-full">
          <div className="w-full max-w-[40rem] h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
