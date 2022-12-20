import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
		<div className="container">
			<Link className="navbar-brand" to="/">PARVEZ ALAM<span>.</span></Link>
			<button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="oi oi-menu"></span> Menu
			</button>

			<div className="collapse navbar-collapse" id="ftco-nav">
				<ul className="navbar-nav nav ml-auto">
					<li className="nav-item"><Link to="/" className="nav-link"><span>Home</span></Link></li>
					<li className="nav-item"><Link to="About" className="nav-link"><span>About</span></Link></li>
					<li className="nav-item"><Link to="Skills" className="nav-link"><span>Skills</span></Link></li>
					<li className="nav-item"><Link to="Services" className="nav-link"><span>Services</span></Link></li>
					<li className="nav-item"><Link to="Project" className="nav-link"><span>Blogs</span></Link></li>
					<li className="nav-item"><Link to="Blogs" className="nav-link"><span>Projects</span></Link></li>
					<li className="nav-item"><Link to="Contacts" className="nav-link"><span>Contact</span></Link></li>
				</ul>
			</div>
		</div>
	</nav>
   </>
  )
}
