import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './Router/Router'
import AuthProvider from './authProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const querClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <QueryClientProvider client={querClient}>
      <AuthProvider>
        <RouterProvider router={routers}>

        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
