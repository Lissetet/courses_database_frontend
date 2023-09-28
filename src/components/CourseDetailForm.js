const CourseDetailForm = (props) => {
  const { title, description, estimatedTime, materialsNeeded, user } = props;
  const name = `${user.firstName} ${user.lastName}`;
  const descriptionParagraphs = description.split('\n').filter(p => p !== '');
  const materialsList = materialsNeeded?.split('*').filter(item => item !== '');

  return (
    <form>
      <div className="main--flex">
        <div>
          <h3 className="course--detail--title">Course</h3>
          <h4 className="course--name">{title}</h4>
          <p>By {name}</p>
          {descriptionParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <div>
          <h3 className="course--detail--title">Estimated Time</h3>
          <p>{estimatedTime}</p>

          <h3 className="course--detail--title">Materials Needed</h3>
          <ul className="course--detail--list">
            {materialsList?.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </form>
  )

}

export default CourseDetailForm;