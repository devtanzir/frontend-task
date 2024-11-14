import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLocation, IoMailOutline, IoTimeOutline } from "react-icons/io5";
import Container from "../shared/container";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("../images/footer.jpg")`,
      }}
      className="bg-no-repeat bg-center bg-cover py-24 text-white"
    >
      <Container>
        <h3 className="text-center lg:text-[62px] font-bold text-[40px] mb-10">
          We ready to have you the best dining experiences
        </h3>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 md:mb-20 mb-10">
          <div className="col-span-1 flex flex-col items-center text-center">
            <span className="text-primary text-3xl inline-block md:mb-6 mb-4">
              <IoTimeOutline />
            </span>
            <h6 className="text-2xl font-bold mb-3">Opening hours</h6>
            <p>
              Monday - Sunday <br /> 9:00 AM to 11:30 PM
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-center text-center">
            <span className="text-primary text-3xl inline-block  md:mb-6 mb-4">
              <BiSolidPhoneCall />
            </span>
            <h6 className="text-2xl font-bold mb-3">LET&apos;S TALK</h6>
            <p>
            Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-center text-center">
            <span className="text-primary text-3xl inline-block  md:mb-6 mb-4">
              <IoMailOutline />
            </span>
            <h6 className="text-2xl font-bold mb-3">BOOK A TABLE</h6>
            <p>
            Email: demo@website.com <br />
            Support: support@website.com
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-center text-center">
            <span className="text-primary text-3xl inline-block  md:mb-6 mb-4">
              <IoLocation />
            </span>
            <h6 className="text-2xl font-bold mb-3">Our Address</h6>
            <p>
            123 Stree New York City , United <br /> States Of America.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <span className="md:p-[14px] p-[9px] border inline-block rounded-full md:text-2xl text-base cursor-pointer">
            <FaFacebook />
          </span>
          <span className="md:p-[14px] p-[9px] border inline-block rounded-full md:text-2xl text-base cursor-pointer">
            <FaSquareXTwitter />
          </span>
          <span className="md:p-[14px] p-[9px] border inline-block rounded-full md:text-2xl text-base cursor-pointer">
          <FaSquareInstagram />
          </span>
          <span className="md:p-[14px] p-[9px] border inline-block rounded-full md:text-2xl text-base cursor-pointer">
          <FaLinkedin />
          </span>
        </div>
        <div className="text-center mt-5">
            <p className="md:text-xl text-base">© {(new Date().getFullYear())} All Rights Reserved </p>
        </div>
      </Container>
      
    </div>
  );
};

export default Footer;
