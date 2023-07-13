import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './Router/Router'
import AuthProvider from './authProvider/AuthProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routers}>

      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
