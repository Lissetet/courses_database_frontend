const Error = ({title, message}) => {
  return (
    <main>
      <div className="wrap">
        <h2 className="capitalize">{title} Not Found</h2>
        <p>{message}</p>
      </div>
   </main>
  )
}

export default Error