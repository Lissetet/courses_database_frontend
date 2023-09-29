import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../utils/apiHelper'
import CourseUpdateForm from './CourseUpdateForm'
import Loading from './Loading'

const CourseDetail = () => {
  const [course, setCourse] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const fetchCourse = async (id) => {
    const res = await api(`/courses/${id}`)
    const data = await res.json()
    setCourse(data)
    setLoading(false)
  }

  const handleUpdate = async (course) => {
    const res = await api(`/courses/${id}`, 'PUT', course)
    if (res.status === 204) {
      console.log('Course updated successfully')
    } else {
      console.log('Error updating course')
    }
  }

  useEffect(() => {
    fetchCourse(id)
  }, [id])

  return (
    <main>
      <div className="wrap">
        <h2>Update Course</h2>
        { loading ? <Loading /> : 
          <CourseUpdateForm {...course} handleUpdate={handleUpdate}/> }
      </div>
    </main>
  );
};

export default CourseDetail;