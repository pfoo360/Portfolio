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
      className={`bg-[#d3c3c0] hover:bg-[#c7b4b0] py-[10px] px-[12px] rounded-l-full rounded-r-full text-gray-50 font-roboto font-bold tracking-wide text-sm flex flex-row justify-center items-center gap-[6px] ${
        className ? className : null
      }`}
      target="_blank"
    >
      <AiFillGithub className="w-[21px] h-[21px]" />
      {text}
    </Link>
  );
};

export default GitHubLink;
