import "./../css/components/PortfolioIndividualItem.css";

const PortfolioIndividualItem = ({ topParagraph ,portfolioBannerImage, bottomBoddy}) => {
    return (
        <div className={"portfolio-item-individual"}>
            {topParagraph}
            <img src={portfolioBannerImage} alt=""/>
            {bottomBoddy}
        </div>
    );
}

export default PortfolioIndividualItem;
