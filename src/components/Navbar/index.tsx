import { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { NavItem } from '@/constants/navbar';

const Navbar: React.FC = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const closeDropDown = (e: MouseEvent) => {
            if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target as Node)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
  
        <nav className="bg-hero-pattern sticky top-0 z-50">
            <div className='container mx-auto flex items-center justify-between px-4 py-2 text-white'>

            
            <div className='flex gap-10'>
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white  transition-all duration-200">
                <img src="/images/Logo.png" alt="logo" />
              
            </div>
            <ul className="hidden items-center justify-between gap-10 lg:flex">
                {
                    NavItem.map(item => (
                        <li key={item.id} className="group flex cursor-pointer flex-col capitalize">
                    {item.name}
                    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
                    ))
                }
            </ul>
            </div>
            
            <Button className='hidden lg:block'>Book a Table</Button>
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
                    {
                        NavItem.map(item => (
                            <li key={item.id} className="cursor-pointer px-6 py-2 text-black rounded-t-lg hover:bg-blood-red hover:text-white">
                            {item.name}
                        </li>
                        ))
                    }
                    <Button className='block lg:hidden'>Book a Table</Button>
                    </ul>
                )}
            </div>
            </div>
        </nav>
    );
};

export default Navbar;