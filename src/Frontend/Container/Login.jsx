import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../public/css/style.css"
const Login = () => {
  const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const navigate = useNavigate();
const handleLogin = (e) => {
  e.preventDefault();

  // ✅ Teacher login
  if (username === "teacher" && password === "Admin@123") {
    setError("");
    navigate("/teacheradmin");
  }

  // ✅ Student login
  else if (username === "student" && password === "Password@123") {
    setError("");
    navigate("/studentadmin");
  }

  // ❌ Invalid login
  else {
    setError("Invalid username or password");
  }
};

  return (
    <>
      <div className="loginWrap">
        <div className="loginBox">
          
          <div className="loginFields">
            <div className="logo">
              <img src="images/logo.svg" height="91" width="150" alt="" />
            </div>

            {/* LOGIN FORM */}
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Username</label>
                <input
                 value={username}
  onChange={(e) => setUsername(e.target.value)}
                type="text" className="form-control" placeholder="Enter Username" />
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>

              <div className="form-group mrgT20">
                <label>Password</label>
                <input
                value={password}
  onChange={(e) => setPassword(e.target.value)}
                type="password" className="form-control" placeholder="Enter Password" />
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>

              <div className="mrgT20">
                <button type="submit" className="loginBtn">Login</button>

                {/* ✅ OPEN MODAL BUTTON */}
                <button
                  type="button"
                  className="registerBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                  style={{ marginLeft: "10px" }}
                >
                  Register
                </button>

                <span className="forgotLink">Forgot Password</span>
              </div>
            </form>
          </div>

          <div className="loginImg">
            <img src="images/login-img.jpg" alt="" />
          </div>

        </div>
      </div>

      {/* ✅ FULL SCREEN MODAL */}
      <div
        className="modal custom-modal fade"
        id="registerModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            {/* HEADER */}
            <div className="modal-header">
             
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* BODY */}
            <div className="modal-body">
              <form>
                
                <div className="row g-3">

  <div className="col-md-4">
    <div className="form-group">
      <label className="form-label">
        First Name <span className="text-danger">*</span>
      </label>
      <input type="text" className="form-control" />
    </div>
  </div>

  <div className="col-md-4">
    <div className="form-group">
      <label className="form-label">
        Middle Name <span className="text-danger">*</span>
      </label>
      <input type="text" className="form-control" />
    </div>
  </div>

  <div className="col-md-4">
    <div className="form-group">
      <label className="form-label">
        Last Name <span className="text-danger">*</span>
      </label>
      <input type="text" className="form-control" />
    </div>
  </div>

  <div className="col-md-4">
    <div className="form-group">
      <label className="form-label">
        Email <span className="text-danger">*</span>
      </label>
      <input type="email" className="form-control" />
    </div>
  </div>

  <div className="col-md-4">
    <div className="form-group">
      <label className="form-label">
        Mobile No. <span className="text-danger">*</span>
      </label>
      <input type="text" className="form-control" />
    </div>
  </div>

  <div className="col-md-4">
    <div className="form-group">
      <label className="form-label">
        Date of Birth <span className="text-danger">*</span>
      </label>
      <input type="date" className="form-control" />
    </div>
  </div>

</div>

                <div className="mt-4">
                  <button className="loginBtn">Register</button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
      <style>
{`
.custom-modal .modal-content {
  border-radius: 0;
  position: relative;
  padding:30px 30px 60px 30px 
}

.custom-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #b084cc;
  border-radius: 50%;
  padding: 8px;
  opacity: 1;
}

.form-control {
padding: 10px;
    border-radius: 0;
    border: 1px solid #ccc;
}

.register-btn {
  background: linear-gradient(45deg, #f7971e, #ff5f6d);
  border: none;
  color: #fff;
  padding: 10px 25px;
  border-radius: 5px;
}
  .custom-modal .modal-dialog {
  max-width: 80%;   /* adjust: 800–1000px */
  margin: auto;
}
`}
</style>
    </>
   
  );
};

export default Login;