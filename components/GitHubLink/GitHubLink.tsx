import { FC } from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

interface GitHubLinkProps {
  link: string;
  text: string;
  className?: string;
}

const GitHubLink: FC<GitHubLinkProps> = ({ link, text, className }) => {
  return (
    <Link
      href={link}
      className={`bg-primary-sand hover:bg-secondary-sand h-[2.75rem] w-full md:max-w-[13rem] rounded-l-full rounded-r-full text-white font-roboto font-bold tracking-wide text-sm flex flex-row justify-center items-center gap-[.5rem] ${
        className ? className : null
      }`}
      target="_blank"
    >
      <AiFillGithub className="w-[1.5rem] h-[1.5rem]" />
      {text}
    </Link>
  );
};

export default GitHubLink;
