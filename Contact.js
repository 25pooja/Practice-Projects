import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="main-heading2 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h3>Contact Us</h3>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / Contact Us</h6>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <div className="card shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
              <h6>Contact Form</h6>
               <hr />
               <div className="form-group">
                <label className="mb-1">Full Name</label>
                <input type= "text" placeholder="Enter Your Name" className="form-control mb-1"></input>
                <label className="mb-1">Phone No.</label>
                <input type= "number" placeholder="Enter Phone no." className="form-control mb-1"></input>
                <label className="mb-1">Email Id</label>
                <input type= "email" placeholder="Enter Your Email id" className="form-control mb-1"></input>
                <labe className= 'mb-1'>Message</labe>
                <textarea  rows = '3' placeholder="Write Message here...." className="form-control mb-1"></textarea>
                <div className="form-group">
                  <button type= 'button' className="btn btn-primary shadow my-2 w-100">Send Message</button>
                </div>
               </div>
              </div>
              <div className="col-md-6 border-start">
                <h5 className="main-heading">Address Information</h5>
                <div className="underline mb-1"></div>
                <p>24,Aashirwad Society, Palanpur Gujarat</p>
                <p>Contact No: 5623589745</p>
                <p>Email: pooja@gmail.com</p>

              </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
