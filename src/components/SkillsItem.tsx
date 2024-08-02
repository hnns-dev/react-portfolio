import React, { ReactNode } from "react";

type SkillsItemProps = {
  logo: ReactNode;
  title: string;
};

function SkillsItem({ logo, title }: SkillsItemProps) {
  return (
    <div className="flex flex-col items-center gap-4 hover:scale-110 transition">
      <div className="text-5xl md:text-6xl lg:text-7xl text-amber-500">
        {logo}
      </div>
      <div className="border border-amber-300 rounded-full px-2 py-1 bg-amber-300/20 shadow-md">
        <p className="text-amber-300 text-xs">{title}</p>
      </div>
    </div>
  );
}
export default SkillsItem;
