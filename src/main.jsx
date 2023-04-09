import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Homes from './Components/Home/Homes';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<Homes/>,
        loader:()=> fetch('/public/jobs.json')
      },
      {
        path:"Statistics",
        element:<Statistics/>,
        
      },
      {
        path:"AppliedJobs",
        element:<AppliedJobs/>,
        
      },
      {
        path:"Blog",
        element:<Blog></Blog>,
        
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
