import React, { useState, useEffect } from 'react';
import API from '../connection/connections';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function ViewPackageDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [packagess, setpackagess] = useState({});
    const token = Cookies.get("token");

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                if (!token) {
                    navigate("/");
                    return;
                }
                const response = await axios.get(`${API}/packages/viewpackagedetail/${id}`, {
                    headers: {
                        Authorization: token,
                    }
                });
                setpackagess(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchPackages();
    }, []);
    const renderHtml = (htmlString) => {
        return { __html: htmlString };
    };

    return (
        <div id="wrapper">
            <Header />
            <Sidebar />
            <div className="main">
                <div className="main-content">
                    <div className="container-fluid">
                        <div className="panel panel-headline">
                            <div className="panel-heading">
                                <h3 className="panel-title">View Details for {packagess.packageName}</h3>
                                <p className="panel-subtitle">(Package Details)</p>
                            </div>
                            <div className="row" style={{padding:15}}>
                                <div className="col-md-12">
                                    <h3>Uploaded Images</h3>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        {packagess.images && packagess.images.map((image, index) => (
                                            <div className="col-md-3 mb-3" key={index}>
                                                <img src={`http://localhost:5000/upload/${image}`} alt={`Package ${index}`} className="img-fluid" style={{width:"100%"}} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <h4>Package Details:</h4>
                                    <p><strong>Package Name:</strong> {packagess.packageName}</p>
                                    <p><strong>Price:</strong> AED {packagess.price}</p>
                                    <p><strong>Special Price:</strong> AED {packagess.specialPrice}</p>
                                    <p><strong>Package USP:</strong> {packagess.packageUSP}</p>
                                    <div className="col-md-12 mt-3">
    <h4>Description:</h4>
    <div dangerouslySetInnerHTML={renderHtml(packagess.description)} />
</div>

                                    <p><strong>Enabled:</strong> {packagess.enabled ? 'Yes' : 'No'}</p>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <h4>Time Slots:</h4>
                                    <ul>
                                        {packagess.timeSlots && packagess.timeSlots.map((timeSlot, index) => (
                                            <li key={index}>{timeSlot}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}