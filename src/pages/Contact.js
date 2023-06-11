import React from 'react'

function Contact() {
  return (
    <div className='row justify-content-md-center justify-content-lg-start'>
      <div className='col-md-8'>
        <form>
          <div className="row mt-5">
            <div className="col">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputValue" placeholder="First Name"/>
                <label htmlFor="floatingInputValue">First Name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputValue" placeholder="Last Name"/>
                <label htmlFor="floatingInputValue">Last Name</label>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-3">
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInputValue" placeholder="name@example.com"/>
              <label htmlFor="floatingInputValue">Your e-mail address</label>
            </div>
          </div>
          <div className="form-floating mt-5">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
          <button type="submit" className=" mt-5 btn btn-outline-info py-2 px-4">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
