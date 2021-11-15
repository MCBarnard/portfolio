import { useDataLayerValue } from "../components/DataLayer";
import Home from "../pages/Home";
import PortfolioItemPage from "../pages/PortfolioItemPage";

function Router() {
    const [{ page }] = useDataLayerValue();
    switch (page) {
        case "portfolio-item":
        case "payfast-marketing":
        case "payfast-sandbox":
        case "bike-shop":
        case "mediafreaks":
        case "netflix":
        case "skyagency":
        case "nasa-rover-api":
        case "2020-black-friday-cm":
        case "2021-black-friday-cm":
        case "payfast-merchant-dashboard":
        case "chat-app":
            return <PortfolioItemPage />
        case "home":
        default:
            window.history.pushState("", "", "/");
            return <Home />
    }
}

export default Router;
