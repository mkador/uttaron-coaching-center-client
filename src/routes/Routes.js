import { createBrowserRouter } from 'react-router-dom'
import SingleCourseDetails from '../components/SingleCourseDetails'
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
        path: '/courses/:id',
        element: <Course></Course>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses_details/${params.id}`),
      },
      {
        path: '/courses',
        element: <Course></Course>,
        loader: () => fetch('http://localhost:5000/coursesDetails'),
      },
      {
        path: '/course/:id',
        element: <SingleCourseDetails></SingleCourseDetails>,
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
