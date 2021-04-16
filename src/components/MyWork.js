import payfastMarketing from "./../assets/pf-marketing.jpg";
import payfastBlackFriday from "./../assets/PayFastBFCM.png";
import portfolioImage3 from "./../assets/portfolio-03.jpg";
import portfolioImage4 from "./../assets/portfolio-04.jpg";
import portfolioImage5 from "./../assets/portfolio-05.jpg";
import portfolioImage6 from "./../assets/portfolio-06.jpg";
import thinus1 from "../assets/thinus.png";

import "../css/components/MyWork.css";
import { useDataLayerValue } from "./DataLayer";

const MyWork = () => {
    const [{}, dispatch] = useDataLayerValue();
    function filterProjects(project) {
        switch (project) {
            case "payfast-marketing":
                return {
                    projectTitle: "PayFast",
                    projectImage: thinus1
                }
        }
    }
    function goToItem(project) {
        const pageObject = filterProjects(project);
        dispatch({
            type: "SET_PROJECT",
            project: project,
            projectTitle: pageObject.projectTitle,
            projectImage: pageObject.projectImage
        });
        dispatch({
            type: "SET_PAGE",
            page: "portfolio-item"
        });
    };
    return (
        <section className={"my-work"} id={"work"}>
            <h2 className="section__title section__title--work">
                My Work
            </h2>
            <p className={"section__subtitle section__subtitle--work"}>
                A Selection of my range of work
            </p>
            <div className="portfolio">
                {/* https://www.payfast.co.za */}
                <a onClick={() => {goToItem('payfast-marketing')}} href="#" className={"portfolio__item"}>
                    <img title={"PayFast Marketing Website"} className={"portfolio__img"} src={payfastMarketing} alt=""/>
                </a>
                {/* https://bf.payfast.co.za/ */}
                <a href="#" className={"portfolio__item"}>
                    <img title={"PayFast Black Friday Dashboard Tracker"} className={"portfolio__img"} src={payfastBlackFriday} alt=""/>
                </a>
                <a href="#" className={"portfolio__item"}>
                    <img className={"portfolio__img"} src={portfolioImage3} alt=""/>
                </a>
                <a href="#" className={"portfolio__item"}>
                    <img className={"portfolio__img"} src={portfolioImage4} alt=""/>
                </a>
                <a href="#" className={"portfolio__item"}>
                    <img className={"portfolio__img"} src={portfolioImage5} alt=""/>
                </a>
                <a href="#" className={"portfolio__item"}>
                    <img className={"portfolio__img"} src={portfolioImage6} alt=""/>
                </a>
            </div>
        </section>
    );
}

export default MyWork;
