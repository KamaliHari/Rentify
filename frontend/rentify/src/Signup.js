import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';

export default function Signup() {
  const [formData, setFormData] = useState({
    role: 'buyer',
    firstname: '',
    lastname: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure the passwords match
    if (formData.password !== formData.confirm_password) {
      alert('Passwords do not match');
      return;
    }

    axios.post('http://localhost:3001/signup', formData)
      .then(response => {
        console.log(response.data);
        alert('User created successfully');
      })
      .catch(error => {
        console.error('There was an error creating the user!', error);
      });
  };

  return (
    <main>
      <section className="sign-in-form section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto col-12">
              <h1 className="hero-title text-center mb-5">Sign Up</h1>

              <div className="row">
                <div className="col-lg-8 col-11 mx-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="form-floating">
                      <select
                        name="role"
                        className="form-control"
                        value={formData.role}
                        onChange={handleChange}
                        required
                      >
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                      </select>
                      <label htmlFor="role">Role</label>
                    </div>

                    <div className="form-floating my-4">
                      <input
                        type="text"
                        name="firstname"
                        className="form-control"
                        placeholder="First Name"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="firstname">First Name</label>
                    </div>

                    <div className="form-floating my-4">
                      <input
                        type="text"
                        name="lastname"
                        className="form-control"
                        placeholder="Last Name"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="lastname">Last Name</label>
                    </div>

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
                        type="text"
                        name="phone_number"
                        className="form-control"
                        placeholder="Phone Number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="phone_number">Phone Number</label>
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
                      <p className="text-center">
                        * shall include 0-9 a-z A-Z in 4 to 10 characters
                      </p>
                    </div>

                    <div className="form-floating">
                      <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        pattern="[0-9a-zA-Z]{4,10}"
                        className="form-control"
                        placeholder="Password"
                        value={formData.confirm_password}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="confirm_password">Password Confirmation</label>
                    </div>
                    
                    <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                      Create account
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
