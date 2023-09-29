import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CourseDetailForm = (props) => {
  const { title, description, estimatedTime, materialsNeeded, handleUpdate } = props;
  const name = `${props.user.firstName} ${props.user.lastName}`;
  const navigate = useNavigate();

  const titleInput = useRef(null);
  const descriptionInput = useRef(null);
  const timeInput = useRef(null);
  const materialsInput = useRef(null);

  const onCancel = () => navigate(`/courses/${props.id}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    const course = {
      title: titleInput.current.value,
      description: descriptionInput.current.value,
      estimatedTime: timeInput.current.value,
      materialsNeeded: materialsInput.current.value
    }
    handleUpdate(course);
  }

  return (
    <form>
      <div className="main--flex">
        <div>
          <label htmlFor="courseTitle">Course Title</label>
          <input 
            id="courseTitle" 
            name="courseTitle" 
            type="text" 
            defaultValue={title} 
            ref={titleInput}
          />
          <p>By {name}</p>

          <label htmlFor="courseDescription">Course Description</label>
          <textarea 
            id="courseDescription" 
            name="courseDescription" 
            ref={descriptionInput} 
            defaultValue={description}
          />
        </div>
        <div>
          <label htmlFor="estimatedTime">Estimated Time</label>
          <input 
            id="estimatedTime" 
            name="estimatedTime" 
            type="text" 
            defaultValue={estimatedTime} 
            ref={timeInput}
          />

          <label htmlFor="materialsNeeded">Materials Needed</label>
          <textarea 
            id="materialsNeeded" 
            name="materialsNeeded" 
            ref={materialsInput} 
            defaultValue={materialsNeeded}
          />
        </div>
      </div>
      <button className="button" onClick={handleSubmit} type="submit">Update Course</button>
      <button className="button button-secondary" onClick={onCancel}>Cancel</button>
    </form>
  )

}

export default CourseDetailForm;