import "./../css/components/Footer.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <section className={"footer"}>
            <a href="mailto:thinusplanb97@gmail.com" className={"footer__link"}>thinusplanb97@gmail.com</a>
            <ul className="social-list">
                <li className={"social-list__item"}>
                    <a href="https://www.github.com/MCBarnard" target={"_blank"} className={"social-list__link"}>
                        <FaGithub />
                    </a>
                </li>
                <li className={"social-list__item"}>
                    <a href="https://za.linkedin.com/in/thinus-barnard-b03258169" target={"_blank"} className={"social-list__link"}>
                        <FaLinkedinIn />
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Footer;
