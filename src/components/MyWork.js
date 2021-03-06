import payfastMarketing from "./../assets/pf-marketing.jpg";
import chatAppInterface from "./../assets/projects/chat-app-profile-page.png";
import payfastBlackFriday from "./../assets/projects/bfcm 2020.jpeg";
import payfastBlackFriday2021 from "./../assets/projects/live-bfcm-2021.png";
import payfastMerchantDashboard from "./../assets/projects/Payfast-Merchant-Dashboard.png";
import totem from "./../assets/biking-thumbnail.jpg";
import mediafreaks from "./../assets/thumbnail-mediaAddicts.jpg";
import netflixSm from "./../assets/netflix-clone.png";
import skyagencysm from "./../assets/sky-thumbnail.jpg";
import nasaThumb from "../assets/nasa-thumbnail-portfolio.jpg";
import payfastSandbox from "./../assets/projects/PayFast-Sandbox.png";
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
    }
    return (
        <section className={"my-work"} id={"work"}>
            <h2 className="section__title section__title--work">
                My Work
            </h2>
            <p className={"section__subtitle section__subtitle--work"}>
                A Selection of my range of work
            </p>
            <div className="portfolio">
                {/* http://thinus-chat-app.herokuapp.com/ */}
                <a onClick={() => {goToItem('chat-app')}} href="#" className={"portfolio__item"}>
                    <img title={"Chat Application"} className={"portfolio__img"} src={chatAppInterface} alt=""/>
                </a>
                {/* https://www.payfast.co.za */}
                <a onClick={() => {goToItem('payfast-marketing')}} href="#" className={"portfolio__item"}>
                    <img title={"PayFast Marketing Website"} className={"portfolio__img"} src={payfastMarketing} alt=""/>
                </a>
                {/* https://bf.payfast.co.za/ */}
                <a onClick={() => {goToItem('2020-black-friday-cm')}} href="#" className={"portfolio__item"}>
                    <img title={"PayFast Black Friday Dashboard Tracker"} className={"portfolio__img"} src={payfastBlackFriday} alt=""/>
                </a>
                {/* https://bf.payfast.co.za/ */}
                <a onClick={() => {goToItem('2021-black-friday-cm')}} href="#" className={"portfolio__item"}>
                    <img title={"PayFast Black Friday Dashboard Tracker"} className={"portfolio__img"} src={payfastBlackFriday2021} alt=""/>
                </a>
                {/* https://thinus-bike-shop.web.app/ */}
                {/*<a onClick={() => {goToItem('bike-shop')}} href="#" className={"portfolio__item"}>*/}
                {/*    <img title={"Bike Shop Experiment"} className={"portfolio__img"} src={totem} alt=""/>*/}
                {/*</a>*/}
                {/* https://nasa-mars-rover.web.app/ */}
                <a onClick={() => {goToItem('nasa-rover-api')}} href="#" className={"portfolio__item"}>
                    <img title={"Nasa Mars Rover API"} className={"portfolio__img"} src={nasaThumb} alt=""/>
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
                {/*<a onClick={() => {goToItem('skyagency')}} href="#" className={"portfolio__item"}>*/}
                {/*    <img title={"Sky Agency Polygraphs"} className={"portfolio__img"} src={skyagencysm} alt=""/>*/}
                {/*</a>*/}
                {/* https://sandbox.payfast.co.za/ */}
                <a onClick={() => {goToItem('payfast-sandbox')}} href="#" className={"portfolio__item"}>
                    <img title={"PayFast Sandbox"} className={"portfolio__img"} src={payfastSandbox} alt=""/>
                </a>
                {/* https://www.payfast.co.za */}
                <a onClick={() => {goToItem('payfast-merchant-dashboard')}} href="#" className={"portfolio__item"}>
                    <img title={"PayFast Merchant Dashboard"} className={"portfolio__img"} src={payfastMerchantDashboard} alt=""/>
                </a>
            </div>
            <p className={"section__subtitle section__subtitle--work bottom"}>
                Checkout my GitHub for more of my project that aren't hosted at the moment!
            </p>
        </section>
    );
}

export default MyWork;
