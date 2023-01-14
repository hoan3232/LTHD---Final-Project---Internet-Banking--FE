import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { instance, parseJwt } from "../utils.js";

function SubmitEmail(props) {
  const [email, setEmail] = useState();
  const [result, setResult] = useState();
  const navigate = useNavigate();
  const handleInfo = (val) => {
    setEmail(val);
  };
  const sendOTP = async () => {
    const res = await instance.post(`otp/sendOTP/${email}`);
    // setResult(res.data.hash);
    // console.log(res.data.hash);
    // console.log(result);
    return res.data.hash;
  };
  const handleSubmit = async () => {
    sendOTP()
      .then((value) => {
        navigate("/otp", { state: { user: email, hash: value } });
        console.log("hi");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      <h2>Nhập mail xác nhận</h2>
      <form>
        <div className="fg">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => handleInfo(event.target.value)}
          />
        </div>
        <div className="fg mt-3">
          <button type="button" onClick={handleSubmit}>
            Xác nhận
          </button>
        </div>
        <Link to="/login">
          <button type="button1-ck">Back</button>
        </Link>
      </form>
    </div>
  );
}

export default SubmitEmail;
