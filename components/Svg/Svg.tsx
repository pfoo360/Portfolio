import { FC } from "react";

interface SvgProps {
  className?: string;
  image: any;
}
const Svg: FC<SvgProps> = ({ className, image: Image }) => {
  if (className) return <Image className={className} />;

  return <Image />;
};

export default Svg;
