import React from "react";

interface SectionHeaderProps {
    title: string;
    desc: string;
    className?: string;
}
const SectionHeader:React.FC<SectionHeaderProps> = ({title, desc, className}) => {
    return (
        <div className="flex flex-col lg:gap-[18px] md:gap-3 gap-2 items-start">
            <p className="text-blood-red text-base lg:text-xl font-bold relative before:h-2 before:w-2 before:bg-blood-red before:inline-block before:mr-2 before:mb-[3px]">{title}</p>
            <h4 className={`lg:text-[62px] font-bold text-[40px] leading-[48px] lg:leading-[62px] ${className}`}>{desc}</h4>
        </div>
    );
};

export default SectionHeader;