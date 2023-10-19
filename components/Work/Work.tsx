import Card from "@/components/Card/Card";
import works from "@/utils/works";
import MoreInfo from "@/components/MoreInfo/MoreInfo";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full min-h-min flex flex-row justify-center items-start"
    >
      <div className="flex flex-col justify-start items-start h-full p-5 w-11/12 max-w-screen-xl">
        <h1 className="font-roboto text-primary-purple text-[4rem] leading-[6rem] tracking-tight font-bold uppercase">
          WORK
        </h1>
        <div className="w-full max-w-screen-xl flex flex-row justify-center items-start">
          <div className="w-full grid grid-cols-1 justify-center place-items-center place-content-center gap-3">
            {works.map((work) => (
              <Card
                key={work.name}
                value={work}
                className="relative w-full h-[15rem] md:h-[25rem] bg-primary-purple flex flex-col justify-center items-center"
                image={<Card.Image />}
                info={<MoreInfo value={work} />}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
