import { useState, useEffect } from 'react'
import { api } from '../utils/apiHelper'
import CourseCard from './CourseCard'
import CourseAddCard from './CourseAddCard'
import Loading from './Loading'

const Courses = () => {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCourses = async () => {
    const res = await api('/courses')
    const data = await res.json()
    setCourses(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  const CourseListing = 
    courses.map(course => <CourseCard course={course} key={course.id} />)

  return (
    <main>
      <div className="wrap main--grid">
        { loading ? <Loading /> : 
          <> {CourseListing}<CourseAddCard /> </> }
      </div>
    </main>
  )
}

export default Courses