import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ destination, guests, amount, date, packageId }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+93",
    phoneNumber: "",
    destination,
    guests,
    amount,
    date,
    packageId,
  });

  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    // Re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/bookings/create",
        formData
      );
      if(response.status === 200) {
        window.location.href = response.data.redirectUrl;
      }
      else {
        navigate("/failure");
      }

    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] h-full w-full overflow-y-auto overflow-x-hidden bg-gray-800 bg-opacity-40 p-4 text-center ${
        modalOpen ? "" : "hidden"
      }`}
      role="dialog"
      aria-modal="true"
      onClick={handleCloseModal}
    >
      <div
        className="fixed inset-0 z-[9999] cursor-pointer opacity-100"
        aria-hidden="true"
      ></div>
      <span className="inline-block h-full align-middle" aria-hidden="true">
        {" "}
      </span>
      <div className="sr-only">
        <button
          type="button"
          className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-2.5 py-1 text-xs rounded-md border border-transparent bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 opacity-50 hover:opacity-80"
        >
          <span></span>
        </button>
      </div>
      <div className="relative z-[9999] inline-block w-full text-left align-middle sm:w-auto opacity-100 scale-100">
        <div
          className="container mt-8 px-4 !m-0 !p-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="m-auto w-full max-w-[496px] rounded-lg border border-gray-200 bg-white p-6 pt-9 sm:p-12">
            <div className="mb-4">
              <h2 className="mb-3 text-3xl font-bold text-[25px] uppercase leading-[25px] text-primary">
                Ticket Details
              </h2>
              <p className="text-base leading-5 text-gray">
                Welcome! Please enter your details
              </p>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              {/* Other form fields */}
              <div className="flex flex-col mb-4">
                <label className="block text-base font-bold leading-7">
                  <span className="block text-sm mb-1.5">Destination</span>
                  <input
                    readOnly
                    spellCheck="false"
                    placeholder="Screen reader only"
                    className="block w-full bg-transparent font-normal focus:outline-none focus:ring-[1px] transition duration-200 px-4 py-2 text-sm h-10 leading-[40px] rounded-md bg-transparent border border-gray-300"
                    type="text"
                    value={formData.destination}
                  />
                </label>
              </div>
              <div className="flex flex-col mb-4">
                <label className="block text-base font-bold leading-7">
                  <span className="block text-sm mb-1.5">Guests</span>
                  <input
                    readOnly
                    spellCheck="false"
                    placeholder="Screen reader only"
                    className="block w-full bg-transparent font-normal focus:outline-none focus:ring-[1px] transition duration-200 px-4 py-2 text-sm h-10 leading-[40px] rounded-md bg-transparent border border-gray-300"
                    type="number"
                    value={formData.guests}
                  />
                </label>
              </div>
              <div className="flex col-auto gap-3 mb-4">
                <div className="flex flex-col">
                  <label className="block text-base font-bold leading-7">
                    <span className="block text-sm mb-1.5">Amount</span>
                    <input
                      readOnly
                      spellCheck="false"
                      placeholder="Screen reader only"
                      className="block w-full bg-transparent font-normal focus:outline-none focus:ring-[1px] transition duration-200 px-4 py-2 text-sm h-10 leading-[40px] rounded-md bg-transparent border border-gray-300"
                      id="amount"
                      type="text"
                      value={formData.amount}
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-base font-bold leading-7">
                    <span className="block text-sm mb-1.5">Date</span>
                    <input
                      disabled
                      spellCheck="false"
                      placeholder="Screen reader only"
                      className="block w-full bg-transparent font-normal focus:outline-none focus:ring-[1px] transition duration-200 px-4 py-2 text-sm h-10 leading-[40px] rounded-md bg-transparent border border-gray-300"
                      id="date"
                      type="text"
                      value={formData.date}
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <label className="block text-base font-bold leading-7">
                  <span className="block text-sm mb-1.5">Name</span>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    value={formData.name}
                    spellCheck="false"
                    placeholder="Enter your name"
                    className="block w-full bg-transparent font-normal focus:outline-none focus:ring-[1px] transition duration-200 px-4 py-2 text-sm h-10 leading-[40px] rounded-md bg-transparent border border-gray-300"
                    type="text"
                    name="name"
                    required
                  />
                </label>
              </div>
              <div className="flex flex-col mb-4">
                <label className="block text-base font-bold leading-7">
                  <span className="block text-sm mb-1.5">Email</span>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    value={formData.email}
                    spellCheck="false"
                    placeholder="Enter your email"
                    className="block w-full bg-transparent font-normal focus:outline-none focus:ring-[1px] transition duration-200 px-4 py-2 text-sm h-10 leading-[40px] rounded-md bg-transparent border border-gray-300"
                    type="email"
                    name="email"
                    required
                  />
                </label>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex flex-col" style={{ flexBasis: "40%" }}>
                  <span className="block text-sm mb-1.5 font-bold">
                    Country Code
                  </span>
                  <select
                    onChange={(e) =>
                      setFormData({ ...formData, phoneCode: e.target.value })
                    }
                    value={formData.phoneCode}
                    className="block w-full bg-transparent font-normal focus:outline-none focus:ring-[1px] transition duration-200 px-4 py-2 text-sm h-10 leading-[40px] rounded-md bg-transparent border border-gray-300"
                    name="phoneCode"
                  >
                    <option value="+93">Afghanistan (+93)</option>
                    {/* Other options */}
                  </select>
                </div>
                <div
                  className="flex flex-col mx-2"
                  style={{ flexBasis: "60%" }}
                >
                  <label className="block text-base font-bold leading-7">
                    <span className="block text-sm mb-1.5">Phone Number</span>
                    <input
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                      value={formData.phoneNumber}
                      spellCheck="false"
                      placeholder="Enter your phone number"
                      className="block w-full bg-transparent font-normal focus:outline-none focus:ring-[1px] transition duration-200 px-4 py-2 text-sm h-10 leading-[40px] rounded-md bg-transparent border border-gray-300"
                      type="text"
                      name="phoneNumber"
                      required
                    />
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-8 py-2.5 text-base rounded-md border border-transparent bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 mb-2 mt-2 w-full"
              >
                <span className="ml-3">Proceed To Pay</span>
              </button>
            </form>
            {/* End of Form Content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
