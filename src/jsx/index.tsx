import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Home from "./components/dashboard/Home";

import { AddItemPage } from "./pages/Items/AddItem";
import DefaultPageLayout from "./layouts/Default";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppDefaultsProvider } from "../context/app/app-defaults";
import { EditItemPage } from "./pages/Items/EditItem";
import { Routes, Route } from "react-router-dom";





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
      <AppDefaultsProvider>
        <DefaultPageLayout menuToggle={menuToggle} routes={<AppRoutes routes={routes} />} pagePath={pagePath}></DefaultPageLayout>
      </AppDefaultsProvider>
  </>
);
}

export default Page;
