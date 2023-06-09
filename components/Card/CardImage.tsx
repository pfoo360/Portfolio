import { FC } from "react";
import { useCardContext } from "@/components/Card/CardContext";
import Svg from "@/components/Svg/Svg";
import Image from "next/image";

interface CardImageProps {
  className?: string;
}

const CardImage: FC<CardImageProps> = ({ className }) => {
  const { image } = useCardContext();

  if (typeof image === "function" && !className) return <Svg image={image} />;
  if (typeof image === "function" && className)
    return <Svg image={image} className={className} />;

  if (typeof image === "object")
    return (
      <Image
        src={image.src}
        alt={image?.alt ? image.alt : "image"}
        fill
        style={{ objectFit: image?.objectFit ? image.objectFit : "cover" }}
      />
    );

  return null;
};

export default CardImage;
