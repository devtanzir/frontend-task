import React from "react";

interface ServiceProps {
    photo: string;
    title: string;
    description: string;
}
const ServiceBox:React.FC<ServiceProps> = ({photo, title, description}) => {
  return (
    <>
      <div className="flex gap-5 items-center">
        <span className="p-4 bg-white shadow-2xl rounded-full">
          <img src={photo} alt={title} />
        </span>
        <div>
          <h4 className="text-2xl">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceBox;
