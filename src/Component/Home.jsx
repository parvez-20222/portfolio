import React from "react";

export default function Home() {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="assets/images/pg10.jpeg"
              height="600px"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="text">
                <span className="subheading">Hello! This is Clyde</span>
                <h1 className="mb-4 mt-3">
                  Creative <span>UI/UX</span> Designer &amp; Developer
                </h1>
                <p>
                  <a href="https://drive.google.com/file/d/1EeFwmoUuRndQl_MKQXPijL1BLqaKq-a9/view?usp=share_link" className="btn btn-primary">
				  Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-counter img bg-light" id="section-counter">
        <div className="container">
          <div className="row">
            <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-suitcase"></span>
                </div>
                <div className="text">
                  <strong className="number" data-number="750">
                    10
                  </strong>
                  <span>Project Complete</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-loyalty"></span>
                </div>
                <div className="text">
                  <strong className="number" data-number="568">
                    Startup
                  </strong>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-coffee"></span>
                </div>
                <div className="text">
                  <strong className="number" data-number="478">
                    Startup
                  </strong>
                  <span>Cups of coffee</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-calendar"></span>
                </div>
                <div className="text">
                  <strong className="number" data-number="780">
                    Fresher
                  </strong>
                  <span>Years experienced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-about ftco-section ftco-no-pt ftco-no-pb"
        id="about-section"
      >
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 col-lg-5 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay"></div>
                <div
                  className="img d-flex align-self-stretch align-items-center"
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

      <section className="ftco-section bg-light" id="blog-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Degree</span>
              <h2 className="mb-4">MY Schooling</h2>
              <p>"my school and college degree,paesentage and degree".</p>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{
                    backgroundImage: "url('assets/images/school-img.jpg')",
                  }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">Guru Nanak inter college</span>
                      <a href="/" className="mr-2">
                        (up Board)
                      </a>
                      <a href="/" className="meta-chat">
                        <span className="icon-chat"></span> 9th to 12th
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">SCHOOL</a>
                  </h3>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">Class</th>
                        <th scope="col">Year</th>
                        <th scope="col">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>10th</td>
                        <td>2016</td>
                        <td>79%</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>12th</td>
                        <td>2018</td>
                        <td>73%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{
                    backgroundImage: "url('assets/images/college-img.jpg')",
                  }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">A.N.A COLLEGE Bareilly</span>
                      <a href="/" className="mr-2">
                        (A.K.T.U LUCKNOW)
                      </a>
                      <a href="/" className="meta-chat">
                        <span className="icon-chat"></span> B.TECH
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">GRADUATION</a>
                  </h3>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">Class</th>
                        <th scope="col">Year</th>
                        <th scope="col">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>10th</td>
                        <td>2016</td>
                        <td>79%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry">
                <a
                  href="single.html"
                  className="block-20"
                  style={{
                    backgroundImage: "url('assets/images/ducat-img.jpg')",
                  }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">FULL STACK</span>
                      <a href="/" className="mr-2">
                        (Web Development)
                      </a>
                      <a href="/" className="meta-chat">
                        <span className="icon-chat"></span> Startup 2022
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">DUCAT TRAINING CENTER</a>
                  </h3>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">Course</th>
                        <th scope="col">Year</th>
                        <th scope="col">stat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>MERN</td>
                        <td>2022</td>
                        <td>60%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light" id="skills-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <span className="subheading">Skills</span>
              <h2 className="mb-4">My Skills</h2>
              <p>I am Mern stack Developer.</p>
            </div>
          </div>
          <div className="row progress-circle mb-5">
            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">CSS</h2>

                <div className="progress mx-auto" data-value="95">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      95<sup className="small">%</sup>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">60%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">80%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">HTML</h2>

                <div className="progress mx-auto" data-value="98">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      98<sup className="small">%</sup>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">50%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">90%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">
                  javaScrip
                </h2>

                <div className="progress mx-auto" data-value="80">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      80<sup className="small">%</sup>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">50%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">75%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">
                  Boothstrap
                </h2>

                <div className="progress mx-auto" data-value="85">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      85<sup className="small">%</sup>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">40%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">79%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">
                  Material UI
                </h2>

                <div className="progress mx-auto" data-value="75">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      75<sup className="small">%</sup>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">28%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">60%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">
                  Reactjs
                </h2>

                <div className="progress mx-auto" data-value="80">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      80<sup className="small">%</sup>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">40%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">70%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">
                  Node js
                </h2>
                <div className="progress mx-auto" data-value="78">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      78<sup className="small">%</sup>
                    </div>
                  </div>
                </div>
                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">30%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">70%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">
                  Express
                </h2>
                <div className="progress mx-auto" data-value="82">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      82<sup className="small">%</sup>
                    </div>
                  </div>
                </div>
                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">36%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">75%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">
                  MongoDB
                </h2>
                <div className="progress mx-auto" data-value="80">
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      80<sup className="small">%</sup>
                    </div>
                  </div>
                </div>
                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">45%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">65%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section" id="services-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <span className="subheading">I am grat at</span>
              <h2 className="mb-4">We do awesome services for our clients</h2>
              <p>
                Society provides all comforts and necessities of life to man.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-3d-design"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Web Design</h3>
                  <p>
                    Web design is the creation of websites and pages to reflect
                    a company's brand and information and ensure a user-friendly
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon shadow d-flex align-items-center justify-content-center">
                  <span className="flaticon-app-development"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Web Application</h3>
                  <p>
                    A Web application (Web app) is an application program that
                    is stored on a remote server and delivered over the Internet
                    through a browser interface.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon shadow d-flex align-items-center justify-content-center">
                  <span className="flaticon-web-programming"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Front end Doveloper</h3>
                  <p>
                    creates websites and applications using web languages such
                    as HTML, CSS, and JavaScript that allow users to access and
                    interact with the site or App.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon shadow d-flex align-items-center justify-content-center">
                  <span className="flaticon-branding"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Web Development</h3>
                  <p>
                    A Web Developer is a professional who is responsible for the
                    design and construction of websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-hireme">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-8 col-lg-8 d-flex align-items-center">
              <div className="w-100 py-4">
                <h2>Have a project on your mind.</h2>
                <p>
                  'Good thoughts make a happy person'. 'If you have a dream,
                  never let go of it, chase it till the end'. 'Make yourself
                  your own competition, strive to be better than yesterday, and
                  you'll find the true essence of life!' 'You are smarter,
                  braver, and much stronger than you think'..
                </p>
                <p className="mb-0">
                  <a href="/About" className="btn btn-white py-3 px-4">
                    Contact me
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 d-flex align-items-end">
              <img src="assets/images/pg22.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light" id="blog-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Accomplishments</span>
              <h2 className="mb-4">Our Projects</h2>
              <p>
                "Trying to manage a project without project management is like
                trying to play a football game without the game plan".
              </p>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{
                    backgroundImage: "url('assets/images/portfolio-img.jpg')",
                  }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">nov 10, 2022</span>
                      <a href="/" className="mr-2">
                        Admin
                      </a>
                      <a href="/" className="meta-chat">
                        <span className="icon-chat"></span> 10
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">portfolio project</a>
                  </h3>
                  <p>
                    In portfolio project use Languages
                    HTML5,CSS,Boothstrap,Reactjs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{
                    backgroundImage: "url('assets/images/news-img.jpg')",
                  }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">Dec 3, 2022</span>
                      <a href="/" className="mr-2">
                        Admin
                      </a>
                      <a href="/" className="meta-chat">
                        <span className="icon-chat"></span> 15
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">NEWS Daily App</a>
                  </h3>
                  <p>
                    In this project Languages uses
                    HTML5,CSS,Boothstrap,Javascript,MATERIAL UI and Reactjs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry">
                <a
                  href="single.html"
                  className="block-20"
                  style={{
                    backgroundImage: "url('assets/images/ecomerse-img.jpg')",
                  }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">Dec 25, 2022</span>
                      <a href="/" className="mr-2">
                        Admin
                      </a>
                      <a href="/" className="meta-chat">
                        <span className="icon-chat"></span> 19
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">Ecommerse Website</a>
                  </h3>
                  <p>
                    E-commerce can be defined in a very simple way as using
                    electronic media for conducting commerce.use languages
                    HTML,CSS,Boothstrap,Javascript,Reactjs and Redux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-project" id="projects-section">
        <div className="container-fluid px-md-4">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <span className="subheading">BLOG</span>
              <h2 className="mb-4">OUR BLOGS</h2>
              <p>My favorite Images front of you</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url('assets/images/pg1.jpg')" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="/">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url('assets/images/pg13.jpg')" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="/">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url('assets/images/pg2.jpg')" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="/">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url('assets/images/pg4.jpg')" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="/">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url('assets/images/pg3.jpg')" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="/">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url('assets/images/pg11.jpg')" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="/">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url('assets/images/pg12.jpg')" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="/">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url('assets/images/pg8.jpg')" }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="/">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section contact-section ftco-no-pb"
        id="contact-section"
      >
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading " style={{ fontSize: "50px" }}>
                Contact us
              </span>
              <p>Contact me to talk and tell me problem</p>
            </div>
          </div>

          <div className="row block-9">
            <div className="col-md-8">
              <form action="#" className="bg-light p-4 p-md-5 contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="7"
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary py-3 px-5"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-4 d-flex pl-md-5">
              <div className="row">
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Address:</span>VILL & Post JOkhanpur Baheri Bareilly
                      (243201),UP(India)
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Phone:</span>{" "}
                      <a href="tel://9719770330">(+91)9719770330</a>
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Email:</span>{" "}
                      <a href="mailto:parvezalam74520@gmail.com">
                        parvezalam74520@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-globe"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Website</span> <a href="/">yoursite.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div id="map" className="map"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
