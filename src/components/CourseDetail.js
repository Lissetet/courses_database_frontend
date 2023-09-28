import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../utils/apiHelper'
import ActionsBar from './ActionsBar'
import CourseDetailForm from './CourseDetailForm'

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

  const handleDelete = async () => {
    console.log('deleting')
  }

  useEffect(() => {
    fetchCourse(id)
  }, [id])

  return (
    <main>
      <ActionsBar id={id} handleDelete={handleDelete} />
      <div className="wrap">
        <h2>Course Detail</h2>
        { loading ? <p><strong>Loading...</strong></p> : <CourseDetailForm {...course} /> }
      </div>
    </main>
  );
};

export default CourseDetail;