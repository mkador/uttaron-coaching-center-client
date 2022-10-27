import React from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const SingleCourseDetails = () => {
  const singleCourse = useLoaderData()

  return (
    <div className="d-flex mt-3">
      <div className="w-50">
        <Card.Img variant="top" src={singleCourse.picture} />
      </div>
      <Card style={{ width: '18rem' }}>
        <div className="w-100">
          <Card.Body>
            <Card.Title>{singleCourse.title_name}</Card.Title>
            <Card.Text>{singleCourse.details}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Teacher Name:{singleCourse.teacher_name}
            </ListGroup.Item>
            <ListGroup.Item>
              Subject Name:{singleCourse.subject_name}
            </ListGroup.Item>
            <ListGroup.Item>Date: {singleCourse.published_date}</ListGroup.Item>
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
