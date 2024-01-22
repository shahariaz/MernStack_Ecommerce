import {lazy} from 'react'
const Dashboard = lazy(() => import("../pages/admin/dashboard"));
const Products = lazy(() => import("../pages/admin/products"));
const Customers = lazy(() => import("../pages/admin/customers"));
const Transaction = lazy(() => import("../pages/admin/transaction"));
const Barcharts = lazy(() => import("../pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("../pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("../pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("../pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("../pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("../pages/admin/apps/toss"));
const NewProduct = lazy(() => import("../pages/admin/management/newproduct"));
const ProductManagement = lazy(
  () => import("../pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("../pages/admin/management/transactionmanagement")
);

export {
    Dashboard,
    Products,
    Customers,
    Transaction,
    Barcharts,
    Piecharts,
    Linecharts,
    Coupon,
    Stopwatch,
    Toss,
    NewProduct,
    ProductManagement,
    TransactionManagement,
}