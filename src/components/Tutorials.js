const Tutorials = (props) => {
  
    setTimeout(() => {
        props.history.push('/')
    }, 5000);

    return (
      <div className="container mt-3">
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Oups,</strong> this page is under construction.
            You will be redirected to the Docs page in 5 seconds
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h1>Tutorial: Intro to React</h1>
      </div>
    )
  }
  
  export default Tutorials