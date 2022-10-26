import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const SingleCourseDetails = () => {
  const { state } = useLocation()
  console.log(state)
  return (
    <div className="d-flex mt-3">
      <div className="w-50">
        <Card.Img variant="top" src={state.picture} />
      </div>
      <Card style={{ width: '18rem' }}>
        <div className="w-100">
          <Card.Body>
            <Card.Title>{state.title_name}</Card.Title>
            <Card.Text>{state.details}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Teacher Name:{state.teacher_name}</ListGroup.Item>
            <ListGroup.Item>Subject Name:{state.subject_name}</ListGroup.Item>
            <ListGroup.Item>Date: {state.published_date}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Download PDF</Card.Link>
            <Card.Link href="#">Premium Version</Card.Link>
          </Card.Body>
        </div>
      </Card>
    </div>
  )
}

export default SingleCourseDetails
