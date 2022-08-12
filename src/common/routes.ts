import {IRoute} from "App";
import {HomePage} from "components/HomePage";
import {ProductsPage} from "components/ProductsPage";

export const ROUTES : IRoute[]  = [
  {
    path: "/home",
    title: "Home",
    exact: true,
    component: HomePage,
  },
  {
    path: "/products",
    title: "Products",
    exact: true,
    component: ProductsPage,
  }
]