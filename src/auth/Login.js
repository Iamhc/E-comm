import React from "react";

const Login = ({ formData, handleInputChange, handleSubmit, errorMsg }) => {
  return (
    <div
      className="container-fluid bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card text-white shadow-lg border-0 p-4 mx-3"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#1e1e2f",
          borderRadius: "12px",
        }}
      >
        <div className="text-center mb-3">
          <h3 className="fw-bold mb-1">🛍️ ShopHub</h3>
          <p className="text-secondary small mb-0">Sign in to continue</p>
        </div>

        <div
          className="alert alert-danger py-2 text-center small mb-4 shadow-sm"
          role="alert"
        >
          <strong>Demo:</strong> Email: demo@demo | Password: demo
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-secondary mb-1">
              Email address
            </label>
            <input
              type="email"
              name="userEmail"
              id="email"
              className="form-control bg-transparent text-white border-secondary"
              placeholder="Enter your email"
              value={formData.userEmail}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pwd" className="form-label text-secondary mb-1">
              Password
            </label>
            <input
              type="password"
              name="userPwd"
              id="pwd"
              className="form-control bg-transparent text-white border-secondary"
              placeholder="Enter your password"
              value={formData.userPwd}
              onChange={handleInputChange}
              required
            />
          </div>

          {errorMsg && (
            <div className="text-danger text-center small mb-3 fw-semibold">
              {errorMsg}
            </div>
          )}

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary fw-semibold shadow-sm py-2"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <small className="text-secondary">
            Forgot password?{" "}
            <button
              onClick={() => {
                /* TODO: Add reset password handler */
              }}
              className="btn btn-link btn-sm text-primary p-0 text-decoration-none border-0"
            >
              Reset
            </button>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
