import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import API from "../connection/connections";

function BannerManager() {
  const [banners, setBanners] = useState({
    topBanner: "",
    middleBanner: "",
    footerBanner: "",
  });
  const [selectedFiles, setSelectedFiles] = useState({
    topBanner: null,
    middleBanner: null,
    footerBanner: null,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
    } else {
      fetchBanners();
    }
  }, [navigate]);

  const fetchBanners = async () => {
    try {
      const response = await axios.get(`${API}/banners/get-banner`);
      const fetchedBanners = response.data.banner.reduce((acc, banner) => {
        acc[banner.name] = banner.imagePath;
        return acc;
      }, {});
      setBanners(fetchedBanners);
    } catch (error) {
      console.error("Error fetching banners", error);
    }
  };

  const handleFileChange = (e, bannerName) => {
    setSelectedFiles({
      ...selectedFiles,
      [bannerName]: e.target.files[0],
    });
  };

  const handleSubmit = async (e, bannerName, updateEndpoint) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFiles[bannerName]);
    const token = Cookies.get("token");

    try {
      await axios.post(`${API}/banners/${updateEndpoint}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      });
      fetchBanners();
    } catch (error) {
      setError("An error occurred, please try again");
      console.error(`Error updating ${bannerName}`, error);
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
                <h3 className="panel-title">Banner Manager</h3>
                <p className="panel-subtitle">(Manage your banners)</p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <h2>Top Banner</h2>
                    {banners.topBanner && (
                      <img src={banners.topBanner} alt="Top Banner" />
                    )}
                    <form
                      onSubmit={(e) =>
                        handleSubmit(e, "topBanner", "update-top-banner")
                      }
                    >
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, "topBanner")}
                        required
                      />
                      <button className="btn btn-primary" type="submit">
                        Update Top Banner
                      </button>
                    </form>
                  </div>
                  <div>
                    <h2>Middle Banner</h2>
                    {banners.middleBanner && (
                      <img src={banners.middleBanner} alt="Middle Banner" />
                    )}
                    <form
                      onSubmit={(e) =>
                        handleSubmit(e, "middleBanner", "update-middle-banner")
                      }
                    >
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, "middleBanner")}
                        required
                      />
                      <button className="btn btn-primary" type="submit">
                        Update Middle Banner
                      </button>
                    </form>
                  </div>
                  <div>
                    <h2>Footer Banner</h2>
                    {banners.footerBanner && (
                      <img src={banners.footerBanner} alt="Footer Banner" />
                    )}
                    <form
                      onSubmit={(e) =>
                        handleSubmit(e, "footerBanner", "update-footer-banner")
                      }
                    >
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, "footerBanner")}
                        required
                      />
                      <button className="btn btn-primary" type="submit">
                        Update Footer Banner
                      </button>
                    </form>
                  </div>
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

export default BannerManager;
