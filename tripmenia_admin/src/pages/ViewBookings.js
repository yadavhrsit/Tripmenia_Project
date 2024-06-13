import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import API from "../connection/connections";

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchBookings = async (page) => {
      try {
        const response = await axios.get(`${API}/bookings/view?page=${page}`);
        setBookings(response.data.bookings);
        setTotalPages(response.data.pages);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBookings(currentPage);
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
                <h3 className="panel-title">View Bookings</h3>
                <p className="panel-subtitle">(List All Bookings)</p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>SNo.</th>
                        <th>Package Name</th>
                        <th>Client Name</th>
                        <th>Client Email</th>
                        <th>Client PhoneNo</th>
                        <th>Payment Status</th>
                        <th>Payment Id</th>
                        <th>Booking Date</th>
                        <th>Booking At</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking, index) => (
                        <tr key={booking._id}>
                          <td>{(currentPage - 1) * 10 + index + 1}</td>
                          <td>{booking.bookingPackageName}</td>
                          <td>{booking.clientName}</td>
                          <td>{booking.clientEmail}</td>
                          <td>{booking.clientPhoneNo}</td>
                          <td>{booking.paymentStatus}</td>
                          <td>{booking.paymentId}</td>
                          <td>{new Date(booking.bookingDate).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric' })}</td>
                          <td>{new Date(booking.bookedAt).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric' })}</td>
                          <td>{booking.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="pagination">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="btn btn-primary"
                    >
                      Previous
                    </button>
                    <span style={{ marginInline: "10px" }}>
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="btn btn-primary"
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
};

export default ViewBookings;
