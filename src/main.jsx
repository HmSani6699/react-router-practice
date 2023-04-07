import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Photos from './component/Photos/Photos';
import PhotoDetails from './component/PhotoDetails/PhotoDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/photos',
        element: <Photos></Photos>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/photos')
      },
      {
        path: 'photo/:photoId',
        element: <PhotoDetails></PhotoDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
