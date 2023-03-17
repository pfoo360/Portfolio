import { FC, ReactElement } from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface MiscLinkProps {
  link: string;
  icon: ReactElement;
  text: string;
  className?: string;
}

const MiscLink: FC<MiscLinkProps> = ({ link, text, className, icon }) => {
  return (
    <Link
      href={link}
      className={`bg-primary-purple hover:bg-secondary-purple h-[2.75rem] w-full md:max-w-[9rem] rounded-l-full rounded-r-full text-white font-roboto font-bold tracking-wide text-sm flex flex-row justify-center items-center gap-[.5rem] ${
        className ? className : null
      }`}
      target="_blank"
    >
      {icon}
      {text}
    </Link>
  );
};

export default MiscLink;
