import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
    <nav className="navbar navbar-default navbar-fixed-top">
			<div className="brand">
				{/* <Link to="index.html"><img src="assets/img/logo-dark.png" alt="Klorofil Logo" className="img-responsive logo" /></Link> */}
				<Link to="index.html">TRIPMENIA</Link>
			</div>
			<div className="container-fluid">
				<div className="navbar-btn">
					<button type="button" className="btn-toggle-fullwidth"><i className="lnr lnr-arrow-left-circle"></i></button>
				</div>
		
			
				<div id="navbar-menu">
					<ul className="nav navbar-nav navbar-right">
						<li className="dropdown">
							<Link to="#" className="dropdown-toggle icon-menu" data-toggle="dropdown">
								<i className="lnr lnr-alarm"></i>
								<span className="badge bg-danger">5</span>
							</Link>
							<ul className="dropdown-menu notifications">
								<li><Link to="#" className="notification-item"><span className="dot bg-warning"></span>System space is almost full</Link></li>
								<li><Link to="#" className="notification-item"><span className="dot bg-danger"></span>You have 9 unfinished tasks</Link></li>
								<li><Link to="#" className="notification-item"><span className="dot bg-success"></span>Monthly report is available</Link></li>
								<li><Link to="#" className="notification-item"><span className="dot bg-warning"></span>Weekly meeting in 1 hour</Link></li>
								<li><Link to="#" className="notification-item"><span className="dot bg-success"></span>Your request has been approved</Link></li>
								<li><Link to="#" className="more">See all notifications</Link></li>
							</ul>
						</li>
						
						<li className="dropdown">
							<Link to="#" className="dropdown-toggle" data-toggle="dropdown"><img src="assets/img/user.png" className="img-circle" alt="Avatar" /> <span>Samuel</span> <i className="icon-submenu lnr lnr-chevron-down"></i></Link>
							<ul className="dropdown-menu">
								<li><Link to="#"><i className="lnr lnr-user"></i> <span>Change Password</span></Link></li>
							
								<li><Link to="#"><i className="lnr lnr-exit"></i> <span>Logout</span></Link></li>
							</ul>
						</li>
					
					</ul>
				</div>
			</div>
		</nav>
    </>
  )
}

