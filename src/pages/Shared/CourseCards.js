import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import {
  FaCartArrowDown,
  FaEye,
  FaRegBookmark,
  FaShare,
  FaStar,
} from 'react-icons/fa'

const CourseCards = ({ course }) => {
  const {
    id,
    title_name,
    details,
    subject_name,
    total_sell,
    ratings,
    picture,
  } = course
  return (
    <div className="col-12 col-md-6">
      <CardGroup>
        <Card className="d-flex mb-5">
          <Card.Body>
            <Card.Title>{title_name}</Card.Title>
            <p>{subject_name}</p>

            <Card.Img
              variant="top"
              className=""
              style={{ height: '200px' }}
              src={picture}
            />
            <Card.Text>
              {details.length > 50 ? (
                <>
                  {' '}
                  {details.slice(0, 100) + '...'}{' '}
                  <Link to={`/course/${course.id}`}>
                    <Button variant="info">Get Permission</Button>
                  </Link>{' '}
                </>
              ) : (
                <>{details}</>
              )}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <div>
              <FaStar className="text-warning me-2"></FaStar>
              <FaStar className="text-warning me-2"></FaStar>
              <FaStar className="text-warning me-2"></FaStar>

              <span></span>
            </div>
            <div>
              <p>Total Sell:</p>
              <FaCartArrowDown className="me-3"></FaCartArrowDown>
              <span>{total_sell}</span>
            </div>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  )
}

export default CourseCards
