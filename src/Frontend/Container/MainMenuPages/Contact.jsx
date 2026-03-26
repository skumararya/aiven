import React from 'react'
import Breadcrumb from './Breadcrumb'

const Contact = () => {
  return (
    <>
    <Breadcrumb title={"Contact Us"} page={"Home"} />  
    <div class="main-content-area">
			<div class="about-sec about-inner-sec">
				<div class="container">
<div class="row align-items-end topside">
						 
					  <div class="contact-section">
    <div class="row align-items-stretch g-4">

  
      <div class="col-lg-5 d-flex">
        <div class="img-wrapper w-100">
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
               alt="Customer Support"
               class="contact-img"/>
        </div>
      </div>

    
      <div class="col-lg-7">
        <h3 class="form-title mb-3">Send Us A Message</h3>
        <p class="text-muted mb-4">
          Submit your details below, and we'll respond within 24 hours
          with tailored advice on courses...
        </p>

        <form>
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label">Name</label>
              <input type="text" class="form-control"/>
            </div>

            <div class="col-md-6">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-control"/>
            </div>

            <div class="col-md-6">
              <label class="form-label">Phone Number</label>
              <input type="text" class="form-control"/>
            </div>

            <div class="col-md-6">
              <label class="form-label">Interested Courses</label>
              <select class="form-select">
                <option selected>Select</option>
                <option>Robotics</option>
                <option>Coding</option>
                <option>AI Fundamentals</option>
				<option>Computational Thinking</option>
              </select>
            </div>

            <div class="col-12">
              <label class="form-label">Message</label>
              <textarea rows="4" class="form-control"></textarea>
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-submit w-100">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
					</div>
                    </div>
                    </div>
                </div>
    </>
  )
}

export default Contact
