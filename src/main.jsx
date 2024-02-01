import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./main.css"

import NotFound from './NotFoundPage.jsx'
import LoginPage from './LoginPage.jsx'
import ListasLayout from './Listas/ListasLayout.jsx'
import ListasPage from './Listas/ListasPage.jsx'
import CrearListaPage from './Listas/CrearListaPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFound />
  },
  {
    path: "/listas",
    element: <ListasLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/listas",
        element: <ListasPage />
      },
      {
        path: "crear",
        element: <CrearListaPage />
      }
    ]
  },
  {
    path: "/listas/crear",
    element: <p>Crear lista</p>,
    errorElement: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
