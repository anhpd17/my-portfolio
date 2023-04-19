import React from "react";
// images

const Header = () => {
    return (
        <header className="py-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center ">
                    {/* logo */}
                    <a href="#" className="text-4xl font-bold">
                        ANHPD17
                    </a>
                    {/* button */}
                    <button className="btn btn-sm">Work with me</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
