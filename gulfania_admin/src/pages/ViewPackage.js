import React, { useState,useEffect } from 'react';
import API from '../connection/connections'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function ViewPackage() {
  
    const [packagess, setpackagess] = useState([]);


    useEffect(() => {
        const fetchPackages= async () => {
            try {
                const response = await axios.get(`${API}/packages/view`);
                setpackagess(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchPackages();
    }, []);



    return (
        <div id="wrapper">
            <Header />
            <Sidebar />
            <div className="main">

                <div className="main-content">
                    <div className="container-fluid">
                        <div className="panel panel-headline">
                            <div className="panel-heading">
                                <h3 className="panel-title">View Category</h3>
                                <p className="panel-subtitle">(List All Packages)</p>
                            </div>
                            <div className="row">

                                <div className="col-md-12">
                                   
                                <table className="table table-hover">
										<thead>
											<tr>
												<th>SNo.</th>
												<th>Category Name</th>
												<th>Package Name</th>
                                                <th>Price</th>
                                                <th>Special Price</th>
                                                <th>Package Status</th>
												<th>Action</th>
											</tr>
										</thead>
                                        <tbody>
                                            {packagess.map((packages, index) => (
                                                <tr key={packages._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{packages.categoryId.categoryName}</td>
                                                    <td>{packages.packageName}</td>
                                                    <td>{packages.price}</td>
                                                    <td>{packages.specialPrice}</td>
                                                    <td>{packages.enabled ? 'Enabled' : 'Disabled'}</td>
                                                    <td> <Link to={`/viewpackagedetails/${packages._id}`} className="'btn btn-danger" style={{padding:"5px"}}>View Details</Link></td>
                                                </tr>
                                            ))}
                                        </tbody>
									</table>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
