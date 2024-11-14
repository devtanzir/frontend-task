import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { NavItem } from "@/constants/navbar";
import Container from "../shared/container";

const Navbar: React.FC = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef<HTMLDivElement | null>(null);
  const [nav, setNav] = useState(false);
  const [half, setHalf] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop || document.body.scrollTop;
    setNav(scrollValue >= 1000);
    setHalf(scrollValue > 500 && scrollValue < 1000);
  };

  useEffect(() => {
    const closeDropDown = (e: MouseEvent) => {
      if (
        dropDownMenuRef.current &&
        !dropDownMenuRef.current.contains(e.target as Node)
      ) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);
    window.addEventListener("scroll", changeValueOnScroll);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
      window.removeEventListener("scroll", changeValueOnScroll);
    };
  }, []);
  return (
    <nav className={`bg-hero-pattern transition-all ease-in duration-150 ${half ? "opacity-0 invisible" : "opacity-100 visible"} ${nav ? "sticky top-0" : ""} z-50`}>
      <Container>
        <div className={`flex items-center justify-between lg:py-8 py-3 text-white`}>
          <div className="flex gap-[60px]">

            <div className="scale-100 cursor-pointer rounded-2xl py-2 text-xl font-semibold text-white transition-all duration-200 flex gap-2 items-center">
              <img
                className="w-[37px] h-[37px]"
                src="/images/Frame.png"
                alt="logo"
              />
              <div>
                <span className="font-poppins font-semibold text-[28px]">
                  Restau
                </span>
                <span className="font-poppins font-normal text-[28px]">
                  rant
                </span>
              </div>
            </div>

            <ul className="hidden items-center justify-between gap-10 lg:flex">
              {NavItem.map((item) => (
                <li
                  key={item.id}
                  className="group flex cursor-pointer flex-col capitalize font-raleway text-[15px] font-medium"
                >
                  {item.name}
                  <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          <Button className="hidden lg:block" size={"booking"} variant={"booking"}>Book a Table</Button>
          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            {dropDownState && (
              <ul className="z-10 gap-2 bg-red-100 shadow-2xl absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
                {NavItem.map((item) => (
                  <li
                    key={item.id}
                    className="cursor-pointer px-6 py-2 text-black rounded-t-lg hover:bg-blood-red hover:text-white"
                  >
                    {item.name}
                  </li>
                ))}
                <Button className="block lg:hidden" size={"booking"} variant={"booking"}>Book a Table</Button>
              </ul>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
