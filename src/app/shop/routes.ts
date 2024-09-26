import { publicRoutes } from "app/utils/router";
import { URLS } from "shared/utils";
import ComparePage from "./pages/ComparePage";
import ProductPage from "./pages/ProductDetailsPage/ProductPage";
import ShopPage from "./pages/ShopPage";

publicRoutes([
  {
    path: URLS.shop.list,
    component: ShopPage,
  },
  {
    path: URLS.shop.viewProductRoute,
    component: ProductPage,
  },
  {
    path: URLS.compare,
    component: ComparePage,
  },
]);