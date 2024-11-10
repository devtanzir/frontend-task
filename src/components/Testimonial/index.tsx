import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Slider from "../shared/slider";

const Testimonial = () => {
  return (
    <>
      <Slider
        desktop={1}
        tablet={1}
        mobile={1}
        sideImage="/images/side-testimonial.png"
        sideImagePosition="hidden xl:block w-[360px] absolute top-[239px] right-[-385px]"
        sectionHeaderTitle="Crispy, Every Bite Taste"
        sectionHeaderDes="What Some of my Customers Say"
      >
        <div className="flex items-center flex-col xl:flex-row">
          <div className="bg-primary xl:w-1/3 w-full xl:p-20 p-16 flex flex-col justify-between gap-10 items-center xl:h-[555px] h-auto">
            <div>
              <span>
                <BiSolidQuoteAltLeft />
              </span>
              <p className="lg:text-xl text-lg leading-9 ml-5">
                You can't go wrong with Chicken Mandi, I had it twice. The
                chicken was cooked perfectly, juicy & soft (usually mandi
                chicken is a bit dry). I would defiantly recommend it.
              </p>
            </div>
            <div className=" w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex-grow">
                  <h6 className="lg:text-lg text-base">Khalid Al Dawsry</h6>
                  <p className="text-sm lg:text-base">Jeddah, Saudi</p>
                </div>
                <img
                  src="/images/testimonial-user.png"
                  className="h-10 w-10 object-cover rounded-full"
                  alt="testimonial user"
                />
              </div>
              <div className="w-full h-[1px] bg-black mt-2" />
            </div>
          </div>
          <div className="xl:w-2/3 w-full">
            <iframe
              width="100%"
              height="555"
              src="https://www.youtube.com/embed/DzSSUU37ynQ"
              title="Doner Club Kebab B Roll Commercial Video Ad | Signa Productions"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <div className="flex items-center flex-col xl:flex-row">
          <div className="bg-primary xl:w-1/3 w-full xl:p-20 p-16 flex flex-col justify-between gap-10 items-center xl:h-[555px] h-auto">
            <div>
              <span>
                <BiSolidQuoteAltLeft />
              </span>
              <p className="lg:text-xl text-lg leading-9 ml-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sunt culpa doloribus quae sit, sint inventore error? Possimus mollitia ipsa maxime enim at fugit excepturi.
              </p>
            </div>
            <div className=" w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex-grow">
                  <h6 className="lg:text-lg text-base">Khalid Al Dawsry</h6>
                  <p className="text-sm lg:text-base">Jeddah, Saudi</p>
                </div>
                <img
                  src="/images/testimonial-user.png"
                  className="h-10 w-10 object-cover rounded-full"
                  alt="testimonial user"
                />
              </div>
              <div className="w-full h-[1px] bg-black mt-2" />
            </div>
          </div>
          <div className="xl:w-2/3 w-full">
          <iframe
              width="100%"
              height="555"
              src="https://www.youtube.com/embed/PHY5wCWQUIw"
              title="Bangladesh military&#39;s Aggressive Pursuit of Cutting-Edge Military Capabilities | InShort"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Testimonial;
