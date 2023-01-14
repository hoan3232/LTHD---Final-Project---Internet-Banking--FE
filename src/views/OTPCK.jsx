import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { instance, parseJwt } from "../utils.js";

function OTP(props) {
  const [otp, setOtp] = useState();
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user, hash } = state;
  const handleInfo = (val) => {
    setOtp(val);
  };

  const verifyOTP = async () => {
    const data = {
      hash: hash,
      otp: otp,
      email: user,
    };
    const res = await instance.post(`otpck/verifyOTP`, data);
    return res.status;
  };

  const handleSubmit = () => {
    verifyOTP()
      .then((value) => {
        if (value === 201)
          navigate("/", {
            state: {
              user: user,
            },
          });
        else {
          alert("Invalid OTP, please check your OTP code again.");
        }
      })
      .catch((e) => {
        console.log(e);
      });
    // if (res.status === 201) navigate("/changepass");
    // else {
    // }
    // console.log(result);
    // navigate("/changepass");
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
          <button type="button" onClick={handleSubmit}>
            Xác nhận
          </button>
        </div>
        <Link to="/submitemailck">
          <button type="button1-ck">Back</button>
        </Link>
      </form>
    </div>
  );
}
export default OTP;
