import React from 'react'

import Vmc from "../inc/Vmc";

const About = () => {
  return (
    
  <div>
       <section className='main-heading2 py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 my-auto'>
            <h3>About Us</h3>
            </div>
            <div className='col-md-8 my-auto'>
              <h6 className='float-end'>Home / About Us</h6>
            </div>
          </div>
       
        </div>
       
       </section>
      

<section className="section">
<div className="container">
  <div className="row">
    <div className="col-md-12 ">
      <h3 className="main-heading">Our Company</h3>
      <div className="underline "></div>
      <p className="py-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release o
      </p>
  
    </div>
  </div>
</div>
</section>

 {/*Vision Mission and Values */}
 <Vmc />
</div>


    

  )
}

export default About