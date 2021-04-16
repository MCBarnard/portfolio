import devJane from "../assets/couple.jpg";
import "../css/components/AboutMe.css";

const AboutMe = () => {
    return (
        <section className={"about-me"} id={"about"}>
            <h2 className="section__title section__title--about">
                Who I am
            </h2>
            <p className="section__subtitle section__subtitle--about">Full Stack Developer based in Mossel Bay</p>
            <div className="about-me__body">
                <p>
                    I enjoy build software that looks and feels good. I have a very keen interest in the latest tech
                    stacks and I try to be proficient in as many as possible. I love learning and more often than not, you will find me
                    doing some course or following some YouTube tutorials.
                </p>
                <p>
                    I have gained an incredible amount of knowledge in the last few years, my favorite stack to work with has to be Laravel with Vue on top of that.
                    If we are working in micro services I prefer Laravel Lumen with Vue or React.
                </p>
            </div>

            <img className={"about-me__img"} src={devJane} alt=""/>
        </section>
    );
}

export default AboutMe;
