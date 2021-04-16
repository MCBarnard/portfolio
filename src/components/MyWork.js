import payfastMarketing from "./../assets/pf-marketing.jpg";
import payfastBlackFriday from "./../assets/bfcm.png";
import totem from "./../assets/totem.png";
import mediafreaks from "./../assets/mediafreaks-sm.png";
import netflixSm from "./../assets/netflix-clone.png";
import skyagencysm from "./../assets/skyagencysm.png";
import PageDataStore from "../lib/PageDataStore";

import "../css/components/MyWork.css";
import { useDataLayerValue } from "./DataLayer";

const MyWork = () => {
    const [{}, dispatch] = useDataLayerValue();

    function goToItem(project) {
        const pageObject = PageDataStore(project);
        dispatch({
            type: "SET_PROJECT",
            project: project,
            intro: pageObject.intro,
            subText: pageObject.subText,
            projectImage: pageObject.projectImage,
            projectBannerImage: pageObject.projectBannerImage,
            projectIntroParagraph: pageObject.projectIntroParagraph,
            projectBodyText: pageObject.projectBodyText,
        });
        dispatch({
            type: "SET_PAGE",
            page: project
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
                <a onClick={() => {goToItem('black-friday-cm')}} href="#" className={"portfolio__item"}>
                    <img title={"PayFast Black Friday Dashboard Tracker"} className={"portfolio__img"} src={payfastBlackFriday} alt=""/>
                </a>
                {/* https://thinus-bike-shop.web.app/ */}
                <a onClick={() => {goToItem('bike-shop')}} href="#" className={"portfolio__item"}>
                    <img title={"Bike Shop Experiment"} className={"portfolio__img"} src={totem} alt=""/>
                </a>
                {/* https://mediaaddicts.herokuapp.com/ */}
                <a onClick={() => {goToItem('mediafreaks')}} href="#" className={"portfolio__item"}>
                    <img title={"Media Freaks Marketing"} className={"portfolio__img"} src={mediafreaks} alt=""/>
                </a>
                {/* https://thinus-netflix-clone.web.app/ */}
                <a onClick={() => {goToItem('netflix')}} href="#" className={"portfolio__item"}>
                    <img title={"Netflix Clone"} className={"portfolio__img"} src={netflixSm} alt=""/>
                </a>
                {/* https://skyagency.herokuapp.com/ */}
                <a onClick={() => {goToItem('skyagency')}} href="#" className={"portfolio__item"}>
                    <img title={"Sky Agency Polygraphs"} className={"portfolio__img"} src={skyagencysm} alt=""/>
                </a>
            </div>
        </section>
    );
}

export default MyWork;
