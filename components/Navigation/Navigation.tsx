import { FC } from "react";
import navigations from "@/utils/navigations";
import Link from "next/link";

const Navigation: FC = () => {
  const links = navigations.map(({ href, title }) => (
    <Link
      href={href}
      className="text-white font-playfair after:content-[',_'] font-semibold hover:text-gray-100 text-lg uppercase"
    >
      {title}
    </Link>
  ));

  return (
    <div className="fixed top-0 w-full min-h-min flex flex-row justify-center z-50">
      <div className="flex flex-row flex-wrap justify-end items-center gap-2 h-full w-11/12 max-w-screen-xl bg-opacity-10 backdrop-filter backdrop-blur-sm border border-white border-t-0 border-x-0 border-opacity-50">
        {links}
      </div>
    </div>
  );
};

export default Navigation;
