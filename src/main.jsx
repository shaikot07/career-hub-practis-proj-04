import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Component/Root/Root.jsx'
import Home from './Component/Home/Home.jsx'
import AppliedJobs from './Component/AppliedJobs/AppliedJobs.jsx'
import ErrorPage from './Component/ErrorPage/ErrorPage'
import JobDetails from './Component/JobDetails/JobDetails'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('/jobs.json')
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=> fetch('../jobs.json')
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
