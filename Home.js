import React from "react";
import Slider from "../inc/Slider";
import Vmc from "../inc/Vmc";
import img1 from '../images/img1.png'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Slider />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading text-center">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p className="py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release o
              </p>
              <Link to="/about" className="btn btn-warning text-center">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*Vision Mission and Values */}
      <Vmc />

      {/*Our Services */}
      <section className="section bg border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading text-center">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4  my-5 ">
              <div className="card shadow w-100" style={{width: '18rem'}}>
                <img className="card-img-top border-bottom" src={img1} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Services1</h5>
                  <div className="underline "></div>
                  <p className="card-text py-1">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  <Link to= '/services' className="btn btn-link">Read more</Link>
                  
                </div>
              </div>
            </div>

            <div className="col-md-4  my-5 ">
              <div className="card shadow w-100" style={{width: '18rem'}}>
                <img className="card-img-top border-bottom" src={img1} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Services1</h5>
                  <div className="underline "></div>
                  <p className="card-text py-1">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  <Link to= '/services' className="btn btn-link">Read more</Link>
                  
                </div>
              </div>
            </div>

            <div className="col-md-4  my-5 ">
              <div className="card shadow w-100" style={{width: '18rem'}}>
                <img className="card-img-top border-bottom" src={img1} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Services1</h5>
                  <div className="underline "></div>
                  <p className="card-text py-1">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  <Link to= '/services' className="btn btn-link">Read more</Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
