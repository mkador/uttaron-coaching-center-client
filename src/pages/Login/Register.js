import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import login from '../../assets/images/register.png'
import Form from 'react-bootstrap/Form'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'
import { Link } from 'react-router-dom'

const Register = () => {
  const [error, setError] = useState('')
  const { createUser } = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const photoURL = form.photoURL.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, photoURL, email)

    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        form.reset()
        setError()
      })
      .catch((error) => {
        console.error(error)
        setError(error.message)
      })
  }
  return (
    <div className="d-flex">
      <div>
        <img src={login} alt="Login image" className="w-100" />
      </div>
      <div>
        <h3
          className="font-monospace fw-bold mt-3 ps-5 pb-3"
          style={{ letterSpacing: '1px' }}
        >
          Register
        </h3>
        <Form onSubmit={handleSubmit} className="mt-4">
          <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter  Name" />
          </Form.Group>
          <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
            <Form.Label>Your Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photoURL"
              placeholder="Enter photoURL "
            />
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Text className="text-muted">
            <p className="text-danger">{error}</p>
          </Form.Text>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <p className="mt-2">
          Already have an account?
          <Link to="/login" class="link-info">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
