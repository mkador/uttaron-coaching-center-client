import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from 'mdb-react-ui-kit'
import login from '../../assets/images/loginpic.jpg'
import { FaGithub, FaGoogle, IconName } from 'react-icons/fa'

const Login = () => {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img src={login} alt="Login image" className="w-100" />
        </MDBCol>
        <MDBCol sm="6">
          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: '1px' }}
            >
              Log in
            </h3>

            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
            />

            <button className="bg-info px-3 mb-2 mx-5 rounded w-100">
              Login
            </button>
            <button className="bg-info px-3 mb-2 mx-5 rounded w-100">
              <FaGoogle></FaGoogle> Gmail
            </button>
            <button className="bg-info px-3 mb-2 mx-5 rounded w-100">
              <FaGithub></FaGithub> github
            </button>
            <p className="small mb-2 pb-lg-3 ms-4">
              <a class="text-muted mx-4" href="#!">
                Forgot password?
              </a>
            </p>
            <p className="ms-5">
              Don't have an account?{' '}
              <a href="#!" class="link-info">
                Register here
              </a>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Login
