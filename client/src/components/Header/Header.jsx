import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../assets/img/logo.png";

import { BsSearch } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
// import { AiOutlineHeart } from "react-icons/ai";
import { HiBars3BottomRight } from "react-icons/hi2";

import Search from "./Search/Search";
import MobileMenu from "./MobileMenu/MobileMenu";
import { Context } from "../../utils/context";

import "./Header.scss";


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const navigate = useNavigate();
    
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <div className="left" onClick={() => navigate("/")}>
                        <div className="logo">
                            <img src={LogoImg} alt="" />
                        </div>
                    </div>

                    <div className="all-menu-items">
                        <ul className="center">
                            <li onClick={() => navigate("/home")}>HOME</li>
                            <li onClick={() => navigate("/services")}>SERVICES</li>
                            <li onClick={() => navigate("/connect")}>CONNECT</li>
                            <li onClick={() => navigate("/jobs")}>JOBS</li>
                            <li onClick={() => navigate("/news")}>NEWS</li>
                            <li onClick={() => navigate("/login")}>LOGIN</li>
                           
                        </ul>

                        <div className="mobile-bar">
                                <HiBars3BottomRight onClick={() => setShowMobileMenu(true)} />
                        </div>

                        <div className="right">
                            <BsSearch onClick={() => setShowSearch(true)} />
                        </div>
                    </div>
                </div>
            </header>
            {showSearch && <Search setShowSearch={setShowSearch} />}
            {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
        </>
    );
};

export default Header;
