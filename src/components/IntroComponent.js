import "./../css/components/IntroComponent.css";

const IntroComponent = ({intro, subText, projectImage}) => {
    return (
        <section className={"intro"} id={"home"}>
            <h1 className="section__title section__title--intro">
                {intro}
            </h1>
            <p className={"section__subtitle section__subtitle--intro"}>
                {subText}
            </p>
            <img className={"intro__img"} src={projectImage} alt=""/>
        </section>
    )
}

export default IntroComponent;
