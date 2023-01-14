import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { instance, parseJwt } from "../utils.js";
export default function Changepass(props) {
  const nagivate = useNavigate();
  const location = useLocation();
  const { state } = useLocation();
  const { user } = state;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async function (data) {
    // console.log(data);

    try {
      const res = await instance.post(`users/changepassword/${user}`, {
        password: data.password,
      });
      if (res.status === 201) {
        // console.log(res.data.accessToken);
        // console.log(location.state);
        const retUrl = location.state?.from?.pathname || "/login";
        nagivate(retUrl);
      } else {
        alert("Invalid password.");
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
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fg mt-2">
          <input
            type="password"
            placeholder="Enter new password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="fg">
          {errors.password && <span>Password is incorrect</span>}
        </div>
        <div className="fg mt-2">
          <input
            type="password"
            placeholder="Re-enter new password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="fg">
          {errors.password && <span>Password is incorrect</span>}
        </div>
        <div className="fg mt-3">
          <button type="submit">CONFIRM</button>
        </div>
        <Link to="/">
          <div className="changepass">Back</div>
        </Link>
      </form>
    </div>
  );
}
