import Navbar from "../components/Navbar";
import IntroComponent from "../components/IntroComponent";
import Footer from "../components/Footer";
import PortfolioIndividualItem from "../components/PortfolioIndividualItem";
import {useDataLayerValue} from "../components/DataLayer";


const PortfolioItemPage = () => {
    const [{
        intro,
        projectImage,
        subText,
        projectBannerImage,
        projectBodyText,
        projectIntroParagraph
    }, dispatch] = useDataLayerValue();

    return (
        <div>
            <Navbar />
            <IntroComponent
                intro={intro}
                projectImage={projectImage}
                subText={subText}
            />
            <PortfolioIndividualItem topParagraph={projectIntroParagraph} portfolioBannerImage={projectBannerImage} bottomBoddy={projectBodyText} />
            <Footer />
        </div>);
}

export default PortfolioItemPage;
