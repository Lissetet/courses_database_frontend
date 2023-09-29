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
  const { credentials } = useContext(UserContext)
  const { id } = useParams()
  const navigate = useNavigate()

  const fetchCourse = async (id) => {
    const res = await api(`/courses/${id}`)
    const data = await res.json()
    setCourse(data)
    setLoading(false)
  }

  const onSubmit = async (course) => {
    try {
      const res = await api(`/courses/${id}`, 'PUT', course, credentials)
      if (res.status === 204) {
        navigate(`/courses/${id}`)
      } else if (res.status === 400) {
        const data = await res.json()
        setErrors(data.errors)
      } else if (res.status === 401) {
        navigate('/forbidden')
      } 
    } catch {
      navigate('/error')
    }
  }

  useEffect(() => {
    fetchCourse(id)
  }, [id])

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