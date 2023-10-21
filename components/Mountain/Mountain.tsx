import Wave_1 from "@/public/Wave_1.svg";
import Wave_2 from "@/public/Wave_2.svg";
import Layered_Waves_1 from "@/public/Layered_Waves_1.svg";
import Peaks_1 from "@/public/Peaks_1.svg";
import Peaks_2 from "@/public/Peaks_2.svg";

const Mountain = () => {
  const VARIANT: number = 2;

  switch (VARIANT) {
    case 0:
      return (
        <>
          <Wave_1 className="w-full h-auto absolute bottom-0 aspect-[960/540] z-[1]" />
          <Wave_2 className="w-full h-auto absolute bottom-0 aspect-[960/540]" />
        </>
      );

    case 1:
      return (
        <Layered_Waves_1 className="w-full h-auto absolute bottom-0 aspect-[960/540]" />
      );

    case 2:
      return (
        <Peaks_1 className="w-full h-auto absolute bottom-0 aspect-[960/540]" />
      );

    case 3:
      return (
        <Peaks_2 className="w-full h-auto absolute bottom-0 aspect-[960/540]" />
      );

    default:
      return (
        <Peaks_2 className="w-full h-auto absolute bottom-0 aspect-[960/540]" />
      );
  }
};

export default Mountain;
