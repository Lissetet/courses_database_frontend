import { Link } from 'react-router-dom';

const ActionsBar = ({id, handleDelete, ownedByUser}) => {
  return (
    <div className="actions--bar">
      <div className="wrap">
        { ownedByUser && <>
          <Link className="button" to={`/courses/${id}/update`}>Update Course</Link>
          <button className="button" onClick={handleDelete}>Delete Course</button>
        </> }
          <Link className="button button-secondary" to="/">Return to List</Link>
      </div>
    </div>
  )
}

export default ActionsBar;