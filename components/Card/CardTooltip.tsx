import { FC } from "react";
import { useCardContext } from "@/components/Card/CardContext";

interface CardTooltipProps {
  className?: string;
}

const CardTooltip: FC<CardTooltipProps> = ({ className }) => {
  const { info } = useCardContext();
  return <div className={`absolute ${className}`}>{info}</div>;
};

export default CardTooltip;
