import { createBrowserRouter } from 'react-router-dom'
import SingleCourseDetails from '../components/SingleCourseDetails'
import TermsConditions from '../components/TermsConditions'
import Main from '../layouts/Main'
import Blog from '../pages/Blog/Blog'
import Faq from '../pages/FAQ/Faq'
import Course from '../pages/Home/Course/Course'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Login/Register'
import PrivateRoute from './PrivateRoute'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/courses/:id',
        element: <Course></Course>,
        loader: ({ params }) =>
          fetch(
            `https://uttaron-coaching-center-server.vercel.app/courses_details/${params.id}`,
          ),
      },
      {
        path: '/courses',
        element: <Course></Course>,
        loader: () =>
          fetch(
            'https://uttaron-coaching-center-server.vercel.app/coursesDetails',
          ),
      },
      {
        path: '/course/:id',
        element: (
          <PrivateRoute>
            <SingleCourseDetails></SingleCourseDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://uttaron-coaching-center-server.vercel.app/course_details/${params.id}`,
          ),
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
      {
        path: '/terms_conditions',
        element: <TermsConditions></TermsConditions>,
      },
    ],
  },
])
