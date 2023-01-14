import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { instance, parseJwt } from "../utils.js";

export default function Login(props) {
  let recaptchaInstance;

  // create a reset function
  const resetRecaptcha = () => {
    recaptchaInstance.reset();
  };
  const nagivate = useNavigate();
  const location = useLocation();
  const [check, setCheck] = useState(false);

  const handleOnChange = () => {
    setCheck(true);
  };
  const {
    register,
    handleSubmit,

    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    recaptchaInstance.reset();
  }, []);
  const onSubmit = async function (data) {
    try {
      const res = await instance.post("/auth", data);
      if (res.data.authenticated) {
        // console.log(res.data.accessToken);
        localStorage.todoApp_accessToken = res.data.accessToken;

        const obj = parseJwt(res.data.accessToken);
        localStorage.todoApp_userId = obj.userId;
        localStorage.todoApp_userSTK = obj.stk;
        localStorage.todoApp_userName = obj.Name;
        localStorage.todoApp_userSodu = obj.SoDu;

        // console.log(location.state);
        const retUrl = location.state?.from?.pathname || "/";
        nagivate(retUrl);
      } else {
        alert("Invalid login.");
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fg">
          <input
            type="text"
            placeholder="Username"
            autoFocus
            {...register("username", { required: true })}
          />
        </div>
        <div className="fg">
          {errors.username && <span>Username is invalid</span>}
        </div>
        <div className="fg mt-2">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="fg">
          {errors.password && <span>Password is incorrect</span>}
        </div>
        <div className="g-recaptcha ">
          <ReCAPTCHA
            ref={(e) => (recaptchaInstance = e)}
            sitekey={"6LceovcjAAAAAI_t_sFd-jsn8CEVyxscgq2hiU5-"}
            onChange={handleOnChange}
          />
        </div>
        <div className="fg mt-3">
          <button type="submit" disabled={!check}>
            LOGIN
          </button>
        </div>

        <Link to="/submitemail">
          <div className="changepass">Change Password</div>
        </Link>
        <Link to="/employee">
          <div className="changepass">Employee</div>
        </Link>
        <Link to="/administrator">
          <div className="changepass">Administrator</div>
        </Link>
      </form>
    </div>
  );
}
