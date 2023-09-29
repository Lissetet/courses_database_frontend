import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../utils/apiHelper'
import UserContext from '../context/UserContext'
import CourseCard from './CourseCard'
import CourseAddCard from './CourseAddCard'
import Loading from './Loading'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { authUser } = useContext(UserContext);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api('/courses')
        const data = await res.json()
        setCourses(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        navigate('/error')
      }
    }
    
    fetchCourses()
  }, [navigate])

  const CourseListing = 
    courses.map(course => <CourseCard course={course} key={course.id} />)

  return (
    <main>
      <div className="wrap main--grid">
        { loading ? <Loading /> : <>{CourseListing}</> }
        { (!loading && authUser) ? <CourseAddCard /> : null }
      </div>
    </main>
  )
}

export default Courses