import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Show_appointment from './components/Show_appointment/Show_appointment.jsx'
import Book_appointment from './components/Book_appointment/Book_appointment.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'show-appointment',
        element: <Show_appointment />
      },
      {
        path: 'book-appointment',
        element: <Book_appointment />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
