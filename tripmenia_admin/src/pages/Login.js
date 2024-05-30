import React, { useState } from 'react';
import API from '../connection/connections'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please enter username and password');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post(`${API}/admin/login`, { username, password });
            if (response.status === 200) {
                // Handle successful login
               
                // Assuming 'response.data.token' contains the token from the server
             Cookies.set('token', response.data.token, { expires: 7, path: '/' });

                navigate('/dashboard')
                
            } else {
                setError('Wrong username or password');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred, please try again');
        }

        setLoading(false);
    };

    return (
<>
        <div id="wrapper">
		<div className="vertical-align-wrap">
			<div className="vertical-align-middle">
				<div className="auth-box ">
					<div className="left">
						<div className="content">
							<div className="header">
								<div className="logo text-center"><img src="assets/img/logo-dark.png" alt="Klorofil Logo" /></div>
								<p className="lead">Login to your account</p>
							</div>
							<form className="form-auth-small" onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="signin-email" className="control-label sr-only">Username</label>
									<input type="text" className="form-control" id="signin-email" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
								</div>
								<div className="form-group">
									<label htmlFor="signin-password" className="control-label sr-only">Password</label>
									<input type="password" className="form-control" id="signin-password"  placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
								</div>
							
								<button type="submit" className="btn btn-primary btn-lg btn-block" disabled={loading}>LOGIN</button>
                                {error && <div className="error-message">{error}</div>}
								<div className="bottom">
									<span className="helper-text"><i className="fa fa-lock"></i> <a href="#">Forgot password?</a></span>
								</div>
							</form>
						</div>
					</div>
					<div className="right">
						<div className="overlay"></div>
						<div className="content text">
							<h1 className="heading">TRIPMENIA LOGIN</h1>
							<p>Account Management</p>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
	</div>

    </>
    );
        {/* <div className="login-form-container">
        <div>
            <h1 className="login-heading">Admin Login</h1>
            <div className="login-form">
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                       
                    />
                    <button type="submit" disabled={loading} >Login</button>
                </form>
            </div>
        </div>
    </div> 
    );*/}
};