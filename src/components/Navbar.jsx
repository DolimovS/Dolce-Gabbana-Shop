import { NavLink } from "react-router-dom";

// icons
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { HiOutlineXMark } from "react-icons/hi2";
import { RiArrowDropRightLine } from "react-icons/ri";
import { BsSuitHeart } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";

// img
import logo from "../assets/logo.png";

const Navbar = () => {
    
    return (
        <nav className="w-full">
            {/* Top grey bar */}
            <div className="hidden lg:flex bg-gray-300 text-[#323232]  justify-end px-[25px] lg:px-[50px] py-[22px] font-finlandica font-medium  leading-[100%] tracking-[0] text-[11px] xl:text-[18px]">
                <div className="flex items-center">
                    <NavLink className="px-[20px]" to="/">
                        Find a store
                    </NavLink>
                    <span className="w-[1px] h-[13px] bg-[#323232]"></span>
                    <NavLink className="px-[20px]" to="/help">
                        Help
                    </NavLink>
                    <span className="w-[1px] h-[13px] bg-[#323232]"></span>
                    <NavLink className="px-[20px]" to="/join">
                        Join Us
                    </NavLink>
                    <span className="w-[1px] h-[13px] bg-[#323232]"></span>
                    <NavLink className="px-[20px]" to="/login">
                        Sign In
                    </NavLink>
                </div>
            </div>

            {/* Main nav bar */}
            <div className="sticky top-0 right-0 w-full bg-white px-[25px] lg:px-[50px] py-[12.5px] flex items-center justify-between">
                <img
                    className="w-[160px] h-[45px] sm:w-[209px] sm:h-[45px]"
                    src={logo}
                    alt="logo"
                />

                <div className="hidden lg:flex flex gap-[30px] font-finlandica font-medium  leading-[100%] tracking-[0] text-[16px] xl:text-[18px]">
                    <NavLink to="/">New & Featured</NavLink>
                    <NavLink to="/">Men</NavLink>
                    <NavLink to="/">Women</NavLink>
                    <NavLink to="/">Sale</NavLink>
                </div>

                <div className="hidden   lg:flex items-center gap-[42px] h-[45px]">
                    {/* Search */}
                    <div className="relative w-[200px] bg-[#F2F2F2] rounded-3xl">
                        <input
                            type="text"
                            placeholder="Search"
                            className="focus:outline-0 w-full py-4 pl-[55px] pr-4 text-[#C2C2C2]"
                        />
                        <div className="absolute left-5 top-1/2 -translate-y-1/2">
                            <FaSearch className="w-4 h-4 text-[#323232]" />
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="flex gap-[31px]">
                        <button>
                            <FaRegHeart className="w-6 h-6 text-[#323232]" />
                        </button>
                        <button>
                            <IoBagRemoveOutline className="w-6 h-6 text-[#323232]" />
                        </button>
                    </div>
                </div>

                {/* mobile */}

                <div className=" flex lg:hidden items-center gap-[25px]">
                    <CiSearch className="w-5 h-5 text-[#323232]" />
                    {/* <FaSearch className="w-5 h-5 text-[#323232]" /> */}
                    <IoBagRemoveOutline className="w-5 h-5 text-[#323232]" />
                    <HiBars3 className="w-5 h-5 text-[#323232]" />
                </div>
            </div>

            <div className="absolute  lg:hidden  min-[500px]:bg-white/50   right-0 top-0 w-full h-full bg-white ">
                <div className=" max-w-[500px] opacity-100 bg-white px-[25px] ml-auto w-full h-full">
                    <div className="w-full py-[27px] flex items-center justify-end ">
                        <button className="">
                            <HiOutlineXMark className="w-8 h-8 text-[#101010]" />
                        </button>
                    </div>


                    <div className="flex  flex-col gap-y-6 font-finlandica font-medium text-[#323232] leading-[100%] tracking-[0] text-[24px] ">
                        <NavLink
                            to="/"
                            className="flex items-center w-full"
                        >
                            <span>New & Featured</span>
                            <RiArrowDropRightLine className="size-8 ml-auto" />
                        </NavLink>

                        <NavLink
                            to="/"
                            className="flex items-center w-full "
                        >
                            <span>Men</span>
                            <RiArrowDropRightLine className="size-8 ml-auto" />
                        </NavLink>

                        <NavLink
                            to="/"
                            className="flex items-center w-full"
                        >
                            <span>Women</span>
                            <RiArrowDropRightLine className="size-8 ml-auto" />
                        </NavLink>

                        <NavLink
                            to="/"
                            className="flex items-center w-full "
                        >
                            <span>Sale</span>
                            <RiArrowDropRightLine className="size-8 ml-auto" />
                        </NavLink>
                    </div>


                    <div className="w-full">
                        <p className="pt-[50px] pb-[30px]  font-bold max-w-[300px] text-[#696969] leading-[100%] tracking-[0] text-[20px]">Become a Brand Member for the best products, inspiration and stories in sport.<NavLink to="/ " className="text-[#101010] cursor-pointer">Learn more</NavLink></p>
                    </div>

                    <div className="flex gap-2.5">
                        <button className="px-[18px] py-[12px] rounded-[35px] cursor-pointer  bg-[#101010] text-[16px] font-medium leading-[100%] tracking-[0]  text-white">Join Us</button>
                        <button className="px-[18px] py-[12px]  rounded-[35px] cursor-pointer text-[#101010] text-[16px] font-medium leading-[100%] tracking-[0]  border border-[#101010]">Sing in</button>
                    </div>

                    <div className="flex flex-col pt-4 gap-[10px]">
                        <NavLink className=" w-10 text-[#323232] h-10" to="/"><IoBagRemoveOutline /></NavLink>
                        <NavLink className=" w-10 text-[#323232] h-10" to="/"><BsBox /></NavLink>
                        <NavLink className=" w-10 text-[#323232] h-10" to="/"><BsSuitHeart /></NavLink>
                        <NavLink className=" w-10 text-[#323232] h-10" to="/"><CiCircleQuestion /></NavLink>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
