import React from "react";

interface SectionHeaderProps {
    title: string;
    desc: string;
    className?: string;
}
const SectionHeader:React.FC<SectionHeaderProps> = ({title, desc, className}) => {
    return (
        <>
            <p className="text-blood-red text-sm lg:text-base font-semibold relative before:h-2 before:w-2 before:bg-blood-red before:inline-block before:mr-2 mb-2">{title}</p>
            <h4 className={`lg:text-5xl text-3xl ${className}`}>{desc}</h4>
        </>
    );
};

export default SectionHeader;