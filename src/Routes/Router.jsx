import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Reaslist from "../Pages/Reaslist";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      
      {
        loader: () => fetch("/booksData.json"),
        index: true,
        Component: Home,
      },
      {
        loader: () => fetch("/booksData.json"),
        path: "/about/:id",
        Component: About,
      },
       {
        
        loader: () => fetch("/booksData.json"),
        path: "readlist",
        Component:Reaslist,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
