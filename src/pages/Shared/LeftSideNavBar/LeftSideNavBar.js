import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LeftSideNavBar = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/courses')
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [])
  return (
    <div>
      <h4 className="font-monospace fw-bold mt-4">
        Our Courses:{courses.length}
      </h4>
      <div>
        {courses.map((course) => (
          <p
            className="font-monospace fw-bold bg-info rounded-2 p-2"
            key={course.id}
          >
            <Link>{course.name}</Link>
          </p>
        ))}
      </div>
    </div>
  )
}

export default LeftSideNavBar
