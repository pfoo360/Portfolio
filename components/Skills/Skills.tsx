import Card from "@/components/Card/Card";
import skills from "@/utils/skills";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-min flex flex-row justify-center items-start"
    >
      <div className="flex flex-col justify-start items-start h-full p-5 w-11/12 max-w-screen-xl">
        <h1 className="font-roboto text-primary-purple text-[4rem] leading-none mt-5 tracking-tight font-bold uppercase">
          SKILLS
        </h1>
        <p className="font-roboto-mono text-white opacity-30 text-xs mb-5">
          A (non-exhaustive) list of technologies I work with.
        </p>
        <div className="w-full max-w-screen-xl flex flex-row justify-center items-start">
          <div className="w-11/12 grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-6 justify-center place-items-center place-content-center">
            {skills.map((skill) => (
              <Card
                key={skill.info}
                value={skill}
                image={
                  <Card.Image className="fill-current text-gray-900 w-16" />
                }
                info={
                  <Card.Tooltip className="text-white w-auto p-2 m-2 min-w-max rounded-sm shadow-md text-xs font-roboto-mono transition-all duration-100 scale-0 origin-top group-hover:scale-100 backdrop-filter backdrop-blur-sm bg-opacity-10" />
                }
                className="bg-primary-sand group w-20 h-20 p-1 flex flex-col justify-center items-center opacity-50 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
