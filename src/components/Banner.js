import React from "react";
// images
import Image from "../assets/fotor_2023-4-19_14_24_41.png";
// icons
import { FaGithub, FaFacebook, FaTiktok } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// Link
import { Link } from "react-scroll";

// social link
const FBLink = "https://www.facebook.com/anhpd17";
const GHLink = "https://github.com/anhpd17";

const Banner = () => {
    return (
        <section
            className="min-h-[85vh] lg:min-h-78vh flex items-center "
            id="home"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    {/* text */}
                    <div className="flex-1 text-center font-secondary lg:text-left ">
                        <motion.h1
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
                        >
                            <span>ANHPD17</span>
                        </motion.h1>
                        <motion.div
                            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            <span className="text-white mr-4">I am a</span>
                            <TypeAnimation
                                sequence={[
                                    "FE Developer",
                                    2000,
                                    "Designer",
                                    2000,
                                    "Video Editor",
                                    2000,
                                ]}
                                speed={50}
                                className="text-accent"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            className="mb-8 max-w-lg mx-auto lg:mx-0"
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            Day la mot chut thong tin mo ta ve toi. toi la duc
                            anh sinh vien truong giao thong van tai
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex mx-auto max-w-max gap-x-6 items-center mb-12 lg:mx-0"
                        >
                            <Link
                                to="contact"
                                activeClass="active"
                                smooth={true}
                                spy={true}
                            >
                                <button className="btn btn-lg">
                                    Contact me
                                </button>
                            </Link>
                        </motion.div>
                        {/* social   */}
                        <motion.div
                            variants={fadeIn("up", 0.7)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
                        >
                            <a
                                href={FBLink}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-slate-600"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href={GHLink}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-slate-600"
                            >
                                <FaGithub />
                            </a>
                            <a href="#" className="hover:text-slate-600">
                                <FaTiktok />
                            </a>
                        </motion.div>
                    </div>
                    {/* image */}
                    <motion.div
                        variants={fadeIn("down", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
                    >
                        <img src={Image} alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
