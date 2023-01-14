import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { instance, parseJwt } from "../utils.js";

function OTPCK(props) {
  const [otp, setOtp] = useState();
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { hash, user, amount, message } = state;
  const handleInfo = (val) => {
    setOtp(val);
  };

  const verifyOTP = async () => {
    const data = {
      hash: hash,
      otp: otp,
      email: localStorage.todoApp_userEmail,
      Id1: localStorage.todoApp_userSTK,
      Id2: user,
      amount: amount,
    };
    const res = await instance.put(`users/transfer`, data);
    return res.status;
  };

  const createTrans = async () => {
    const date = new Date(Date.now());
    const res = await instance.post(`users/createTrans`, {
      Ngay_Gio: date,
      Ma_Ng_Gui: localStorage.todoApp_userSTK,
      Ma_Ng_Nhan: user,
      So_Tien: parseFloat(amount),
      Noi_Dung: message,
      Hinh_Thuc_TT: true,
    });
    return res.status;
  };
  const handleSubmit = () => {
    verifyOTP()
      .then((value) => {
        if (value === 201) {
          createTrans().then((value) => {
            navigate("/");
          });
        } else {
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
            autoFocus
          />
        </div>
        <div className="fg mt-3">
          <button type="button" onClick={handleSubmit}>
            Xác nhận
          </button>
        </div>
        <Link to="/transfer">
          <button type="button1-ck">Back</button>
        </Link>
      </form>
    </div>
  );
}
export default OTPCK;
