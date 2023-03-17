import { FC, useState } from "react";
import Image from "next/image";
import { objectFit } from "@/types/types";

interface ImageSliderProps {
  className?: string;
  slides: Array<{
    src: string;
    alt: string;
    objectFit: objectFit;
  }>;
}

const ImageSlider: FC<ImageSliderProps> = ({ className, slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex) => {
      const isFirstSlide = currentIndex === 0;
      return isFirstSlide ? slides.length - 1 : currentIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex) => {
      const isLastSlide = currentIndex === slides.length - 1;
      return isLastSlide ? 0 : currentIndex + 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute top-1/2 translate-x-1/2 left-[-9px] w-4 h-4 text-[1.5rem] z-10 hover:cursor-pointer"
        onClick={goToPrevious}
      >
        &#x25C4;
      </div>
      <Image
        src={slides[currentIndex].src}
        alt={slides[currentIndex].alt}
        fill
        style={{ objectFit: slides[currentIndex].objectFit }}
      />
      <div
        className="absolute top-1/2 translate-x-1/2 right-[10px] w-4 h-4 text-[1.5rem] z-10 hover:cursor-pointer"
        onClick={goToNext}
      >
        &#x25BA;
      </div>
      <div className="absolute w-full -bottom-4 flex flex-row justify-center items-center gap-2 mt-1">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full bg-primary-sand hover:bg-secondary-sand hover:cursor-pointer ${
              currentIndex === index ? "opacity-30" : null
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
