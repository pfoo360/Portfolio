import { useState, FC } from "react";
import Modal from "@/components/Modal/Modal";
import Svg from "@/components/Svg/Svg";
import ExitIcon from "@/components/ExitIcon/ExitIcon";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import GitHubLink from "@/components/GitHubLink/GitHubLink";
import MiscLink from "@/components/MiscLink/MiscLink";
import Link from "next/link";
import { objectFit } from "@/types/types";
import { HiOutlineDesktopComputer } from "react-icons/hi";

interface MoreInfoProps {
  value: {
    name: string;
    image: {
      src: string;
      objectFit?: objectFit;
    };
    description: string;
    technologies: Array<{ image: any }>;
    slides: Array<{
      src: string;
      alt: string;
      objectFit: objectFit;
    }>;
    links: { github: string; demo?: string };
  };
}

const MoreInfo: FC<MoreInfoProps> = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="absolute w-full h-full group hover:backdrop-filter hover:backdrop-blur-sm flex flex-col justify-center items-center">
        <h1
          className={`hidden group-hover:flex font-roboto text-[2rem] leading-[3rem] font-bold my-4 text-primary-sand uppercase`}
        >
          {value.name}
        </h1>
        <div
          className="hidden group-hover:flex text-secondary-purple hover:text-[#948f9f] hover:cursor-pointer group-hover:underline group-hover:decoration-dotted group-hover:underline-offset-2 font-roboto-mono text-sm"
          onClick={handleOpen}
        >
          LEARN MORE
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleClose} className="backdrop-blur-sm">
        <>
          <div className="min-w-[20rem] max-h-[44rem] sm:min-w-[37.5rem] md:max-w-[55rem] md:max-h-[44rem] overflow-y-auto bg-white bg-opacity-[0.8] text-primary-black p-2 font-playfair font-normal text-[1rem] leading-[1.5rem] text-justify">
            <div className="flex flex-row items-center justify-end">
              <div className="w-auto h-auto" onClick={handleClose}>
                <ExitIcon />
              </div>
            </div>
            <h1 className="text-[2rem] leading-[3rem] text-primary-purple font-roboto font-bold">
              {value.name}
            </h1>
            <div className="w-full h-full flex flex-row justify-center items-center mb-5">
              <ImageSlider
                className="bg-primary-purple w-full h-[10rem] sm:h-[18rem] md:h-[22rem] mt-2 mb-5 text-primary-sand hover:text-secondary-sand"
                slides={value.slides}
              />
            </div>
            <div dangerouslySetInnerHTML={{ __html: value.description }} />
            <p className="text-primary-black font-playfair font-normal text-[1rem] leading-[1.5rem] my-[.25rem] text-justify opacity-50">
              Visit the GitHub link below for more information, images and a
              detailed walkthrough!
            </p>
            <h1 className="text-[1rem] leading-none text-primary-purple font-roboto font-bold mt-3 mb-2">
              Technologies
            </h1>
            <div className="w-full flex flex-row h-auto flex-wrap gap-x-2 gap-y-2">
              {value.technologies.map((technology, index) => (
                <Svg
                  key={index}
                  image={technology.image}
                  className="fill-current w-8 h-8"
                />
              ))}
            </div>
            <div className="h-[.125rem] bg-primary-black mt-3 opacity-30 mt-4 mb-5"></div>
            <div className="flex flex-row flex-wrap gap-2 justify-between items-center w-full mt-1 mb-5">
              {value.links.demo ? (
                <MiscLink
                  icon={
                    <HiOutlineDesktopComputer className="w-[1.5rem] h-[1.5rem]" />
                  }
                  link={value.links.demo}
                  text="VIEW SITE"
                />
              ) : null}
              <GitHubLink link={value.links.github} text="VIEW SOURCE CODE" />
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};

export default MoreInfo;

// hover:border hover:border-white hover:border-opacity-50
