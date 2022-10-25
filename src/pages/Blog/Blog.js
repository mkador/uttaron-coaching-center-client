import React from 'react'
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit'

const Blog = () => {
  return (
    <MDBContainer>
      <section>
        <MDBTypography
          tag="h3"
          className="text-center mb-3 mt-4 pb-2 text-primary fw-bold"
        >
          Questions & Answers
        </MDBTypography>
        <p className="text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>

        <MDBRow>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon far icon="paper-plane text-primary pe-2" /> What is cors?
            </MDBTypography>
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="pen-alt text-primary pe-2" /> Why are you using
              firebase?
            </MDBTypography>
            <p>
              Firebase Authentication aims to make building secure
              authentication systems easy, while improving the sign-in and
              onboarding experience for end users. It provides an end-to-end
              identity solution, supporting email and password accounts, phone
              auth, and Google, Twitter, Facebook, and GitHub login, and more
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="book-open text-primary pe-2" /> Another
              question that is longer than usual
            </MDBTypography>
            <p>
              Node.js accepts the request from the clients and sends the
              response, while working with the request node.js handles them with
              a single thread. To operate I/O operations or requests node.js use
              the concept of threads. Thread is a sequence of instructions that
              the server needs to perform. It runs parallel on the server to
              provide the information to multiple clients. Node.js is an event
              loop single-threaded language. It can handle concurrent requests
              with a single thread without blocking it for one request.
              <br /> Node.js basically works on two concept
              <br /> Asynchronous
              <br /> Non-blocking I/O
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="rocket text-primary pe-2" /> How does the
              private route work?
            </MDBTypography>
            <p>
              The react private route component renders child components (
              children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="home text-primary pe-2" /> What is Node??
            </MDBTypography>
            <p>
              Node allows developers to write JavaScript code that runs directly
              in a computer process itself instead of in a browser. Node can,
              therefore, be used to write server-side applications with access
              to the operating system, file system, and everything else required
              to build fully-functional applications.
            </p>
          </MDBCol>

          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="user text-primary pe-2" /> What other options
              do you have to implement authentication in Firebase?
            </MDBTypography>
            <p>
              On this page. <br />
              Connect your app to Firebase. <br />
              Add Firebase Authentication to your app. <br />
              <br />
              Check current auth state. <br />
              Sign up new users. <br />
              Sign in existing users. <br />
              Access user information.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  )
}

export default Blog
