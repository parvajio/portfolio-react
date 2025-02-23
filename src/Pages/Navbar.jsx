import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home"); // Default active link
    const navClass = "hvr-underline-from-center hvr-grow hvr-icon-down btn btn-sm rounded-lg bg-violet-700 bg-opacity-10 border-violet-600 hover:bg-violet-700/30 font-bold font-serif px-5";
    
    const navlinks = (
        <>
            <a className={`${navClass} ${activeLink === "home" ? "text-violet-100 bg-violet-700 bg-opacity-100" : ""} `} href="#home" onClick={() => setActiveLink("home")}>
                <li>Home</li>
            </a>
            <a className={`${navClass} ${activeLink === "about" ? "text-violet-100 bg-violet-700 bg-opacity-100" : ""}`} href="#about" onClick={() => setActiveLink("about")}>
                <li>About</li>
            </a>
            <a className={`${navClass} ${activeLink === "projects" ? "text-violet-100 bg-violet-700 bg-opacity-100" : ""}`} href="#projects" onClick={() => setActiveLink("projects")}>
                <li>Projects</li>
            </a>
            <a className={`${navClass} ${activeLink === "skills" ? "text-violet-100 bg-violet-700 bg-opacity-100" : ""}`} href="#skills" onClick={() => setActiveLink("skills")}>
                <li>Skills</li>
            </a>
            <a className={`${navClass} ${activeLink === "contact" ? "text-violet-100 bg-violet-700 bg-opacity-100" : ""}`} href="#contact" onClick={() => setActiveLink("contact")}>
                <li>Contact</li>
            </a>
        </>
    );

    const {  handleTheme } = useContext(ThemeContext);

    // Function to handle scroll event
    const handleScroll = () => {
        const sections = ['home', 'about', 'projects', 'skills', 'contact'];
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                const sectionTop = sectionElement.offsetTop;
                const sectionHeight = sectionElement.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveLink(section);
                }
            }
        });
    };

    useEffect(() => {
        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar mx-auto fixed max-w-6xl z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <h1 className="font-bold font-['Yeseva One', 'serif'] text-2xl">
                        <span className="text-violet-600">P</span>ar<span>V</span>aj<span>.-</span>
                    </h1>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="w-full menu menu-horizontal bg-violet-700 bg-opacity-10 backdrop-blur-sm border border-white/20 shadow-lg rounded-full px-8 py-3 gap-3 ">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end mr-10 mt-1">
                <div className="flex justify-center items-center">
                    <label className="swap swap-rotate">
                        <input type="checkbox" onClick={handleTheme} className="theme-controller" value="synthwave" />

                        {/* Sun Icon */}
                        <svg className="swap-off h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* Moon Icon */}
                        <svg className="swap-on h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13ZM12,20A8.06,8.06,0,0,1,6.07,18.12A7.29,7.29,0,0,0,14,20.73,10.09,10.09,0,0,1,12,20Z" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
