import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Admin from './Admin'; 
import Navbar from './Nav';
import Home from './Home';
import Owner from './Owner';
import User from './User';
import "./App.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <Home />
    </>
  },
  {
    path: '/user',
    element: <>
      <Navbar />
      <Home />
      <User />
    </>
  },
  {
    path: '/admin',
    element: <>
      <Navbar />
      <Home />
      <Admin />
    </>
  },
  {
    path: '/owner',
    element: <>
      <Navbar />
      <Owner />
    </>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
