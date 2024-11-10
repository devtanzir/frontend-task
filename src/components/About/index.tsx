import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import AboutImage from "/images/about.jpg";
import TabContent from "./components/tab-content";
import ServiceBox from "./components/service-box";
import { services } from "@/constants/about";

const About = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-start pt-12 lg:pt-24 px-4 lg:px-4 relative">
        {/* About Image with Overlay Text */}
        <div className="w-full lg:w-1/2 relative">
          <img src={AboutImage} alt="About Us" className="w-full rounded-lg" />
          <div className="bg-white p-5 rounded-xl absolute top-6 left-6 flex items-center font-medium gap-3 shadow-lg">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="none"
                className="stroke-gray-200"
                strokeWidth="2"
              />
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="none"
                className="stroke-primary"
                strokeWidth="2"
                strokeDasharray="85, 100"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="w-4 h-4 transform -rotate-90 absolute top-6 left-[30px]"
              viewBox="0 0 36 36"
            >
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="white"
                className="stroke-primary"
                strokeWidth="6"
              />
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="none"
                className="stroke-primary"
                strokeWidth="6"
                strokeDasharray="85, 100"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-semibold text-2xl absolute top-[45px] left-[42px] text-black">
              50+
            </span>
            <p className="ml-2">
              Market <br /> Experiences
            </p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <Tabs defaultValue="about" className="max-w-full">
            <TabsList className="flex gap-3">
              {["about", "experience", "contact"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  className="py-2 px-4 text-sm lg:text-base font-medium transition-colors duration-300 rounded-md data-[state=active]:bg-blood-red data-[state=active]:text-white"
                  value={tab}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="h-[1px] w-full bg-blood-red mt-4" />
            <div className="mt-5">
              <TabsContent value="about">
                <TabContent
                  title="Exceptional culinary experience and delicious food"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation."
                  button
                  buttonText="About More"
                  phone
                  phoneNumber="+88 3426 739 485"
                />
              </TabsContent>
              <TabsContent value="experience">
                <TabContent
                  title="Are you a software engineer, designer, or programmer?"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation."
                  button
                  buttonText="See More"
                />
              </TabsContent>
              <TabsContent value="contact">
                <TabContent
                  title="We love what we do and enjoy every moment!"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation."
                  button
                  buttonText="Contact"
                  phone
                  phoneNumber="+88 3426 739 485"
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto pb-24 pt-14 flex flex-col md:flex-row gap-8 md:gap-16 md:items-center items-start px-4 lg:px-0">
        {services.map((service) => (
          <ServiceBox
            key={service.id}
            photo={service.photo}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {/* Sidebar Image */}
      <img
        src="/images/side.png"
        alt="Decorative Sidebar"
        className="hidden xl:block w-[200px] sm:w-[280px] lg:w-[360px] absolute right-0 top-[1350px] xl:translate-x-[244px]"
      />
    </>
  );
};

export default About;
