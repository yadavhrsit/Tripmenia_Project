import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div id="sidebar-nav" className="sidebar">
    <div className="sidebar-scroll">
      <nav>
        <ul className="nav">
          <li><Link to="/dashboard" className="active"><i className="lnr lnr-home"></i> <span>Dashboard</span></Link></li>
          {/* <li><Link to="elements.html" className=""><i className="lnr lnr-code"></i> <span>Elements</span></Link></li>
          <li><Link to="charts.html" className=""><i className="lnr lnr-chart-bars"></i> <span>Charts</span></Link></li>
          <li><Link to="panels.html" className=""><i className="lnr lnr-cog"></i> <span>Panels</span></Link></li>
          <li><Link to="notifications.html" className=""><i className="lnr lnr-alarm"></i> <span>Notifications</span></Link></li> */}
          <li>
            <Link to="#subPages" data-toggle="collapse" className="collapsed"><i className="lnr lnr-file-empty"></i> <span>Category</span> <i className="icon-submenu lnr lnr-chevron-left"></i></Link>
            <div id="subPages" className="collapse ">
              <ul className="nav">
                <li><Link to="/category-add" className="">Add</Link></li>
                <li><Link to="/category-view" className="">View</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="#subPages1" data-toggle="collapse" className="collapsed"><i className="lnr lnr-dice"></i> <span>Tickets/Packages</span> <i className="icon-submenu lnr lnr-chevron-left"></i></Link>
            <div id="subPages1" className="collapse ">
              <ul className="nav">
                <li><Link to="/package-add" className="">Add</Link></li>
                <li><Link to="/package-view" className="">View</Link></li>
              </ul>
            </div>
          </li>
          {/* <li><Link to="tables.html" className=""><i className="lnr lnr-dice"></i> <span>Tables</span></Link></li>
          <li><Link to="typography.html" className=""><i className="lnr lnr-text-format"></i> <span>Typography</span></Link></li>
          <li><Link to="icons.html" className=""><i className="lnr lnr-linearicons"></i> <span>Icons</span></Link></li> */}
        </ul>
      </nav>
    </div>
  </div>
  )
}
