import { Link } from 'react-router-dom';

const ActionsBar = ({id, handleDelete}) => {
  return (
    <div class="actions--bar">
      <div class="wrap">
          <Link class="button" to={`/courses/${id}/update`}>Update Course</Link>
          <button class="button" onClick={handleDelete}>Delete Course</button>
          <Link class="button button-secondary" to="/">Return to List</Link>
      </div>
    </div>
  )
}

export default ActionsBar;