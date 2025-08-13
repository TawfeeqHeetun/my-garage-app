import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

import HomePage from './pages/Home.jsx' 
import AppointmentCalender from './pages/AppointmentCalender.jsx' 
import Receipts from './pages/Receipts.jsx' 
import Register from './pages/Register.jsx' 
import Signin from './pages/SignIn.jsx' 
import Stock from './pages/Stock.jsx' 
import ErrorPage from './pages/Error.jsx'
 
import './main.css'  

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path:'/apponitmentCalender',
    element: <AppointmentCalender />,
  },
  {
    path:'/receipts',
    element: <Receipts />,
  },
  {
    path:'/register',
    element: <Register />,
  },
  {
    path:'/signin',
    element: <Signin />,
  },
  {
    path:'/stock',
    element: <Stock />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
