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
import { mockEmployees } from './Home';

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
      <User mockEmployees = {mockEmployees}/>
    </>
  },
  {
    path: '/admin',
    element: <>
      <Navbar />
      <Home />
      <Admin mockEmployees = {mockEmployees}/>
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
