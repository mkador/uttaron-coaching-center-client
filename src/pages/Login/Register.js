import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from 'mdb-react-ui-kit'
import register from '../../assets/images/register.png'

import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

const Register = () => {
  const handleSubmit = (event) => {
    console.log('clicked')
  }
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img src={register} alt="Login image" className=" mt-5 rounded" />
        </MDBCol>
        <MDBCol sm="6">
          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-normal mb-3 ps-5 pb-2"
              style={{ letterSpacing: '1px' }}
            >
              Register
            </h3>

            <Form>
              <input
                wrapperClass="mb-2 mx-5 w-100"
                label="Name"
                type="text"
                size="md"
                name="name"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                size="md"
                name="email"
              />

              <MDBInput
                wrapperClass="mb-2 mx-5 w-100"
                label="photoURL"
                id="formControlLg"
                type="photoURL"
                size="md"
                name="text"
              />
              <MDBInput
                wrapperClass="mb-2 mx-5 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="md"
                name="password"
              />

              <Button
                onClick={handleSubmit}
                className="bg-info px-3 mb-2 mx-5 rounded w-100"
              >
                Register
              </Button>
            </Form>

            <p className="ms-5">
              Already have an Account?{' '}
              <Link to="/register" class="link-info">
                Sign here
              </Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Register
