import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../utils/apiHelper'
import UserContext from '../context/UserContext';
import CourseForm from './CourseForm'
import Loading from './Loading'
import ErrorsDisplay from './ErrorsDisplay';

const CourseDetail = () => {
  const [course, setCourse] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState([])
  const { authUser, credentials } = useContext(UserContext)
  const { id } = useParams()
  const navigate = useNavigate()

  const onSubmit = async (course) => {
    try {
      const res = await api(`/courses/${id}`, 'PUT', course, credentials)
      if (res.status === 204) {
        navigate(`/courses/${id}`)
      } else if (res.status === 400) {
        const data = await res.json()
        setErrors(data.errors)
      } else if (res.status === 401 || res.status === 403) {
        navigate('/forbidden')
      } 
    } catch {
      navigate('/error')
    }
  }

  useEffect(() => {
    const fetchCourse = async (id) => {
      try {
        const res = await api(`/courses/${id}`)
        if (res.status === 200) {
          const data = await res.json()
          setCourse(data)
          setLoading(false)
          if (authUser && authUser.id !== data?.user.id) {
            navigate('/forbidden')
          }
        } else if (res.status === 404) {
          navigate('/notfound')
        } else {
          throw new Error()
        }
      } catch (error) {
        console.log(error)
        navigate('/error')
      }
    }
    fetchCourse(id)
  }, [authUser, course.user, navigate, id])

  return (
    <main>
      <div className="wrap">
        <h2>Update Course</h2>
        { errors.length ? <ErrorsDisplay errors={errors}/> : null }
        { loading ? <Loading /> : 
          <CourseForm 
            course={course} 
            onSubmit={onSubmit} 
            action="Update"
          /> }
      </div>
    </main>
  );
};

export default CourseDetail;