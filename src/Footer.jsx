import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Footer() {
    const { theme, toggleTheme } = useContext(ThemeContext);  

    return (
        <>
            <footer className={`text-center fixed-bottom bg-${theme === "light" ? "dark" : "light"} py-2`}>
                <span>
                    <a href="https://vcodestar.github.io/" target="_blank" id="vcodestar-link" style={{ color: theme === "light" ? "white" : "black"}}>
                        &copy; {new Date().getFullYear()} vcodestar 
                    </a>
                </span>
            </footer>
        </>
    );
}

export default Footer;
