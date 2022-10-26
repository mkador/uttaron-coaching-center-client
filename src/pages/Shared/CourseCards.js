import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
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
    <CardGroup>
      <Card style={{ width: '18rem' }} className="d-flex mb-5">
        <Card.Body>
          <Card.Title>{title_name}</Card.Title>

          <Card.Img variant="top" className="" src={picture} />
          <Card.Text>
            {details.length > 200 ? (
              <>
                {' '}
                {details.slice(0, 250) + '...'}{' '}
                <Link to={`/course/${course.id}`}>Read More</Link>{' '}
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
  )
}

export default CourseCards
