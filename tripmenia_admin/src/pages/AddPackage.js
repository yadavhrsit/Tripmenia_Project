import React, { useState, useEffect } from "react";
import API from "../connection/connections";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MyHTMLEditor from "../components/MyHTMLEditor";
export default function AddPackage() {
  const [categories, setCategories] = useState([]);
  const [timeCount, setTimeCount] = useState([1]);
  const [editorHtml, setEditorHtml] =
    useState(`<strong>EXAMPLE CONTENT</strong><br/><p>This budget-friendly experience has all your favorite activities like dune bashing and sandboarding among others.
        </p>
        <br/>
        <h3><strong>Highlights</strong></h3>
        <ul>
            <li>Check off your desert safari adventure at an affordable rate, including an unlimited BBQ buffet dinner.</li>
            <li>Engage in thrilling activities like dune bashing, sandboarding, and camel rides, perfect for adventurous spirits.</li>
            <li>Be entertained by mesmerizing belly dance, fire shows, and Tanoura dance performances during dinner.</li>
            <li>Dress in traditional Emirati attire, pose with a falcon for a photo, and adorn your palms with intricate henna designs for a cultural experience.</li>
        </ul>
        <br/>
        <h3><strong>Inclusions</strong></h3>
        <ul>
            <li>Hotel transfers in AC 4×4 cars</li>
            <li>30-40 mins of high-intensity dune bashing</li>
            <li>BBQ dinner buffet</li>
            <li>Live entertainment shows: Tanoura, Belly dancing, and Fire Dancing</li>
            <li>Camel ride</li>
            <li>Sunset photo stop</li>
            <li>Sandboarding</li>
        </ul>
        <br/>
        <h3><strong>Cancellation Policy</strong></h3>
        <ul>
            <li>These tickets cannot be canceled.</li>
        </ul>`);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API}/categories/view`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const [packageData, setPackageData] = useState({
    categoryId: "",
    packageName: "",
    price: "",
    images: [],
    specialPrice: "",
    packageUSP: "",
    description: "",
    enabled: true,
    timeSlots: [],
  });
  const [timeSlots, setTimeSlots] = useState([{}]);

  const [error, setError] = useState("");
  const [errors, setErrors] = useState({
    images: "",
    category: "",
    enabled: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPackageData((prev) => ({ ...prev, [name]: value }));
    if (name === "enabled") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (name === "categoryName") {
      setPackageData((prev) => ({ ...prev, categoryId: value }));
      setErrors((prev) => ({ ...prev, category: "" }));
    }
  };

  const handleRemoveTime = (index) => {
    setTimeCount((prev) => [...prev.slice(0, -1)]);
    setPackageData((prev) => {
      const temp = { ...prev };
      delete temp[`totime-${index}`];
      delete temp[`fromtime-${index}`];
      return temp;
    });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imagesErrors = [];
    const images = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size > 500000) {
        imagesErrors.push(" Size is too large");
      }
      if (
        !file.type.startsWith("image/webp") &&
        !file.type.startsWith("image/jpeg") &&
        !file.type.startsWith("image/jpg")
      ) {
        imagesErrors.push(" Please upload jpg/jpeg/webp only");
      }
      images.push(file);
    }
    setErrors((prev) => ({ ...prev, images: imagesErrors.join(", ") }));
    setPackageData((prev) => ({ ...prev, images }));
  };

  const handleTimeChange = (type, e) => {
    setTimeSlots((prev) => {
      let temp = prev;
      let index = e.target.name.split("-")[1];
      if (!temp[index]) {
        temp[index] = {};
      }
      temp[index][type] = e.target.value;
      return temp;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", editorHtml);
    formData.append("categoryId", packageData.categoryId);
    formData.append("packageName", packageData.packageName);
    formData.append("price", packageData.price);
    formData.append("specialPrice", packageData.specialPrice);
    formData.append("packageUSP", packageData.packageUSP);
    formData.append("enabled", packageData.enabled);
    formData.append("timeSlots", timeSlots);
    console.log(packageData.enabled.length);
    if (packageData.categoryId === "") {
      setErrors((prev) => ({ ...prev, category: "Please select a category" }));
    }
    if (
      packageData.enabled.length === 0 ||
      packageData.enabled.length === null ||
      packageData.enabled.length === undefined
    ) {
      setErrors((prev) => ({ ...prev, enabled: "Please select a status" }));
    }
    packageData.images.forEach((image) => {
      formData.append("images", image);
    });

    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
      return;
    }

    try {
      const response = await axios.post(`${API}/packages/add`, formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        setError(response.data.message);
      }
    } catch (error) {
      setError("An error occurred, please try again");
      console.error("Error:", error);
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
                <h3 className="panel-title">Add Package</h3>
                <p className="panel-subtitle">(Enter Package Details)</p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <form
                    className="form-auth-small"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                  >
                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="categoryName">Select Category* :</label>
                      <select
                        type="text"
                        className="form-control input-lg"
                        id="categoryName"
                        name="categoryName"
                        list="categories"
                        onChange={handleChange}
                        required
                      >
                        <option value={null} key={1} selected disabled>
                          Please select
                        </option>
                        {categories.map((category) => {
                          return (
                            <option value={category._id} key={category._id}>
                              {category.categoryName}
                            </option>
                          );
                        })}
                      </select>
                      {errors.category && (
                        <p className="text-danger">{errors.category}</p>
                      )}
                    </div>
                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="packageName">Package Name* :</label>
                      <input
                        type="text"
                        className="form-control input-lg"
                        id="packageName"
                        name="packageName"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="images">Image Upload(s) :</label>
                      <input
                        type="file"
                        className="form-control input-lg"
                        id="images"
                        name="images"
                        onChange={handleImageChange}
                        multiple
                        accept="image/*"
                      />
                      {errors.images && (
                        <p className="text-danger">{errors.images}</p>
                      )}
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="price">Price* :</label>
                      <input
                        type="number"
                        className="form-control input-lg"
                        id="price"
                        name="price"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="specialPrice">Special Price* :</label>
                      <input
                        type="number"
                        className="form-control input-lg"
                        id="specialPrice"
                        name="specialPrice"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="packageUSP">Package USP* :</label>
                      <input
                        type="text"
                        className="form-control input-lg"
                        id="packageUSP"
                        name="packageUSP"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="description">Description* :</label>
                      <MyHTMLEditor
                        editorHtml={editorHtml}
                        setEditorHtml={setEditorHtml}
                      />
                    </div>
                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="enabled">Package Status* :</label>
                      <select
                        name="enabled"
                        className="form-control"
                        onChange={handleChange}
                      >
                        <option value={null} selected disabled>
                          Please Select
                        </option>
                        <option value={true}>Enable</option>
                        <option value={false}>Disable</option>
                      </select>
                      {errors.enabled && (
                        <p className="text-danger">{errors.enabled}</p>
                      )}
                    </div>

                    {timeCount.map((t, index) => {
                      return (
                        <div
                          className="row "
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div
                            className="form-group col-md-3"
                            style={{ padding: "20px" }}
                          >
                            <label htmlFor="from-time">
                              From Time (24hours)*:
                            </label>
                            <input
                              className="form-control "
                              type="time"
                              id="fromtime"
                              name={`fromtime-${index}`}
                              min="00:00"
                              max="24:00"
                              onChange={(e) => {
                                handleTimeChange("from", e);
                              }}
                            />
                          </div>
                          <div
                            className="form-group col-md-3"
                            style={{ padding: "20px" }}
                          >
                            <label htmlFor="to-time">
                              To Time (24 hours)*:
                            </label>
                            <input
                              className="form-control "
                              type="time"
                              id="totime"
                              name={`totime-${index}`}
                              min="00:00"
                              max="24:00"
                              onChange={(e) => {
                                handleTimeChange("to", e);
                              }}
                            />
                          </div>
                          {index + 1 === timeCount.length && (
                            <div
                              className="form-group col-md-3 "
                              style={{ padding: "20px" }}
                            >
                              <label htmlFor="enable">Add Time Slot:</label>
                              <button
                                type="button"
                                className="btn btn-primary btn-block "
                                onClick={() => {
                                  setTimeCount([...timeCount, 1]);
                                }}
                              >
                                {" "}
                                +{" "}
                              </button>
                            </div>
                          )}
                          {index != 0 && index + 1 === timeCount.length && (
                            <div
                              className="form-group col-md-3"
                              style={{ padding: "20px" }}
                            >
                              <label htmlFor="enable">Remove Time Slot:</label>
                              <button
                                type="button"
                                className="btn btn-danger btn-block"
                                onClick={() => {
                                  handleRemoveTime(index);
                                }}
                              >
                                -
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}

                    <button
                      className="btn btn-primary btn-block"
                      style={{ width: "97%", margin: "0 auto 30px" }}
                      type="submit"
                    >
                      Add Category
                    </button>
                  </form>
                  {error && (
                    <div
                      style={{
                        fontSize: "24px",
                        padding: "20px",
                        color: "red",
                      }}
                    >
                      {error}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
