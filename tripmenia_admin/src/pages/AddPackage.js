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
  const [editorHtml, setEditorHtml] = useState(`
    <strong>EXAMPLE CONTENT</strong><br/><p>This budget-friendly experience has all your favorite activities like dune bashing and sandboarding among others.</p>
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

  const [packageData, setPackageData] = useState({
    categoryId: "",
    packageName: "",
    price: "",
    images: [],
    specialPrice: "",
    packageUSP: "",
    description: editorHtml,
    enabled: "",
    timeSlots: [{ from: "", to: "" }],
    perks: [],
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPackageData((prev) => ({ ...prev, [name]: value }));

    if (name === "categoryId" || name === "enabled") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleTimeChange = (index, type, value) => {
    const updatedTimeSlots = [...packageData.timeSlots];
    updatedTimeSlots[index][type] = value;
    setPackageData((prev) => ({ ...prev, timeSlots: updatedTimeSlots }));
  };

  const handleAddTimeSlot = () => {
    setPackageData((prev) => ({
      ...prev,
      timeSlots: [...prev.timeSlots, { from: "", to: "" }],
    }));
  };

  const handleRemoveTimeSlot = (index) => {
    const updatedTimeSlots = packageData.timeSlots.filter(
      (_, i) => i !== index
    );
    setPackageData((prev) => ({ ...prev, timeSlots: updatedTimeSlots }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagesErrors = [];

    const validImages = files.filter((file) => {
      if (file.size > 500000) {
        imagesErrors.push(" Size is too large");
        return false;
      }
      if (
        !file.type.startsWith("image/webp") &&
        !file.type.startsWith("image/jpeg") &&
        !file.type.startsWith("image/jpg")
      ) {
        imagesErrors.push(" Please upload jpg/jpeg/webp only");
        return false;
      }
      return true;
    });

    setErrors((prev) => ({ ...prev, images: imagesErrors.join(", ") }));
    setPackageData((prev) => ({ ...prev, images: validImages }));
  };

  const handlePerkChange = (index, name, value) => {
    const updatedPerks = [...packageData.perks];
    updatedPerks[index][name] = value;
    setPackageData((prev) => ({ ...prev, perks: updatedPerks }));
  };

  const handleAddPerk = () => {
    setPackageData((prev) => ({
      ...prev,
      perks: [...prev.perks, { icon: "", text: "" }],
    }));
  };

  const handleRemovePerk = (index) => {
    const updatedPerks = packageData.perks.filter((_, i) => i !== index);
    setPackageData((prev) => ({ ...prev, perks: updatedPerks }));
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
    formData.append("timeSlots", JSON.stringify(packageData.timeSlots)); // Stringify array
    formData.append("perks", JSON.stringify(packageData.perks)); // Stringify array

    packageData.images.forEach((image) => {
      formData.append("images", image);
    });

    if (!packageData.categoryId) {
      setErrors((prev) => ({
        ...prev,
        categoryId: "Please select a category",
      }));
      return;
    }
    if (packageData.enabled === "") {
      setErrors((prev) => ({ ...prev, enabled: "Please select a status" }));
      return;
    }

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
        navigate("/package-view"); // Redirect after successful submission
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: "An error occurred, please try again",
      }));
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
                      <label htmlFor="categoryId">Select Category* :</label>
                      <select
                        className="form-control input-lg"
                        id="categoryId"
                        name="categoryId"
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled selected>
                          Please select
                        </option>
                        {categories.map((category) => (
                          <option value={category._id} key={category._id}>
                            {category.categoryName}
                          </option>
                        ))}
                      </select>
                      {errors.categoryId && (
                        <p className="text-danger">{errors.categoryId}</p>
                      )}
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="packageName">Package Name*</label>
                      <input
                        type="text"
                        className="form-control input-lg"
                        id="packageName"
                        name="packageName"
                        placeholder="Enter Package Name"
                        value={packageData.packageName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="price">Price*</label>
                      <input
                        type="number"
                        className="form-control input-lg"
                        id="price"
                        name="price"
                        placeholder="Enter Price"
                        value={packageData.price}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="specialPrice">Special Price</label>
                      <input
                        type="number"
                        className="form-control input-lg"
                        id="specialPrice"
                        name="specialPrice"
                        placeholder="Enter Special Price"
                        value={packageData.specialPrice}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="packageUSP">Package USP*</label>
                      <textarea
                        className="form-control input-lg"
                        id="packageUSP"
                        name="packageUSP"
                        placeholder="Enter Package USP"
                        value={packageData.packageUSP}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="images">Select Image*:</label>
                      <input
                        type="file"
                        className="form-control input-lg"
                        id="images"
                        name="images"
                        onChange={handleImageChange}
                        accept=".jpeg, .jpg, .webp"
                        multiple
                        required
                      />
                      {errors.images && (
                        <p className="text-danger">{errors.images}</p>
                      )}
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="enabled">Status* :</label>
                      <select
                        className="form-control input-lg"
                        id="enabled"
                        name="enabled"
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled selected>
                          Please select
                        </option>
                        <option value="true">Enable</option>
                        <option value="false">Disable</option>
                      </select>
                      {errors.enabled && (
                        <p className="text-danger">{errors.enabled}</p>
                      )}
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label>Time Slots* :</label>
                      {packageData.timeSlots.map((slot, index) => (
                        <div key={index} className="row mb-2">
                          <div className="col-md-4">
                            <input
                              type="time"
                              className="form-control"
                              name="from"
                              placeholder="From"
                              value={slot.from}
                              onChange={(e) =>
                                handleTimeChange(index, "from", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <input
                              type="time"
                              className="form-control"
                              name="to"
                              placeholder="To"
                              value={slot.to}
                              onChange={(e) =>
                                handleTimeChange(index, "to", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            {index > 0 && (
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => handleRemoveTimeSlot(index)}
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-secondary mt-2"
                        onClick={handleAddTimeSlot}
                      >
                        Add Time Slot
                      </button>
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label>Perks* :</label>
                      {packageData.perks.map((perk, index) => (
                        <div key={index} className="row mb-2">
                          <div className="col-md-4 my-1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Perk Icon class"
                              value={perk.icon}
                              name="icon"
                              onChange={(e) =>
                                handlePerkChange(index, "icon", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="col-md-4 my-1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Perk Text"
                              value={perk.text}
                              name="text"
                              onChange={(e) =>
                                handlePerkChange(index, "text", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            {index > 0 && (
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => handleRemovePerk(index)}
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-secondary mt-2"
                        onClick={handleAddPerk}
                      >
                        Add Perk
                      </button>
                    </div>

                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="description">
                        Package Description* :
                      </label>
                      <MyHTMLEditor
                        editorHtml={editorHtml}
                        setEditorHtml={setEditorHtml}
                      />
                    </div>

                    {errors.submit && (
                      <p className="text-danger">{errors.submit}</p>
                    )}

                    <div className="form-group" style={{ padding: "20px" }}>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                      >
                        Submit
                      </button>
                    </div>
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
