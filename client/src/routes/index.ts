import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../pages/Search"));
const Cart = lazy(() => import("../pages/Cart"));

import Loder from "../components/Loder";
 export {
    Home,
    Search,
    Cart,
    Loder
}