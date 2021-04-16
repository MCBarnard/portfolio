import devJane from "../assets/devjane.png";
import "./../css/components/Navbar.css";
import {useState} from "react";
import {useDataLayerValue} from "./DataLayer";

const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);
    const [{page}, dispatch] = useDataLayerValue();
    function setPageHome () {
        if (page !== 'home') {
            dispatch({
                type: "SET_PAGE",
                page: "home"
            });
        }
        toggle();
    }
    function toggle () {
        setNavToggle(!navToggle);
    }
    return (
        <header className={`${navToggle && 'nav-open'}`}>
            <div className="logo">
                <img src={ devJane } alt="devThinus"/>
            </div>
            <button onClick={toggle} className={'nav-toggle'} aria-label={"toggle navigation"}>
                <span className={"hamburger"}></span>
            </button>
            <nav className={"nav"}>
                <ul className={"nav__list"}>
                    <li className={"nav__item"}>
                        <a onClick={setPageHome} className={"nav__link"} href="#home">Home</a>
                    </li>
                    <li onClick={setPageHome} className={"nav__item"}>
                        <a className={"nav__link"} href="#services">My Services</a>
                    </li>
                    <li onClick={setPageHome} className={"nav__item"}>
                        <a className={"nav__link"} href="#about">About Me</a>
                    </li>
                    <li className={"nav__item"}>
                        <a onClick={setPageHome} className={"nav__link"} href="#work">My Work</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;
