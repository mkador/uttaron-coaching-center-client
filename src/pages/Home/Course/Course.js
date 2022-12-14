import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CourseCards from '../../Shared/CourseCards'

const Course = () => {
  const allCourses = useLoaderData()
  console.log(allCourses)
  return (
    <div>
      <h5 className="font-monospace fw-bold mt-4 text-center">
        Go Through Our Courses
      </h5>
      <div className="row">
        {allCourses.map((course) => (
          <CourseCards key={course.id} course={course}></CourseCards>
        ))}
      </div>
    </div>
  )
}

export default Course
