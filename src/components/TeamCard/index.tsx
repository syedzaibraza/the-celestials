import React from "react";

interface TeamCardProps {
  title: string;
  subtitle: string;
  image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ title, subtitle, image }) => {
  return (
    <div className="group flex flex-col justify-between bg-white/20 hover:bg-white hover:text-black rounded-3xl overflow-hidden transition-all duration-500">
      <div className="px-2 py-3 lg:p-8 transition-all duration-75 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
        <div className="text-base md:text-2xl xl:text-3xl font-bold text-black">
          {title}
        </div>
        <p className="text-[#4f4f4f] text-sm md:text-base xl:text-lg">
          {subtitle}
        </p>
      </div>
      <img
        className="transition-transform duration-500 rounded-b-3xl transform group-hover:scale-105"
        src={image}
        alt={title}
      />
    </div>
  );
};

export default TeamCard;
