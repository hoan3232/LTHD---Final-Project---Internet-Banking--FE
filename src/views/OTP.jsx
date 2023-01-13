import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { instance, parseJwt } from "../utils.js";

function OTP(props) {
  const [otp, setOtp] = useState();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user } = state;
  const handleInfo = (val) => {
    setOtp(val);
  };
  const handleSubmit = () => {
    navigate("/login");
    console.log(user);
  };

  return (
    <div className="container">
      <h2>Nhập OTP</h2>
      <form>
        <div className="fg">
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(event) => handleInfo(event.target.value)}
          />
        </div>
        <div className="fg mt-3">
          <button type="submit" onClick={handleSubmit}>
            Xác nhận
          </button>
        </div>
        <Link to="/submitemail">
          <button type="button1-ck">Back</button>
        </Link>
      </form>
    </div>
  );
}
export default OTP;
