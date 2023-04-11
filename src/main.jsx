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
import ReviewPage from './Components/ReviewPage/ReviewPage';
import ErrorElement from './Components/ErrorElement/ErrorElement';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home></Home>,
    errorElement:<ErrorElement/>,
    children:[
      {
        path:"/",
        element:<Homes/>,
        loader:()=> fetch('/public/jobs.json')
      },
      {
        path:"ReviewPage/:id",
        element:<ReviewPage/>,
        loader:({params})=> fetch(`/public/jobs.json`)
      },
      {
        path:"Statistics",
        element:<Statistics/>,
        loader:()=> fetch('/public/rechart.json')
        
      },
      {
        path:"AppliedJobs",
        element:<AppliedJobs/>,
        
      },
      {
        path:"Blog",
        element:<Blog></Blog>,
        
      },
      {
        path:"ReviewPage",
        element:<ReviewPage/>,
        
      },
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
