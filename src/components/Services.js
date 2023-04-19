import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services data
const services = [
    {
        name: "UI/UX Design",
        description:
            "Est velit eiusmod in aliqua est sint fugiat laboris non non laborum.",
        link: "Learn More",
    },
    {
        name: "Development",
        description: "Commodo aliqua nisi consectetur tempor.",
        link: "Learn More",
    },
    {
        name: "Digital Marketing",
        description:
            "Ut nostrud nostrud Lorem reprehenderit amet sit adipisicing anim ut.",
        link: "Learn More",
    },
    {
        name: "Product Branding",
        description:
            "Exercitation elit reprehenderit dolor ea est exercitation commodo enim proident.",
        link: "Learn More",
    },
];

const Services = () => {
    return (
        <section className="section" id="services">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* text & image*/}
                    <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
                        <h2 className="h2 text-accent mb-6 ">What I do.</h2>
                        <h3 className="h3 max-w-[455px] mb-16">
                            Velit dolore eu Lorem voluptate esse aute incididunt
                            consequat consectetur est labore sit ad.
                        </h3>
                        <button className="btn btn-sm">See my work</button>
                    </div>
                    {/* services */}
                    <div className="flex-1">
                        {/* services list */}
                        <div>
                            {services.map((service, index) => {
                                // destructure service
                                const { name, description, link } = service;
                                return (
                                    <div
                                        className="border-b border-white/20 h-[146px] mb-[38px] flex"
                                        key={index}
                                    >
                                        <div className="max-w-[476px]">
                                            <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                                                {name}
                                            </h4>
                                            <p className="font-secondary leading-tight">
                                                {description}
                                            </p>
                                        </div>
                                        <div className="flex flex-col flex-1 items-end ">
                                            <a
                                                href="#"
                                                className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                                            >
                                                <BsArrowUpRight />
                                            </a>
                                            <a
                                                href="#"
                                                className="text-gradient text-sm"
                                            >
                                                {link}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
