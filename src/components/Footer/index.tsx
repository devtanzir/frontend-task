import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLocation, IoMailOutline, IoTimeOutline } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../images/footer.jpg")`,
      }}
      className="bg-no-repeat bg-center bg-cover py-24 text-white"
    >
      <div className="container mx-auto">
        <h3 className="text-center lg:text-5xl text-3xl mb-10">
          We ready to have you the best dining experiences
        </h3>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5  mb-20">
          <div className="col-span-1 flex gap-5 flex-col items-center text-center">
            <span className="text-primary text-3xl inline-block">
              <IoTimeOutline />
            </span>
            <h6 className="text-2xl">Opening hours</h6>
            <p>
              Monday - Sunday <br /> 9:00 AM to 11:30 PM
            </p>
          </div>
          <div className="col-span-1 flex gap-5 flex-col items-center text-center">
            <span className="text-primary text-3xl inline-block">
              <BiSolidPhoneCall />
            </span>
            <h6 className="text-2xl">LET&apos;S TALK</h6>
            <p>
              Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545
            </p>
          </div>
          <div className="col-span-1 flex gap-5 flex-col items-center text-center">
            <span className="text-primary text-3xl inline-block">
            <IoMailOutline />
            </span>
            <h6 className="text-2xl">BOOK A TABLE</h6>
            <p>
              Email: demo@website.com <br />
              Support: support@website.com
            </p>
          </div>
          <div className="col-span-1 flex gap-5 flex-col items-center text-center">
            <span className="text-primary text-3xl inline-block">
            <IoLocation />
            </span>
            <h6 className="text-2xl">Our Address</h6>
            <p>
              123 Stree New York City , United <br /> States Of America.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <span className="md:p-5 p-3 border inline-block rounded-full text-2xl cursor-pointer">
            <FaFacebook />
          </span>
          <span className="md:p-5 p-3 border inline-block rounded-full text-2xl cursor-pointer">
            <FaSquareXTwitter />
          </span>
          <span className="md:p-5 p-3 border inline-block rounded-full text-2xl cursor-pointer">
          <FaSquareInstagram />
          </span>
          <span className="md:p-5 p-3 border inline-block rounded-full text-2xl cursor-pointer">
          <FaLinkedin />
          </span>
        </div>
        <div className="text-center mt-5">
            <p className="text-xl">© {(new Date().getFullYear())} All Rights Reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
