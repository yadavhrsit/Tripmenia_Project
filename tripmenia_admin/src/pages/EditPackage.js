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
  const [initialPackageData, setInitialPackageData] = useState({});
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
    perks: [],
  });
  const [editorHtml, setEditorHtml] = useState("");
  const [errors, setErrors] = useState({});

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

        const formatTime = (time) => {
          // Convert time to HH:MM format if necessary
          const [hours, minutes] = time.split(":");
          console.log(`${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`);
          return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
        };

        const data = response.data;
        data.timeSlots.forEach((slot) => {
          console.log(slot);
        });

        setPackageData({
          categoryId: data.categoryId._id,
          packageName: data.packageName,
          price: data.price,
          specialPrice: data.specialPrice,
          packageUSP: data.packageUSP,
          description: data.description,
          enabled: data.enabled,
          timeSlots: data.timeSlots.map((slot) => ({
            from: formatTime(slot.from) || slot.from, // Ensure time is in HH:MM format
            to: formatTime(slot.to) || slot.to, // Ensure time is in HH:MM format
          })),
          images: data.images || [],
          perks: data.perks || [],
        });
        setInitialPackageData({
          categoryId: data.categoryId._id,
          packageName: data.packageName,
          price: data.price,
          specialPrice: data.specialPrice,
          packageUSP: data.packageUSP,
          description: data.description,
          enabled: data.enabled,
          timeSlots: data.timeSlots.map((slot) => ({
            from: formatTime(slot.from) || slot.from, // Ensure time is in HH:MM format
            to: formatTime(slot.to) || slot.to, // Ensure time is in HH:MM format
          })),
          images: data.images || [],
          perks: data.perks || [],
        });
        setEditorHtml(data.description);
      } catch (error) {
        console.error("Error fetching package details:", error);
        setErrors((prev) => ({
          ...prev,
          fetch: "Failed to load package details.",
        }));
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
        setErrors((prev) => ({
          ...prev,
          fetchCategories: "Failed to load categories.",
        }));
      }
    };
    fetchCategories();
  }, []);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...packageData.images];
    const imagesErrors = [];

    files.forEach((file) => {
      if (file.size > 20097152) {
        imagesErrors.push("Size is too large");
        return;
      }
      if (!["image/jpeg", "image/jpg", "image/webp"].includes(file.type)) {
        imagesErrors.push("Please upload jpg/jpeg/webp only");
        return;
      }
      newImages.push(file);
    });

    setErrors((prev) => ({ ...prev, images: imagesErrors.join(", ") }));
    setPackageData((prev) => ({ ...prev, images: newImages }));
  };

  const handleRemoveImage = (index) => {
    setPackageData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setPackageData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleAddTimeSlot = () => {
    setPackageData((prev) => ({
      ...prev,
      timeSlots: [...prev.timeSlots, { from: "", to: "" }],
    }));
  };

  const handleTimeSlotChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTimeSlots = [...packageData.timeSlots];
    updatedTimeSlots[index][name] = value;
    setPackageData((prev) => ({ ...prev, timeSlots: updatedTimeSlots }));
  };

  const handleRemoveTimeSlot = (index) => {
    setPackageData((prev) => ({
      ...prev,
      timeSlots: prev.timeSlots.filter((_, i) => i !== index),
    }));
  };

  const handleAddPerk = () => {
    setPackageData((prev) => ({
      ...prev,
      perks: [...prev.perks, { icon: "", text: "" }],
    }));
  };

  const handlePerkChange = (index, e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    const updatedPerks = [...packageData.perks];
    updatedPerks[index][name] = value;
    setPackageData((prev) => ({ ...prev, perks: updatedPerks }));
  };

  const handleRemovePerk = (index) => {
    setPackageData((prev) => ({
      ...prev,
      perks: prev.perks.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    // Prepare a FormData object only with the changed fields
    const formData = new FormData();

    if (packageData.categoryId !== initialPackageData.categoryId) {
      formData.append("categoryId", packageData.categoryId);
    }
    if (packageData.packageName !== initialPackageData.packageName) {
      formData.append("packageName", packageData.packageName);
    }
    if (packageData.price !== initialPackageData.price) {
      formData.append("price", packageData.price);
    }
    if (packageData.specialPrice !== initialPackageData.specialPrice) {
      formData.append("specialPrice", packageData.specialPrice);
    }
    if (packageData.packageUSP !== initialPackageData.packageUSP) {
      formData.append("packageUSP", packageData.packageUSP);
    }
    if (editorHtml !== initialPackageData.description) {
      formData.append("description", editorHtml);
    }
    if (packageData.enabled !== initialPackageData.enabled) {
      formData.append("enabled", packageData.enabled);
    }
    if (
      JSON.stringify(packageData.timeSlots) !==
      JSON.stringify(initialPackageData.timeSlots)
    ) {
      formData.append("timeSlots", JSON.stringify(packageData.timeSlots));
    }
    if (
      JSON.stringify(packageData.perks) !==
      JSON.stringify(initialPackageData.perks)
    ) {
      formData.append("perks", JSON.stringify(packageData.perks));
    }

    // Only include new images
    packageData.images.forEach((image) => {
      if (image instanceof File) {
        formData.append("images", image);
      }
    });

    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
      return;
    }

    try {
      const response = await axios.patch(`${API}/packages/${id}`, formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        navigate(`/viewpackagedetails/${id}`);
      }
    } catch (error) {
      console.error("Error updating package:", error);
      setErrors((prev) => ({
        ...prev,
        submit: "An error occurred while updating the package.",
      }));
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
                    {/* Category Selection */}
                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="categoryId">Select Category* :</label>
                      <select
                        className="form-control input-lg"
                        id="categoryId"
                        name="categoryId"
                        value={packageData.categoryId}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Please select
                        </option>
                        {categories.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.categoryName}
                          </option>
                        ))}
                      </select>
                      {errors.categoryId && (
                        <p className="text-danger">{errors.categoryId}</p>
                      )}
                    </div>

                    {/* Package Name */}
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
                      {errors.packageName && (
                        <p className="text-danger">{errors.packageName}</p>
                      )}
                    </div>

                    {/* Image Upload */}
                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="images">Image Upload(s) :</label>
                      <input
                        type="file"
                        id="images"
                        name="images"
                        accept=".jpg, .jpeg, .webp"
                        onChange={handleImageChange}
                        multiple
                      />
                      {errors.images && (
                        <p className="text-danger">{errors.images}</p>
                      )}
                      {packageData.images.length > 0 && (
                        <div>
                          {packageData.images.map((image, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <img
                                src={
                                  image instanceof File
                                    ? URL.createObjectURL(image)
                                    : `https://tripmenia.com/public/upload/${image}`
                                }
                                alt={`Package ${index}`}
                                className="img-fluid"
                                style={{ width: "100px", height: "100px" }}
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

                    {/* Price */}
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
                      {errors.price && (
                        <p className="text-danger">{errors.price}</p>
                      )}
                    </div>

                    {/* Special Price */}
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
                      {errors.specialPrice && (
                        <p className="text-danger">{errors.specialPrice}</p>
                      )}
                    </div>

                    {/* Package USP */}
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
                      {errors.packageUSP && (
                        <p className="text-danger">{errors.packageUSP}</p>
                      )}
                    </div>

                    {/* Description */}
                    <div className="form-group" style={{ padding: "20px" }}>
                      <label htmlFor="description">Description* :</label>
                      <MyHTMLEditor
                        editorHtml={editorHtml}
                        setEditorHtml={setEditorHtml}
                      />
                      {errors.description && (
                        <p className="text-danger">{errors.description}</p>
                      )}
                    </div>

                    {/* Enabled/Disabled */}
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
                      {errors.enabled && (
                        <p className="text-danger">{errors.enabled}</p>
                      )}
                    </div>

                    {/* Time Slots */}
                    <div className="form-group" style={{ padding: "20px" }}>
                      <label>Time Slots :</label>
                      {packageData.timeSlots.map((slot, index) => (
                        <div key={index} style={{ marginBottom: "10px" }}>
                          <input
                            type="time"
                            name="from"
                            value={slot.from}
                            onChange={(e) => handleTimeSlotChange(index, e)}
                            style={{ marginRight: "10px" }}
                            required
                          />
                          <input
                            type="time"
                            name="to"
                            value={slot.to}
                            onChange={(e) => handleTimeSlotChange(index, e)}
                            style={{ marginRight: "10px" }}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveTimeSlot(index)}
                            style={{ marginLeft: "10px" }}
                          >
                            Remove Time Slot
                          </button>
                        </div>
                      ))}
                      <button type="button" onClick={handleAddTimeSlot}>
                        Add Time Slot
                      </button>
                    </div>

                    {/* Perks */}
                    <div className="form-group" style={{ padding: "20px" }}>
                      <label>Perks :</label>
                      {packageData.perks.length > 0 ? (
                        <ul>
                          {packageData.perks.map((perk, index) => (
                            <li key={index} style={{ marginBottom: "10px" }}>
                              <input
                                type="text"
                                name="icon"
                                value={perk.icon}
                                onChange={(e) => handlePerkChange(index, e)}
                                placeholder="Icon class"
                                style={{ marginRight: "10px" }}
                                required
                              />
                              <input
                                type="text"
                                name="text"
                                value={perk.text}
                                onChange={(e) => handlePerkChange(index, e)}
                                placeholder="Perk text"
                                required
                              />
                              <button
                                type="button"
                                onClick={() => handleRemovePerk(index)}
                                style={{ marginLeft: "10px" }}
                              >
                                Remove Perk
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No perks added.</p>
                      )}
                      <button type="button" onClick={handleAddPerk}>
                        Add Perk
                      </button>
                    </div>

                    {errors.submit && (
                      <p className="text-danger">{errors.submit}</p>
                    )}

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
