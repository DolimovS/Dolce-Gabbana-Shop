import { NavLink } from "react-router-dom";

// icons
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
// img
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="w-full">
            {/* Top grey bar */}
            <div className="hidden lg:flex bg-gray-300 text-[#323232]  justify-end px-[25px] lg:px-[50px] py-[22px] font-finlandica font-medium  leading-[100%] tracking-[0] text-[11px] xl:text-[18px]">
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
                <img className="w-[160px] h-[45px] sm:w-[209px] sm:h-[45px]" src={logo} alt="logo" />

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
                    <FaSearch className="w-5 h-5 text-[#323232]" />
                    <IoBagRemoveOutline className="w-5 h-5 text-[#323232]" />
                    <HiBars3 className="w-5 h-5 text-[#323232]"  />
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
