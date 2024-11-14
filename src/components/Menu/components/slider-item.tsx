import React from "react";

interface SliderProps {
  photo: string;
  title: string;
  des: string;
}
const SliderItem: React.FC<SliderProps> = ({ photo, title, des }) => {
  return (
    <>
      <div className="flex flex-col text-center gap-3 bg-white justify-center items-center p-5 xl:w-[285px] h-[300px] mx-3 pb-10 ">
        <img src={photo} alt={title} className="h-[120px] w-auto" />
        <div className="w-16 h-1 bg-blood-red" />
        <h4 className="text-2xl">{title}</h4>
        <p>{des}</p>
      </div>
    </>
  );
};

export default SliderItem;
