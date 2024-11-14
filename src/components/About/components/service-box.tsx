import React from "react";

interface ServiceProps {
    photo: string;
    title: string;
    description: string;
}
const ServiceBox:React.FC<ServiceProps> = ({photo, title, description}) => {
  return (
    <>
      <div className="flex gap-4 items-center flex-grow w-full">
        <span className="md:h-[90px] md:w-[90px] h-[70px] w-[70px] flex justify-center items-center bg-white shadow-xl rounded-full">
          <img className="md:h-10 h-[30px]" src={photo} alt={title} />
        </span>
        <div className="flex-grow w-2/3">
          <h4 className="md:text-3xl text-2xl font-bold text-button">{title}</h4>
          <p className="md:text-xl text-lg text-button">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceBox;
