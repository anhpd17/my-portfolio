import React from "react";
// import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
// link
import { Link } from "react-scroll";

const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:left-2 lg:top-[25%] h-full overflow-hidden z-50">
            <div className="container mx-auto">
                {/* nav inner */}
                <div className="h-full bg-black/20 max-h-[460px] backdrop-blur-2xl rounded-full w-[96px] my-auto py-5 flex flex-col justify-between items-center text-2xl text-white/50">
                    <Link
                        to="home"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        offset={-200}
                        className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
                    >
                        <BiHomeAlt />
                    </Link>
                    <Link
                        to="about"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
                    >
                        <BiUser />
                    </Link>
                    <Link
                        to="services"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
                    >
                        <BsClipboardData />
                    </Link>
                    <Link
                        to="work"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
                    >
                        <BsBriefcase />
                    </Link>
                    <Link
                        to="contact"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
                    >
                        <BsChatSquare />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
