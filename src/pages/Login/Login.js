import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import login from '../../assets/images/loginpic.jpg'
import { FaGithub, FaGoogle, IconName } from 'react-icons/fa'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  const [error, setError] = useState('')
  const { popUpGoogleLogin } = useContext(AuthContext)
  const { popUpWithGitLogin } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()
  const gitProvider = new GithubAuthProvider()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const { signIn } = useContext(AuthContext)
  const handleSignIn = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
    signIn(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        form.reset()
        setError('')
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.error(error)
        setError(error.message)
      })
  }

  const handleGoogleSign = () => {
    popUpGoogleLogin(googleProvider)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => console.error(error))
  }
  const handleGitSignIn = () => {
    popUpWithGitLogin(gitProvider)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => console.error(error))
  }
  return (
    <div className="d-flex">
      <div className="mt-4">
        <img src={login} alt="Login image" className="mt-4 w-100" />
      </div>

      <div>
        <h3
          className="font-monospace fw-bold mt-3 mb-3 ps-5 pb-3"
          style={{ letterSpacing: '1px' }}
        >
          Login
        </h3>
        <Form onSubmit={handleSignIn}>
          <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-2 w-100" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <p className="text-danger">{error}</p>
          <button className="bg-info px-3 mt-3 mx-2 rounded w-100">
            Login
          </button>
        </Form>
        <button
          onClick={handleGoogleSign}
          className="bg-info px-3 mt-3 mx-2 rounded w-100"
        >
          <FaGoogle></FaGoogle> Gmail
        </button>
        <button
          onClick={handleGitSignIn}
          className="bg-info px-3 mt-3 mx-2 rounded w-100"
        >
          <FaGithub></FaGithub> github
        </button>

        <p className="">
          <a class="text-muted mx-4" href="">
            Forgot password?
          </a>
        </p>
        <p className="">
          Don't have an account?
          <Link to="/register" class="link-info">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
