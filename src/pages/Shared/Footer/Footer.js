import React from 'react'

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit'
import {
  FaFacebook,
  FaGoogle,
  FaHome,
  FaInstagram,
  FaMobile,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="text-center me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <FaFacebook></FaFacebook>
          </a>
          <a href="" className="me-4 text-reset">
            <FaWhatsapp></FaWhatsapp>
          </a>
          <a href="" className="me-4 text-reset">
            <FaTwitter></FaTwitter>
          </a>
          <a href="" className="me-4 text-reset">
            <FaInstagram></FaInstagram>
          </a>
          <a href="" className="me-4 text-reset">
            <FaTelegram></FaTelegram>
          </a>
          <a href="" className="me-4 text-reset">
            <FaGoogle></FaGoogle>
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Uttaron Coaching Center(UCC)
              </h6>
              <p>
                People invest their time, money, energy or attention on things
                that bring value. We all want to improve, fix, change, grow,
                experience things in life that enrich it.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">future courses</h6>
              <p>
                <a href="#!" className="text-reset">
                  BCS Job Preparation
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Govt. Job Preparation
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Bank Job Preparation
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  University Admission Preparation
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Our Branches</h6>

              <p>
                <a href="#!" className="text-reset">
                  Mirpur-2
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Dhanmondi-32
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Gulshan
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome></FaHome>
                Road-13, House-13 <br />
                Rupbagor R/A, Mirpur-2,Dhaka
              </p>
              <p>
                <FaGoogle></FaGoogle>
                uttaron50@gmail.com
              </p>
              <p>
                <FaMobile></FaMobile> +8801737597248
              </p>
              <p>
                <FaMobile></FaMobile> +8801737597248
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://uttaron.com/">
          uttaron.com
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
