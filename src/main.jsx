import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Homes from './Components/Home/Homes';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<Homes/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
