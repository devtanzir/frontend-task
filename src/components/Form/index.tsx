import { useState } from "react";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";
import Container from "../shared/container";

const Form = () => {
    const [name, setName] = useState("text");

  return (
    <div className="bg-form-bg bg-center sm:bg-right-top bg-no-repeat bg-cover">
      <Container>
      <div className="py-24 px-8">
        <SectionHeader
          title="Book Now"
          desc="Book Your Table"
          className="text-white"
        />
        <p className="text-[#F7F8F9] my-5 md:w-[528px] w-full">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>
        <form>
          <div className="flex flex-col gap-4 sm:w-[500px] w-full">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <input
                type="text"
                className="py-3 px-4 outline-none border border-[#E5E7EB] bg-transparent sm:w-1/2 w-full text-white"
                name="name"
                placeholder="Your Name*"
                required
              />
              <input
                type="email"
                className="py-3 px-4 outline-none border border-[#E5E7EB] bg-transparent sm:w-1/2 w-full text-white"
                name="email"
                placeholder="Your Email*"
                required
              />
            </div>
            <div className="flex gap-3 items-center flex-col sm:flex-row">
              <input
                className="py-3 px-4 outline-none border border-[#E5E7EB] bg-transparent sm:w-1/2 w-full text-white"
                name="date"
                placeholder="Reservation Date*"
                type={name}
                onFocus={() => setName("date")}
                onBlur={() => setName("text")}
              />
              <input
                type="number"
                className="py-3 px-4 outline-none border border-[#E5E7EB] bg-transparent sm:w-1/2 w-full text-white"
                name="total"
                placeholder="Total People"
              />
            </div>
            <textarea name="message" className="py-3 px-4 outline-none border border-[#E5E7EB] bg-transparent w-full text-white" rows={5} placeholder="Message"></textarea>
            <div>
              <Button>Book Now</Button>
            </div>
          </div>
        </form>
      </div>
      </Container>
      
    </div>
  );
};

export default Form;
