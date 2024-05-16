import React, { useState } from 'react';
import API from '../connection/connections'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function AddCategory() {
    const [categoryData, setCategoryData] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    function handleChange(event) {
        setCategoryData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }


    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = Cookies.get('token');
      console.log(token);
      if(!token)
      {
        navigate('/')
      }
      try {
        const response = await axios.post(`${API}/categories/add`,categoryData,{
            headers: {
              Authorization: token
            }
          });
          if (response.status === 201) {
            // Handle successful login
            
            setError(response.data.message)
            navigate('/category-view')
          }
          if (response.status === 202) {
            // Handle successful login
            
            setError(response.data.message)
        
          }
        // Optionally, you can redirect to another page after successful submission
      } catch (error) {
        setError('An error occurred, please try again');
        console.error('Error:', error);
      }
    };
  
    const isFormValid = categoryData;
  
    return (
        <div id="wrapper">
            <Header />
            <Sidebar />
            <div className="main">

                <div className="main-content">
                    <div className="container-fluid">
                        <div className="panel panel-headline">
                            <div className="panel-heading">
                                <h3 className="panel-title">Add Category</h3>
                                <p className="panel-subtitle">(Main Category Name)</p>
                            </div>
                            <div className="row">

                                <div className="col-md-12">
                                    <form className="form-auth-small" onSubmit={handleSubmit}>
                                        <div className="form-group" style={{ padding: '20px' }} >

                                            <label htmlFor="categoryName">Category Name* :</label>
                                            <input
                                                type="text"
                                                className="form-control input-lg"
                                                id="categoryName"
                                                name="categoryName"
                                                
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group" style={{ padding: '20px' }}>

                                            <label htmlFor="categoryDescription">Category Description* :</label>
                                            <input
                                                type="text"
                                                className="form-control input-lg"
                                                id="categoryDescription"
                                                name="categoryDescription"
                                                
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <button className="btn btn-primary btn-block" style={{width: '97%',margin: '0 auto 30px'}}  type="submit"  disabled={!isFormValid}>Add Category</button>
                                    </form>
                                    {error && <div style={{fontSize : "24px",padding:"20px", color:"red"}}>{error}</div>}
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
