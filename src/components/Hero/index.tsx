import Container from "../shared/container";
import { Button } from "../ui/button";
import HeroImage from "/images/hero-image.jpg";
import VectorImage from "/images/Vector.png";

const Hero = () => {
  return (
    <main className="bg-hero-pattern">
      <Container>
        <div className="flex flex-col xl:flex-row xl:items-center justify-end xl:pt-[130px] lg:pt-20 pt-7 md:pb-40 pb-10 relative">
          <div className="flex flex-col lg:gap-[38px] gap-8 xl:w-[945px] xl:absolute xl:left-0 xl:m-7 xl:ml-0 lg:z-10 z-0">
            <h1 className="lg:text-[120px] md:text-7xl text-5xl uppercase text-white font-bold xl:bg-gradient-to-r xl:from-transparent xl:to-blood-red/70 lg:leading-[130px] py-2 lg:w-[850px] w-full">
              Taste the authentic Saudi cuisine
            </h1>
            <p className="xl:text-2xl text-xl font-normal text-white">
              Among the best Saudi chefs in the world, serving <br /> you
              something beyond flavor.
            </p>
            <div>
              <Button>Explore Menu</Button>
            </div>
          </div>

          <div className="relative w-full xl:w-auto mt-10 xl:mt-0">
            <img
              className="2xl:w-[700px] xl:h-[649px] xl:w-[685px] w-full h-auto scale-x-[-1] object-cover"
              src={HeroImage}
              alt="hero image"
            />
            <img
              className="absolute top-0 right-0 xl:translate-x-[31px] translate-y-[-31px]"
              src={VectorImage}
              alt="vector"
            />
            <div className="absolute right-0 bottom-0 bg-primary lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] w-[72px] h-[72px] inline-flex justify-center items-center rounded-full xl:translate-x-[54px] shadow-2xl">
              <h5 className="uppercase lg:text-4xl md:text-2xl text-xl font-bold border-2 border-dashed md:py-[15.5px] md:px-[23px] py-1 px-3 rounded-full text-button border-blood-red">
                Today <br /> Offer
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Hero;
