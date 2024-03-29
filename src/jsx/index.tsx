import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Home from "./components/dashboard/Home";

import { AddItemPage } from "./pages/Item/AddItem";
import DefaultPageLayout from "./layouts/Default";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRootProvider } from "../context/app/app-root";
import { EditItemPage } from "./pages/Item/EditItem";
import { Routes, Route } from "react-router-dom";
import ListCartPage from "./pages/cart/list-cart";
import { AddSupplierPage } from "./pages/supplier/AddSupplier";
import ListOrderPage from "./pages/order/ListOrder";





function Page() {
  const { menuToggle } = useContext(ThemeContext);
  const queryClient = new QueryClient()


  const routes = [
    { url: "", component: <Home /> },
    { url: "dashboard", component: <Home /> },
    {
      url: "add-item",
      component: <AddItemPage />,
    },
    {
      url: "edit-item/:itemId",
      component: <EditItemPage />,
    },
    {
      url: "cart",
      component: <ListCartPage />,
    },
    {
      url: "add-supplier",
      component: <AddSupplierPage />,
    },
    {
      url: "orders",
      component: <ListOrderPage />,
    },
  ];

  const pathname = window.location.pathname;
  // let path = pathname.split("/");
  // path = path[path.length - 1];

  const pagePath = pathname.split("-").includes("page");

  const AppRoutes = (props) => {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {props.routes.map((data, i) => <Route key={i} path={`/${data.url}`} element={data.component} />)}
      </Routes>
    </QueryClientProvider>
  )
}

return (
  <>
      <AppRootProvider>
        <DefaultPageLayout menuToggle={menuToggle} routes={<AppRoutes routes={routes} />} pagePath={pagePath}></DefaultPageLayout>
      </AppRootProvider>
  </>
);
}

export default Page;
