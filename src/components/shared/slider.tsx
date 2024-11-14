import SectionHeader from "../shared/section-header";
import Carousel, { CarouselInternalState } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import React from "react";
import Container from "./container";

interface ButtonGroupProps {
  next: () => void;
  previous: () => void;
  goToSlide: (index: number) => void;
  carouselState?: CarouselInternalState;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => {
  return (
    <div className="absolute lg:top-[120px] sm:top-16 sm:right-0 bottom-2 sm:bottom-auto left-[50%] sm:left-auto translate-x-[-50%] sm:translate-x-0 flex gap-5">
      <button
        className="p-5 bg-white shadow-2xl rounded-full hover:text-blood-red transition-all duration-150"
        onClick={previous}
      >
        <FaChevronLeft />
      </button>
      <button
        className="p-5 bg-white shadow-2xl rounded-full hover:text-blood-red transition-all duration-150"
        onClick={next}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

interface SliderProps {
  desktop: number;
  tablet: number;
  mobile: number;
  sideImage: string;
  sideImagePosition: string;
  sectionHeaderTitle: string;
  sectionHeaderDes: string;
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({
  desktop,
  tablet,
  mobile,
  sideImage,
  sideImagePosition,
  sectionHeaderTitle,
  sectionHeaderDes,
  children,
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: desktop,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: tablet,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: mobile,
    },
  };

  return (
    <Container>
      <div className="lg:py-24 lg:pb-24 md:py-12 md:pb-12 pt-7 pb-24 relative">
        <img
          src={sideImage}
          alt="side hero"
          className={`hidden xl:block ${sideImagePosition}`}
        />
        <SectionHeader title={sectionHeaderTitle} desc={sectionHeaderDes} />
        <Carousel
          className="lg:mt-14 mt-8"
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 3s"
          arrows={false}
          renderButtonGroupOutside={true}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          customButtonGroup={React.createElement(ButtonGroup, {
            next: () => {},
            previous: () => {},
            goToSlide: () => {},
            carouselState: undefined,
          })}
        >
          {children}
        </Carousel>
      </div>
    </Container>
  );
};

export default Slider;
