import { NavLink } from "react-router-dom";
import { useState } from "react";

// icons
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropRightLine } from "react-icons/ri";
import { BsSuitHeart, BsBox } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";

// img
import logo from "../assets/logo.png";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="w-full">
            {/* Top grey bar */}
            <div className="hidden lg:flex bg-gray-300 text-[#323232] justify-end px-[25px] lg:px-[50px] py-[22px] font-finlandica font-medium text-[11px] xl:text-[18px] leading-[100%] tracking-[0]">
                <div className="flex items-center">
                    <NavLink className="px-[20px]" to="/">Find a store</NavLink>
                    <span className="w-[1px] h-[13px] bg-[#323232]"></span>
                    <NavLink className="px-[20px]" to="/help">Help</NavLink>
                    <span className="w-[1px] h-[13px] bg-[#323232]"></span>
                    <NavLink className="px-[20px]" to="/join">Join Us</NavLink>
                    <span className="w-[1px] h-[13px] bg-[#323232]"></span>
                    <NavLink className="px-[20px]" to="/login">Sign In</NavLink>
                </div>
            </div>

            {/* Main nav bar */}
            <div className="sticky top-0 right-0 w-full bg-white px-[25px] lg:px-[50px] py-[12.5px] flex items-center justify-between">
                <img
                    className="w-[160px] h-[45px] sm:w-[209px] sm:h-[45px]"
                    src={logo}
                    alt="logo"
                />

                {/* Desktop menu */}
                <div className="hidden lg:flex gap-[30px] font-finlandica font-medium text-[16px] xl:text-[18px] leading-[100%] tracking-[0]">
                    <NavLink to="/">New & Featured</NavLink>
                    <NavLink to="/">Men</NavLink>
                    <NavLink to="/">Women</NavLink>
                    <NavLink to="/">Sale</NavLink>
                </div>

                {/* Desktop icons + search */}
                <div className="hidden lg:flex items-center gap-[42px] h-[45px]">
                    <div className="relative w-[200px] bg-[#F2F2F2] rounded-3xl">
                        <input
                            type="text"
                            placeholder="Search"
                            className="focus:outline-0 w-full py-4 pl-[55px] pr-4 text-[#C2C2C2]"
                        />
                        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#323232]" />
                    </div>

                    <div className="flex gap-[31px]">
                        <button><FaRegHeart className="w-6 h-6 text-[#323232]" /></button>
                        <button><IoBagRemoveOutline className="w-6 h-6 text-[#323232]" /></button>
                    </div>
                </div>

                {/* Mobile menu icons */}
                <div className="flex lg:hidden items-center gap-[25px]">
                    <CiSearch className="w-5 h-5 text-[#323232]" />
                    <IoBagRemoveOutline className="w-5 h-5 text-[#323232]" />
                    <HiBars3
                        onClick={() => setOpenMenu(true)}
                        className="w-5 h-5 text-[#323232] cursor-pointer"
                    />
                </div>
            </div>

            {/* Mobile Menu with animation */}
            <div
                className={`fixed inset-0 z-50 flex lg:hidden`}
                style={{ pointerEvents: openMenu ? "auto" : "none" }}
            >
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${openMenu ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setOpenMenu(false)}
                ></div>

                {/* Sliding menu */}
                <div
                    className={`ml-auto relative w-full max-w-[500px] px-[25px]  h-full bg-white transform transition-transform duration-300 ease-in-out ${openMenu ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Close button */}
                    <div className="w-full py-[27px] flex items-center justify-end">
                        <HiOutlineXMark
                            onClick={() => setOpenMenu(false)}
                            className="w-8 h-8 text-[#101010] cursor-pointer"
                        />
                    </div>

                    {/* Menu links */}
                    <div className="flex flex-col gap-y-6 font-finlandica font-medium text-[#323232] text-[24px] leading-[100%] tracking-[0]">
                        <NavLink to="/" className="flex items-center w-full">
                            <span>New & Featured</span>
                            <RiArrowDropRightLine className="ml-auto w-8 h-8" />
                        </NavLink>
                        <NavLink to="/" className="flex items-center w-full">
                            <span>Men</span>
                            <RiArrowDropRightLine className="ml-auto w-8 h-8" />
                        </NavLink>
                        <NavLink to="/" className="flex items-center w-full">
                            <span>Women</span>
                            <RiArrowDropRightLine className="ml-auto w-8 h-8" />
                        </NavLink>
                        <NavLink to="/" className="flex items-center w-full">
                            <span>Sale</span>
                            <RiArrowDropRightLine className="ml-auto w-8 h-8" />
                        </NavLink>
                    </div>

                    {/* Text section */}
                    <div className="w-full">
                        <p className="pt-[50px] pb-[30px] max-w-[300px] font-bold text-[#696969] text-[20px] leading-[100%] tracking-[0]">
                            Become a Brand Member for the best products, inspiration and stories in sport.
                            <NavLink to="/" className="text-[#101010] cursor-pointer"> Learn more</NavLink>
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2.5">
                        <button className="px-[18px] py-[12px] rounded-[35px] bg-[#101010] text-white text-[16px] font-medium leading-[100%] tracking-[0] cursor-pointer">
                            Join Us
                        </button>
                        <button className="px-[18px] py-[12px] rounded-[35px] border border-[#101010] text-[#101010] text-[16px] font-medium leading-[100%] tracking-[0] cursor-pointer">
                            Sign In
                        </button>
                    </div>

                    {/* Mobile icons */}
                    <div className="flex flex-col pt-4 gap-[10px]">
                        <NavLink className="w-10 h-10 text-[#323232]" to="/"><IoBagRemoveOutline /></NavLink>
                        <NavLink className="w-10 h-10 text-[#323232]" to="/"><BsBox /></NavLink>
                        <NavLink className="w-10 h-10 text-[#323232]" to="/"><BsSuitHeart /></NavLink>
                        <NavLink className="w-10 h-10 text-[#323232]" to="/"><CiCircleQuestion /></NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
