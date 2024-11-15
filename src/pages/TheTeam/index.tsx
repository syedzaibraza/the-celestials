import { TeamData } from "../../components/data";
import TeamCard from "../../components/TeamCard";

const TheTeam = () => {
  return (
    <div className="w-full overflow-auto">
      <div className="flex w-full lg:w-[80%] xl:w-[75%] flex-col gap-8 p-8 lg:px-[120px] h-auto">
        <div className="flex flex-col gap-3 items-start">
          <div className="text-white text-3xl lg:text-5xl font-bold">
            THE TEAM
          </div>
          <div className="text-white md:text-xl text-sm">
            The concept art created for Splash by Jong Sacil; inspired us to
            create a collection that celebrates our unique collaboration but
            also, to take a huge step into the future of fashion
            <br />
            <br />
            This collection will highlight concepts of sustainability & fashion.
            Whilst having a mask of a ‘puma’ - it will signify our collaboratve
            efforts to then develop as characters for the Metaverse
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-7 ">
          {TeamData.map((item) => (
            <TeamCard
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
