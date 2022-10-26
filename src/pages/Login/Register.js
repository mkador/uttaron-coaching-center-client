import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import login from '../../assets/images/register.png'
import Form from 'react-bootstrap/Form'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'
import { Link } from 'react-router-dom'

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const photoURL = e.target.photoURL.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(name, photoURL, email)

    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => console.error(error))
  }
  return (
    <div className="d-flex">
      <div>
        <img src={login} alt="Login image" className="w-100" />
      </div>
      <div>
        <h3
          className="fw-normal mb-2 ps-5 pb-3 mt-3"
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
            We'll never share your email with anyone else.
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
