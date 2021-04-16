import "./../css/components/PortfolioIndividualItem.css";
import PortfolioDetailsImage from "../assets/portfolio-details.jpg";

const PortfolioIndividualItem = ({project}) => {
    return (
        <div className={"portfolio-item-individual"}>
            <p>
                The PayFast Marketing website was the first ever professional site I was part of. We were a team of
                6 (Including the design team) and we had a lot to learn.
            </p>
            <img src={PortfolioDetailsImage} alt=""/>
            <p>
                We used Laravel and jQuery throughout the website, learning the in's and out's of HTML, Scss, JavaScript and laravel. The project took us just short
                of a year to complete and we are still busy with continued updates.
            </p>
            <br/>
            <p>
                The most complex pages of the site for me were definitely
                the <a target={"_blank"} href="https://www.payfast.co.za/integration/shopping-carts">Cart Plugin listing page</a>
                and the <a target={"_blank"} href="https://www.payfast.co.za/contact">Contact us page</a>. I am extremely proud to say that I was
                part of most aspects of the page and it's functionality.
            </p>
        </div>
    );
}

export default PortfolioIndividualItem;
