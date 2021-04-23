import { useDataLayerValue } from "../components/DataLayer";
import Home from "../pages/Home";
import PortfolioItemPage from "../pages/PortfolioItemPage";

function Router() {
    const [{ page }] = useDataLayerValue();
    switch (page) {
        case "portfolio-item":
        case "payfast-marketing":
        case "bike-shop":
        case "mediafreaks":
        case "netflix":
        case "skyagency":
        case "nasa-rover-api":
        case "black-friday-cm":
            return <PortfolioItemPage />
        case "home":
        default:
            window.history.pushState("", "", "/");
            return <Home />
    }
}

export default Router;
