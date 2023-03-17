import { FC } from "react";
const Blobs: FC = () => {
  return (
    <div className="relative w-full max-w-xs">
      <div className="absolute top-0 left-8 w-40 h-40 bg-[#cdb7f0] rounded-full mix-blend-soft-light filter blur-md animate-blob ease-in-out" />
      <div className="absolute top-0 right-8 w-40 h-40 bg-[#ecc5bd] rounded-full mix-blend-soft-light filter blur-md animate-blob ease-in-out animation-delay-2000" />
      <div className="absolute -bottom-48 left-20 w-40 h-40 bg-[#80b6c3] rounded-full mix-blend-soft-light filter blur-md animate-blob ease-in-out animation-delay-4000" />
    </div>
  );
};

export default Blobs;
