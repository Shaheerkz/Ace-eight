import React from "react";
import appIcon1 from "../assets/images/app-card-icon.png";
function Approach() {
  return (
    <>
      <section className="approach-sec">
        <div className="container">
          <div className="row">
            <div className="approach-wrp position-relative">
              <div className="col-12">
                <div className="approach-content">
                  <div className="approach-text">
                    <h4 className="mb-3">
                      <span className="b-span-two">Our</span>
                      <span className="b-span-three">Approach</span>
                    </h4>
                    <small className="text-white my-5">
                      Our company’s mission first and foremost is to ‘EMPOWER
                      PEOPLE’. We look to disrupt the industry. Not only with
                      our technical prowess, <br /> but the way we interface
                      with our clients ,build relationship, and deliver results.
                      We build people-focused organizations and that shows forth
                      in all of all interactions.{" "}
                    </small>
                  </div>
                  <div className="row mt-5 mt-50">
                    <div className="col-md-4">
                      <div className="app-card">
                        <div className="app-card-child text-center justify-content-center d-flex flex-column align-items-center">
                          <img src={appIcon1} className="card-icon mb-3" alt="" />
                          <p>
                            {" "}
                            <span className="b-span-three">Listen</span>
                            <span className="b-span-three"> Intently</span>
                          </p>
                          <small className="text-white text-center my-3">
                            We believe listening is more <br /> than just
                            hearing what's being said. <br /> It is the intent
                            and need beyond words <br /> and understanding the
                            desire
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="app-card-2">
                        <div className="app-card-child text-center justify-content-center d-flex flex-column align-items-center">
                          <img src={appIcon1} className="card-icon mb-3" alt="" />
                          <p>
                            {" "}
                            <span className="b-span-three">Listen</span>
                            <span className="b-span-three"> Intently</span>
                          </p>
                          <small className="text-white text-center my-3">
                            We believe listening is more <br /> than just
                            hearing what's being said. <br /> It is the intent
                            and need beyond words <br /> and understanding the
                            desire
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="app-card-3">
                        <div className="app-card-child text-center justify-content-center d-flex flex-column align-items-center">
                          <img src={appIcon1} className="card-icon mb-3" alt="" />
                          <p>
                            {" "}
                            <span className="b-span-three">Listen</span>
                            <span className="b-span-three"> Intently</span>
                          </p>
                          <small className="text-white text-center my-3">
                            We believe listening is more <br /> than just
                            hearing what's being said. <br /> It is the intent
                            and need beyond words <br /> and understanding the
                            desire
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Approach;
