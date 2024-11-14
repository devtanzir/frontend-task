import { Button } from "@/components/ui/button";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

interface TabProps {
  title: string;
  description: string;
  button?: boolean;
  buttonText?: string;
  phone?: boolean;
  phoneNumber?: string;
}
const TabContent: React.FC<TabProps> = ({
  title,
  description,
  button = false,
  buttonText,
  phone = false,
  phoneNumber,
}) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h2 className="lg:text-[62px] font-bold text-[40px] leading-[48px] lg:leading-[62px] text-dark">{title}</h2>
        <p className="text-para-color">{description}</p>

        <div className="flex gap-7 items-center">
          {button && <Button>{buttonText}</Button>}

          {phone && (
            <div className="flex items-center gap-2 text-blood-red">
              <FiPhoneCall />
              <span className="text-button sm:text-lg text-sm font-bold">{phoneNumber}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TabContent;
