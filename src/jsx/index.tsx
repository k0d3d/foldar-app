import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Home from "./components/dashboard/Home";

import "../scss/index.css";
import "../scss/chart.css";
import "../scss/step.css";
import { AddItemPage } from "./pages/Items/AddItem";
import DefaultPageLayout from "./layouts/Default";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";





function Page() {
  const { menuToggle } = useContext(ThemeContext);
  const queryClient = new QueryClient()


  const routes = [
    { url: "", component: <Home /> },
    { url: "dashboard", component: <Home /> },
    {
      url: "add-item",
      component: AddItemPage(),
    },
  ];

  const pathname = window.location.pathname;
  // let path = pathname.split("/");
  // path = path[path.length - 1];

  const pagePath = pathname.split("-").includes("page");

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <DefaultPageLayout menuToggle={menuToggle} routes={routes} pagePath={pagePath}></DefaultPageLayout>
      </QueryClientProvider>
    </>
  );
}

export default Page;
