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

const Register = () => {
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

            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Email address"
              id="formControlLg"
              type="email"
              size="md"
            />
            <MDBInput
              wrapperClass="mb-2 mx-5 w-100"
              label="Name"
              id="formControlLg"
              type="name"
              size="md"
            />
            <MDBInput
              wrapperClass="mb-2 mx-5 w-100"
              label="photoURL"
              id="formControlLg"
              type="photoURL"
              size="md"
            />
            <MDBInput
              wrapperClass="mb-2 mx-5 w-100"
              label="Password"
              id="formControlLg"
              type="password"
              size="md"
            />

            <button className="bg-info px-3 mb-2 mx-5 rounded w-100">
              Register
            </button>

            <p className="ms-5">
              Already have an Account?{' '}
              <a href="#!" class="link-info">
                Sign here
              </a>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Register
