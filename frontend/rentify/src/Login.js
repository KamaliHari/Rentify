import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [role, setRole] = useState(null); // Define role state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:3001/login', formData)
    .then(response => {
      console.log('Response Data:', response.data); // Log entire response data
      const { role } = response.data;
      setRole(role);
      console.log('Role:', role); // Log role value
      if (role === 'seller') {
        navigate('/seller');
      } else if (role === 'buyer') {
        navigate('/buyer');
      } else {
        setError('Invalid role');
      }
    })
    .catch(error => {
      setError('Invalid email or password');
    });
};

  

  return (
  
    <main>
    <section className="sign-in-form section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto col-12">
            <h1 className="hero-title text-center mb-5">Login</h1>

            <div className="row">
              <div className="col-lg-8 col-11 mx-auto">
                <form onSubmit={handleSubmit}>
                
                <div className="form-floating my-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Email</label>
                </div>

                <div className="form-floating my-4">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        pattern="[0-9a-zA-Z]{4,10}"
                        className="form-control"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="password">Password</label>
                      </div>

                      <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                      Login
                    </button>
                    </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
