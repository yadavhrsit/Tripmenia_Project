import React, { useState, useEffect } from "react";
import API from "../connection/connections";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MyHTMLEditor from "../components/MyHTMLEditor";

export default function EditPackage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
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
  const [editorHtml, setEditorHtml] = useState("");

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          navigate("/");
          return;
        }
        const response = await axios.get(
          `${API}/packages/viewpackagedetail/${id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const {
          packageName,
          price,
          specialPrice,
          packageUSP,
          description,
          enabled,
          timeSlots,
          images,
        } = response.data;
        const categoryId = response.data.categoryId._id;
        setPackageData({
          categoryId,
          packageName,
          price,
          specialPrice,
          packageUSP,
          description,
          enabled,
          timeSlots,
          images: [...images], // Copying images array to retain existing images
        });
        setEditorHtml(description); // Set HTML editor content
      } catch (error) {
        console.error("Error fetching package details:", error);
      }
    };
    fetchPackageDetails();
  }, [id, navigate]);

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

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = [...packageData.images]; // Copy current images array

    const imagesErrors = [];

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
      newImages.push(file); // Add new file to the newImages array
    }

    setPackageData((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const handleRemoveImage = (index) => {
    setPackageData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPackageData((prev) => ({ ...prev, [name]: value }));
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
    packageData.images.forEach((image) => {
      if (typeof image === "object") {
        formData.append("images", image);
      }
    });

    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
      return;
    }

    try {
      const response = await axios.put(`${API}/packages/${id}`, formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        navigate(`/viewpackagedetails/${id}`);
      }
    } catch (error) {
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
                <h3 className="panel-title">Edit Package</h3>
                <p className="panel-subtitle">(Update Package Details)</p>
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
                        name="categoryId"
                        value={packageData.categoryId._id}
                        onChange={handleChange}
                        required
                      >
                        <option value={null} key={1} disabled>
                          Please select
                        </option>
                        {categories.map((category) => (
                          <option
                            value={category._id}
                            key={category._id}
                            selected={
                              category._id === packageData.categoryId._id
                            }
                          >
                            {category.categoryName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="packageName">Package Name* :</label>
                      <input
                        type="text"
                        className="form-control input-lg"
                        id="packageName"
                        name="packageName"
                        value={packageData.packageName}
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
                      {packageData.images && (
                        <div>
                          {packageData.images.map((image, index) => (
                            <div key={index}>
                              <img
                                src={
                                  typeof image === "object"
                                    ? URL.createObjectURL(image)
                                    : `https://tripmenia.com/public/upload/${image}`
                                }
                                alt={`Package ${index}`}
                                className="img-fluid"
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  marginRight: "10px",
                                }}
                              />
                              <button
                                type="button"
                                onClick={() => handleRemoveImage(index)}
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="price">Price* :</label>
                      <input
                        type="number"
                        className="form-control input-lg"
                        id="price"
                        name="price"
                        value={packageData.price}
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
                        value={packageData.specialPrice}
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
                        value={packageData.packageUSP}
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
                        value={packageData.enabled}
                        onChange={handleChange}
                      >
                        <option value={true}>Enable</option>
                        <option value={false}>Disable</option>
                      </select>
                    </div>

                    <button
                      className="btn btn-primary btn-block"
                      style={{ width: "97%", margin: "0 auto 30px" }}
                      type="submit"
                    >
                      Update Package
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
