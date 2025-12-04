import React, { useState } from 'react';
import '../styles/Signin.css';

const AdminHome = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Add admin login logic here
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="admin-login-container">
      <div className="admin-animated-bg">
        <div className="admin-blob admin-blob-1"></div>
        <div className="admin-blob admin-blob-2"></div>
        <div className="admin-blob admin-blob-3"></div>
      </div>

      <div className="admin-login-wrapper">
        <div className="admin-login-card">
          <div className="admin-login-header">
            <div className="admin-icon">🔐</div>
            <h1>Admin Portal</h1>
            <p>Secure Administrator Access</p>
          </div>

          <form onSubmit={handleSubmit} className="admin-login-form">
            <div className="admin-form-group">
              <label htmlFor="admin-email">Email Address</label>
              <div className="admin-input-wrapper">
                <span className="admin-input-icon">✉️</span>
                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label htmlFor="admin-password">Password</label>
              <div className="admin-input-wrapper">
                <span className="admin-input-icon">🔒</span>
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="admin-toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="admin-form-options">
              <label className="admin-remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="admin-forgot-link">Forgot password?</a>
            </div>

            <button
              type="submit"
              className={`admin-login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="admin-spinner"></span>
                  Authenticating...
                </>
              ) : (
                'Sign In as Admin'
              )}
            </button>
          </form>

          <div className="admin-security-notice">
            <span className="admin-notice-icon">⚠️</span>
            <p>This is a secure admin area. Unauthorized access is prohibited.</p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default AdminHome;