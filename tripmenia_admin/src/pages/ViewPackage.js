import React, { useState, useEffect } from "react";
import API from "../connection/connections";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function ViewPackage() {
  const [packagess, setpackagess] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPackages = async (page) => {
      try {
        const response = await axios.get(`${API}/packages/view?page=${page}`);
        setpackagess(response.data.packages);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchPackages(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
                <h3 className="panel-title">View Packages</h3>
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
                      {packagess?.map((packages, index) => (
                        <tr key={packages._id}>
                          <td>{(currentPage - 1) * 10 + index + 1}</td>
                          <td>{packages.categoryId.categoryName}</td>
                          <td>{packages.packageName}</td>
                          <td>{packages.price}</td>
                          <td>{packages.specialPrice}</td>
                          <td>{packages.enabled ? "Enabled" : "Disabled"}</td>
                          <td>
                            <Link
                              to={`/viewpackagedetails/${packages._id}`}
                              className="btn btn-danger mx-1"
                              style={{ padding: "5px" }}
                            >
                              View Details
                            </Link>
                            <Link
                              to={`/editpackagedetails/${packages._id}`}
                              className="btn btn-primary mx-1"
                              style={{ padding: "5px" }}
                            >
                              Edit Details
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="pagination">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="btn btn primary"
                    >
                      Previous
                    </button>
                    <span style={{marginInline:"10px"}}>
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="btn btn primary"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
