import React, { useState,useEffect } from 'react';
import API from '../connection/connections'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function ViewCategory() {
  
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${API}/categories/view`);
                setCategories(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchCategories();
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
                                <p className="panel-subtitle">(List All Categories)</p>
                            </div>
                            <div className="row">

                                <div className="col-md-12">
                                   
                                <table className="table table-hover">
										<thead>
											<tr>
												<th>SNo.</th>
												<th>Category  Name</th>
												<th>Category Description</th>
												<th>Action</th>
											</tr>
										</thead>
                                        <tbody>
                                            {categories.map((category, index) => (
                                                <tr key={category._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{category.categoryName}</td>
                                                    <td>{category.categoryDescription}</td>
                                                    <td><button type='submit' className='btn btn-danger'>Delete</button></td>
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
