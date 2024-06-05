import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard.tsx'
import Login from './pages/Login.tsx'
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster
        toastOptions={{
          success: {
            style: {
              fontSize: '14px',
              background: '#c1eaba',
            },
          },
          error: {
            style: {
              fontSize: '14px',
              background: '#ffdfd4',
            },
          },
        }}
        position='top-right'
      />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
