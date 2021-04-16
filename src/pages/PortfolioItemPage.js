import Navbar from "../components/Navbar";
import IntroComponent from "../components/IntroComponent";
import Footer from "../components/Footer";
import PortfolioIndividualItem from "../components/PortfolioIndividualItem";
import {useDataLayerValue} from "../components/DataLayer";

const PortfolioItemPage = () => {
    const [{project, projectTitle, projectImage}, dispatch] = useDataLayerValue();

    return (
        <div>
            <Navbar />
            <IntroComponent
                intro={<span><small>Marketing Website for</small> <strong>{projectTitle}</strong></span>}
                projectImage={projectImage}
                subText={"front-end/fullstack dev"}
            />
            <PortfolioIndividualItem project={project}/>
            <Footer />
        </div>);
}

export default PortfolioItemPage;
