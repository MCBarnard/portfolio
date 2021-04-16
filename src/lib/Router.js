import { useDataLayerValue } from "../components/DataLayer";
import Home from "../pages/Home";
import PortfolioItemPage from "../pages/PortfolioItemPage";

function Router() {
    const [{ page }] = useDataLayerValue();
    switch (page) {
        case "portfolio-item":
            return <PortfolioItemPage />
        case "home":
        default:
            return <Home />
    }
}

export default Router;
