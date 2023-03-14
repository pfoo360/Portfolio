import { FC, ReactNode } from "react";
import CardContext from "@/components/Card/CardContext";
import CardImage from "@/components/Card/CardImage";
import CardTooltip from "@/components/Card/CardTooltip";

interface CardProps {
  value: any;
  className?: string;
  image?: ReactNode;
  info?: ReactNode;
}

const Card: FC<CardProps> & {
  Image: FC<{
    className?: string;
  }>;
  Tooltip: FC<{
    className?: string;
  }>;
} = ({ value, image, info, className }) => {
  if (className)
    return (
      <CardContext.Provider value={value}>
        <div className={className}>
          {image}
          {info}
        </div>
      </CardContext.Provider>
    );

  return (
    <CardContext.Provider value={value}>
      <div>
        {image}
        {info}
      </div>
    </CardContext.Provider>
  );
};

Card.Image = CardImage;
Card.Tooltip = CardTooltip;

export default Card;
