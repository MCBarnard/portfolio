import "../css/components/Services.css";
import background from "./../assets/services-bg.jpg";

const Services = () => {
    return (
        <section style={{backgroundImage: `url(${background})`}} className="my-services" id={"services"}>
            <h2 className="section__title section__title--services">
                What I do
            </h2>
            <div className="services">
                <div className="service">
                    <h3>PHP</h3>
                    <p>
                        I love the laravel framework, it just feels like everything is solid and it does what you expect.
                        <br/><rb></rb>I have worked with Lumen ( a laravel micro framework ) to build various API's and also have experience writing API docs with swagger hub for the APIs.
                    </p>
                </div>
                <div className="service">
                    <h3>Javascript</h3>
                    <p>
                        Whether it be Vue, React or jQuery, I am experienced in quiet a few JavaScript libraries and frameworks.
                        <br/><br/>I learn new frameworks very easily and it excites me to work with various stacks.
                    </p>
                </div>
                <div className="service">
                    <h3>Python</h3>
                    <p>
                        I have experience with Django and flask and have built a few pieces of software with both of these, I do however prefer django.
                        <br/><br/>While coming from a solid php background, I am always willing to learn new ways of doing things.
                    </p>
                </div>
            </div>
            <a href="#work" className={"btn"}>View My Work</a>
        </section>
    );
}

export default Services;
