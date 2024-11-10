import { Button } from "../ui/button";
import HeroImage from "/images/hero-image.jpg";
import VectorImage from "/images/Vector.png";

const Hero = () => {
  return (
    <main className="bg-hero-pattern">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-end xl:pt-[130px] lg:pt-20 pt-7 pb-40 relative">
        <div className="flex flex-col gap-4 xl:w-[775px] xl:absolute xl:left-0 m-7 lg:z-10 z-0">
          <h1 className="lg:text-[110px] md:text-7xl text-5xl uppercase text-white font-medium bg-gradient-to-r from-transparent to-blood-red/60 lg:leading-[109px]">
            Taste the authentic Saudi cuisine
          </h1>
          <p className="xl:text-2xl md:text-xl text-lg font-normal text-white">
            Among the best Saudi chefs in the world, serving <br /> you
            something beyond flavor.
          </p>
          <div>
            <Button>Explore Menu</Button>
          </div>
        </div>
        <div className="relative w-10/12 xl:w-auto">
          <img
            className="2xl:w-[934px] xl:w-[685px] w-full"
            src={HeroImage}
            alt="hero image"
          />
          <img
            className="absolute top-0 right-0 xl:translate-x-[31px] translate-y-[-31px]"
            src={VectorImage}
            alt="vector"
          />
          <div className="absolute right-0 bottom-0 bg-primary lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] inline-flex justify-center items-center rounded-full xl:translate-x-[54px] shadow-2xl">
            <h5
              style={{ fontFamily: "Bebas Neue" }}
              className="uppercase lg:text-3xl md:text-2xl text-xl font-medium border border-dashed py-3 px-5 rounded-full border-blood-red"
            >
              Today <br /> Offer
            </h5>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
