import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CourseCards from '../../Shared/CourseCards'

const Course = () => {
  const allCourses = useLoaderData()
  console.log(allCourses)
  return (
    <div>
      <h1>This is Home</h1>
      {allCourses.map((course) => (
        <CourseCards key={course.id} course={course}></CourseCards>
      ))}
    </div>
  )
}

export default Course
