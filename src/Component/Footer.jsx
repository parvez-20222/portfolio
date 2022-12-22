import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
<>
<footer className="ftco-footer ftco-section">
		<div className="container">
			<div className="row mb-5">
				<div className="col-md">
					<div className="ftco-footer-widget mb-4">
						<h2 className="ftco-heading-2">Lets talk about</h2>
						<p>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen..</p>
						<p><Link  to="/About" className="btn btn-primary"> more </Link  ></p>
					</div>
				</div>
				<div className="col-md">
					<div className="ftco-footer-widget mb-4 ml-md-4">
						<h2 className="ftco-heading-2">Links</h2>
						<ul className="list-unstyled ">
							<li ><Link  to="/"><h6 className='text-primary'>Home</h6></Link  ></li>
							<li ><Link  to="About"><h6 className='text-primary'>About</h6></Link></li>
							<li ><Link  to="Services"><h6 className='text-primary'>Services</h6></Link ></li>
							<li className='pa'><Link  to="Blogs"><h6 className='text-primary'>Projects</h6></Link></li>
							<li className='pa'><Link  to="Contacts"><h6 className='text-primary'>Contact</h6></Link></li>
						</ul>
					</div>
				</div>
				<div className="col-md">
					<div className="ftco-footer-widget mb-4">
						<h2 className="ftco-heading-2">Services</h2>
						<ul className="list-unstyled">
							<li className='pa'><span className="fa fa-chevron-right mr-2  "></span>Web Development</li>
							<li className='pa'><span className="fa fa-chevron-right mr-2 "></span>Front-end Developer</li>
							<li className='pa'><span className="fa fa-chevron-right mr-2 "></span>Backend Developer</li>
							<li className='pa'><span className="fa fa-chevron-right mr-2 "></span>Data Analysis</li>
							
						</ul>
					</div>
				</div>
				<div className="col-md">
					<div className="ftco-footer-widget mb-4">
						<h2 className="ftco-heading-2">Have a Questions?</h2>
						<div className="block-23 mb-3">
							<ul>
								<li><span className="icon fa fa-map marker"></span><span className="text">VILL & Post JOkhanpur Baheri Bareilly (243201),UP(India)</span></li>
								<li><span className="icon fa fa-phone"></span><span className="text">(+91)9719770330</span></li>
								<li><span className="icon fa fa-paper-plane pr-4"></span><span className="text">parvezalam74520@gmail.com</span></li>
							</ul>
						</div>
						<ul className="ftco-footer-social list-unstyled mt-2">
							<li className="ftco-animate"><Link  to="https://twitter.com/Parvez27907705"><span className="fa fa-twitter"></span></Link  ></li>
							<li className="ftco-animate"><Link  to="https://www.facebook.com/profile.php?id=100017749982961"><span className="fa fa-facebook"></span></Link  ></li>
							<li className="ftco-animate"><Link  to="https://www.instagram.com/parvezalam4756/"><span className="fa fa-instagram"></span></Link  ></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 text-center">

					{/* <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
						Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <Link  to="https://colorlib.com" target="_blank">Colorlib</Link  >
						<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
					</div>
				</div>
			</div>
		</footer>
		
</>
  )
}
