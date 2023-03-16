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
      className={`bg-[#b4acc1] hover:bg-[#878291] py-[10px] px-[12px] rounded-l-full rounded-r-full text-gray-50 font-roboto font-bold tracking-wide text-sm flex flex-row justify-center items-center gap-[6px] ${
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
