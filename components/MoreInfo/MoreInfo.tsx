import { useState, FC } from "react";
import Modal from "@/components/Modal/Modal";
import Svg from "@/components/Svg/Svg";
import ExitIcon from "@/components/ExitIcon/ExitIcon";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Link from "next/link";
import { objectFit } from "@/types/types";

interface MoreInfoProps {
  value: {
    name: string;
    image: {
      src: string;
      height: number;
      width: number;
      objectFit?: objectFit;
    };
    description: string;
    technologies: Array<{ image: any }>;
    slides: Array<{
      src: string;
      alt: string;
      width: number;
      height: number;
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
      <div className="absolute w-full h-full group hover:backdrop-filter hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm hover:border hover:border-white hover:border-opacity-50 flex flex-col justify-center items-center">
        <h1
          className={`hidden group-hover:flex font-roboto text-[32px] leading-[48px] font-bold my-4 text-[#d3c3c0] uppercase`}
        >
          {value.name}
        </h1>
        <div
          className="hidden group-hover:flex text-[#878291] hover:text-[#948f9f] hover:cursor-pointer group-hover:underline group-hover:decoration-dotted group-hover:underline-offset-4 font-mono text-sm font-normal"
          onClick={handleOpen}
        >
          LEARN MORE
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleClose} className="backdrop-blur-sm">
        <>
          <div className="bg-gray-50 w-[370px] h-[800px] bg-opacity-[0.85] text-[#120f0f] p-2 font-serif font-normal text-[16px] leading-[24px] text-justify">
            <div className="flex flex-row items-center justify-end">
              <div className="w-auto h-auto" onClick={handleClose}>
                <ExitIcon />
              </div>
            </div>
            <h1 className="text-[32px] leading-[48px] text-[#b4acc1] font-roboto font-bold">
              {value.name}
            </h1>
            <ImageSlider
              className="bg-[#b4acc1] w-full h-[170px] mt-2 mb-5 text-[#878291] hover:text-[#948f9f]"
              slides={value.slides}
            />
            <div dangerouslySetInnerHTML={{ __html: value.description }} />
            <p className="text-[#120f0f] font-serif font-normal text-[12px] leading-[18px] mt-[4px] text-justify opacity-50">
              Visit the GitHub link below for more information, images and a
              detailed walkthrough!
            </p>
            <h1 className="text-[16px] leading-none text-[#b4acc1] font-roboto font-bold mt-3 mb-2">
              Technologies
            </h1>
            <div className="w-full flex flex-row h-auto flex-wrap gap-x-2 gap-y-2">
              {value.technologies.map((technology) => (
                <Svg
                  image={technology.image}
                  className="fill-current w-8 h-8"
                />
              ))}
            </div>
            <div className="h-[2px] bg-[#120f0f] mt-3 opacity-30"></div>
            <div className="flex flex-row justify-between items-center w-full mt-1">
              {value.links.demo ? (
                <Link
                  href={value.links.demo}
                  className="bg-[#b4acc1] hover:bg-[#878291] py-[10px] px-[12px] rounded-l-full rounded-r-full text-gray-50 font-roboto text-sm"
                  target="_blank"
                >
                  VIEW SITE
                </Link>
              ) : null}
              <Link
                href={value.links.github}
                className="bg-[#d3c3c0] hover:bg-[#c7b4b0] py-[10px] px-[12px] rounded-l-full rounded-r-full text-gray-50 font-roboto text-sm"
                target="_blank"
              >
                VIEW SOURCE CODE
              </Link>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};

export default MoreInfo;
