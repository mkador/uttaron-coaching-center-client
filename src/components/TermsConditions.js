import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const TermsConditions = () => {
  return (
    <div className="mt-5">
      <Card className="text-center">
        <Card.Header className="font-monospace fw-bold">
          Terms & Conditions
        </Card.Header>
        <Card.Body>
          <Card.Title>Follow Our Guideline</Card.Title>
          <Card.Text>
            <ul>
              Provide Your Valid Name <br />
              Provide Your Valid Email <br />
              Provide Your Valid Password <br />
              We will never share your information <br />
            </ul>
          </Card.Text>
          <Link to={'/register'}>Now,Go Back to Register</Link>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  )
}

export default TermsConditions
