import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Success() {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://13.202.68.157:5000/bookings/verify/${id}`
        );
        setBookingData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setError(error.response.data.error);
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        {loading ? (
          <p className="text-center text-gray-600">
            Loading payment details...
          </p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : bookingData && bookingData.verifiedBooking ? (
          <>
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
              Booking Successful!
            </h2>
            <p className="text-sm text-gray-600 text-center mb-8">
              Here are your booking details:
            </p>
            <div className="rounded-lg bg-gray-100 shadow-md p-6">
              <div className="grid grid-cols-1 gap-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Package:
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {bookingData.verifiedBooking.bookingPackageName}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Client:</h3>
                  <p className="mt-1 text-gray-600">
                    {bookingData.verifiedBooking.clientName}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Email:</h3>
                  <p className="mt-1 text-gray-600">
                    {bookingData.verifiedBooking.clientEmail}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Phone:</h3>
                  <p className="mt-1 text-gray-600">
                    {bookingData.verifiedBooking.clientPhoneNo}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Total Guests:
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {bookingData.verifiedBooking.totalGuest}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Booking Date:
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {new Date(
                      bookingData.verifiedBooking.bookingDate
                    ).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Payment Status:
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {bookingData.verifiedBooking.paymentStatus}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600">No booking data found.</p>
        )}
      </div>
    </div>
  );
}

export default Success;
