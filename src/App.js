
import React from "react";
import ReactDOM from "react-dom/client";
import ContactDisplay from './contacts/Contact_display';
import EditContact from "./contacts/EditContact"
import CreateContact from "./form/Contact_form"
import SearchComponent from "./search/ContactSearch"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactDisplay/>,
  },
  {
    path: "/edit-contact",
    element: <EditContact/>,
  },
  {
    path: "/add-contact",
    element: <CreateContact/>,

  },
  {
    path: "/searchComponent",
    element: <SearchComponent/>,

  }


]);

const App=()=>{
    return <RouterProvider router={router} />
 };

export default App;
