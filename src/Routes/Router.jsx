import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Components/Root/Root';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import About from '../Pages/About';

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
    loader:()=>fetch("/public/booksData.json"),
    index:true,
    Component:Home,
   
  },
  { 
    loader:()=>fetch("/public/booksData.json"),
    path:"/about/:id",
    Component:About,
   
  },
    ]
  },
  
  

]);