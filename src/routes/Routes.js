import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Blog from '../pages/Blog/Blog'
import Faq from '../pages/FAQ/Faq'
import Course from '../pages/Home/Course/Course'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Login/Register'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/course/:id',
        element: <Course></Course>,
        loader: ({ params }) => fetch(`./Data/courses.json${params.id}`),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/faq',
        element: <Faq></Faq>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
])
