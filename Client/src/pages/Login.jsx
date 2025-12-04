import React, { useState } from 'react';
import '../styles/Login.css'; // Import the CSS file created above
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('employee'); // Default role
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [login,setlogin]=useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Login Logic Here
    console.log(`Logging in as ${role}:`, formData);
   // alert(`Login request sent for ${role.toUpperCase()}`);
    setlogin(true);
  };
if(login)
  {
    console.log(role);
    if(role==="admin")navigate("/adminhome")
    else navigate("/home");
  }
  
  return (
    
    <div className="container-fluid login-page">
      <div className="login-card">
        
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Welcome Back</h2>
          <p className="text-muted">Please login to your account</p>
        </div>

        {/* Role Switcher */}
        <div className="role-switch">
          <button 
            type="button" 
            className={`role-btn ${role === 'admin' ? 'active' : ''}`}
            onClick={() => setRole('admin')}
          >
            Admin
          </button>
          <button 
            type="button" 
            className={`role-btn ${role === 'employee' ? 'active' : ''}`}
            onClick={() => setRole('employee')}
          >
            Employee
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              {role === 'admin' ? 'Admin Email' : 'Employee ID / Email'}
            </label>
            <input 
              type="email" 
              name="email"
              className="form-control custom-input" 
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input 
              type="password" 
              name="password"
              className="form-control custom-input" 
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 btn-login">
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none small text-secondary">
            Forgot Password?
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Login;