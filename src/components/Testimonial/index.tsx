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
        sideImagePosition="hidden xl:block w-[360px] absolute top-[462px] rotate-[35deg] right-[-385px]"
        sectionHeaderTitle="Crispy, Every Bite Taste"
        sectionHeaderDes="What Some of my Customers Say"
      >
        <div className="flex items-center flex-col-reverse xl:flex-row">
          <div className="bg-primary xl:w-[550px] w-full xl:p-20 p-16 flex flex-col justify-between gap-10 items-center xl:h-[555px] h-auto relative">
            <img src="/images/testimonial.svg" className="absolute left-0 lg:bottom-10 bottom-0" alt="flower" />
            <div>
              <span>
                <BiSolidQuoteAltLeft className="text-button"/>
              </span>
              <p className="lg:text-xl font-normal text-lg leading-9 ml-5 text-button">
                You can't go wrong with Chicken Mandi, I had it twice. The
                chicken was cooked perfectly, juicy & soft (usually mandi
                chicken is a bit dry). I would defiantly recommend it.
              </p>
            </div>
            <div className=" w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex-grow">
                  <h6 className="text-lg font-bold text-button">Khalid Al Dawsry</h6>
                  <p className="text-sm lg:text-sm">Jeddah, Saudi</p>
                </div>
                <div className=" inline-block relative after:w-full after:h-1 after:bg-blood-red after:inline-block after:absolute after:bottom-0 after:translate-y-3">
                <img
                  src="/images/testimonial-user.png"
                  className="h-10 w-10 object-cover rounded-full"
                  alt="testimonial user"
                />
                </div>
                
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
        
        <div className="flex items-center flex-col-reverse xl:flex-row">
          <div className="bg-primary xl:w-[550px] w-full xl:p-20 p-16 flex flex-col justify-between gap-10 items-center xl:h-[555px] h-auto relative">
            <img src="/images/testimonial.svg" className="absolute left-0 lg:bottom-10 bottom-0" alt="flower" />
            <div>
              <span>
                <BiSolidQuoteAltLeft className="text-button"/>
              </span>
              <p className="lg:text-xl font-normal text-lg leading-9 ml-5 text-button">
                You can't go wrong with Chicken Mandi, I had it twice. The
                chicken was cooked perfectly, juicy & soft (usually mandi
                chicken is a bit dry). I would defiantly recommend it.
              </p>
            </div>
            <div className=" w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex-grow">
                  <h6 className="text-lg font-bold text-button">Khalid Al Dawsry</h6>
                  <p className="text-sm lg:text-sm">Jeddah, Saudi</p>
                </div>
                <div className=" inline-block relative after:w-full after:h-1 after:bg-blood-red after:inline-block after:absolute after:bottom-0 after:translate-y-3">
                <img
                  src="/images/testimonial-user.png"
                  className="h-10 w-10 object-cover rounded-full"
                  alt="testimonial user"
                />
                </div>
                
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
