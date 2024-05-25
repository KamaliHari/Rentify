import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
