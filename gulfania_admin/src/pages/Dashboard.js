import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Cookies from 'js-cookie';

export default function Dashboard() {
	
  return (
	
    <div id="wrapper">
      <Header />
      <Sidebar />
      <div className="main">

        <div className="main-content">
          <div className="container-fluid">
          <div className="panel panel-headline">
						<div className="panel-heading">
							<h3 className="panel-title">Weekly Overview</h3>
							<p className="panel-subtitle">Period: Oct 14, 2016 - Oct 21, 2016</p>
						</div>
						<div className="panel-body">
							<div className="row">
								<div className="col-md-3">
									<div className="metric">
										<span className="icon"><i className="fa fa-download"></i></span>
										<p>
											<span className="number">1,252</span>
											<span className="title">Downloads</span>
										</p>
									</div>
								</div>
								<div className="col-md-3">
									<div className="metric">
										<span className="icon"><i className="fa fa-shopping-bag"></i></span>
										<p>
											<span className="number">203</span>
											<span className="title">Sales</span>
										</p>
									</div>
								</div>
								<div className="col-md-3">
									<div className="metric">
										<span className="icon"><i className="fa fa-eye"></i></span>
										<p>
											<span className="number">274,678</span>
											<span className="title">Visits</span>
										</p>
									</div>
								</div>
								<div className="col-md-3">
									<div className="metric">
										<span className="icon"><i className="fa fa-bar-chart"></i></span>
										<p>
											<span className="number">35%</span>
											<span className="title">Conversions</span>
										</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-9">
									<div id="headline-chart" className="ct-chart"></div>
								</div>
								<div className="col-md-3">
									<div className="weekly-summary text-right">
										<span className="number">2,315</span> <span className="percentage"><i className="fa fa-caret-up text-success"></i> 12%</span>
										<span className="info-label">Total Sales</span>
									</div>
									<div className="weekly-summary text-right">
										<span className="number">$5,758</span> <span className="percentage"><i className="fa fa-caret-up text-success"></i> 23%</span>
										<span className="info-label">Monthly Income</span>
									</div>
									<div className="weekly-summary text-right">
										<span className="number">$65,938</span> <span className="percentage"><i className="fa fa-caret-down text-danger"></i> 8%</span>
										<span className="info-label">Total Income</span>
									</div>
								</div>
							</div>
						</div>
					</div>
          </div>
        </div>
      </div>
    </div>
  )
}
