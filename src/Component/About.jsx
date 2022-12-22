import React from 'react'

export default function f() {
  return (
   <>
      <section
        className="ftco-about ftco-section ftco-no-pt ftco-no-pb"
        id="about-section">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 col-lg-5 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay"></div>
                <div
                  className=" w-100 img d-flex align-self-stretch align-items-center"
                  style={{ backgroundImage: "url('assets/images/pg10.jpeg')" }}
                ></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
              <div className="py-md-5">
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section ftco-animate">
                    <span className="subheading">My Intro</span>
                    <h2 className="mb-4 style">About Me</h2>
                    <p>
                      My Name is Parvez Alam.I am Basicly from Bareilly .I have
                      completed B.tech from Computer science Enginearing from
                      Dr. A.P.J. Abdul Kalam Technical University Uttar
                      Pradesh.My strengh are Self motivated,hard working.{" "}
                    </p>

                    <ul className="about-info mt-4 px-md-0 px-2">
                      <li className="d-flex">
                        <span>Name:</span> <span>Parvez Alam</span>
                      </li>
                      <li className="d-flex">
                        <span>Date of Birth:</span>02/05/1999 <span></span>
                      </li>
                      <li className="d-flex">
                        <span>Address:</span>{" "}
                        <span>JOkhanpur Baheri Bareilly up (Indian)</span>
                      </li>
                      <li className="d-flex">
                        <span>Email:</span>{" "}
                        <span>parvezalam74520@gmail.com</span>
                      </li>
                      <li className="d-flex">
                        <span>Phone: </span> <span>+91-9719770330</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12">
                    <div className="my-interest d-lg-flex w-100">
                      <div className="interest-wrap d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-listening"></span>
                        </div>
                        <div className="text">Music</div>
                      </div>
                      <div className="interest-wrap d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-suitcases"></span>
                        </div>
                        <div className="text">Travel</div>
                      </div>
                      <div className="interest-wrap d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-video-player"></span>
                        </div>
                        <div className="text">programming</div>
                      </div>
                      <div className="interest-wrap d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-football"></span>
                        </div>
                        <div className="text">Sports</div>
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
  )
}
