import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Components/Root/Root';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
    path: "*",
    Component:Error,
  },
  {
    index:true,
    Component:Home,
  },
    ]
  },
  
  

]);