import "../css/pages/Home.css";
import IntroComponent from "../components/IntroComponent";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import AboutMe from "../components/AboutMe";
import MyWork from "../components/MyWork";
import Footer from "../components/Footer";
import thinus1 from "./../assets/thinus.png";

const Home = () => {
    return (
        <div className={"home"}>
            <Navbar />
            <IntroComponent
                intro={<span>Hi, I am <strong>Thinus Barnard</strong></span>}
                projectImage={thinus1}
                subText={"front-end/fullstack dev"}
            />
            <Services />
            <AboutMe />
            <MyWork />
            <Footer />
        </div>
    )
}
export default Home;
