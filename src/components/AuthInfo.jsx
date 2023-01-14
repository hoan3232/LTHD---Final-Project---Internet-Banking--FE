// export default function AuthInfo() {
//   const navigate = useNavigate();
//   const btnSignOut_Clicked = function (e) {
//     delete localStorage.todoApp_accessToken;
//     delete localStorage.todoApp_userId;
//     navigate("/login");
//   };

//   return (
//     <div className="nav">
//       <span>UserId: {localStorage.todoApp_userId}</span>
//       <button type="button" onClick={btnSignOut_Clicked}>
//         Sign out
//       </button>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { instance } from "../utils";

const AuthInfo = () => {
  const [sodu, setsodu] = useState(0);
  const navigate = useNavigate();
  const btnSignOut_Clicked = function (e) {
    delete localStorage.todoApp_accessToken;
    delete localStorage.todoApp_userId;
    navigate("/login");
  };

  useEffect(() => {
    const getNN = async () => {
      const res = await instance.get(
        `users/info/${localStorage.todoApp_userSTK}`
      );
      setsodu(res.data.So_Du);
    };
    getNN();
  }, []);
  return (
    <div className="Infor">
      <div className="nav">
        <div>Số tài khoản: {localStorage.todoApp_userSTK}</div>
        <div>Tên người dùng: {localStorage.todoApp_userName}</div>
        <div>Số dư khả dụng: {sodu}</div>
      </div>
      <button type="button" onClick={btnSignOut_Clicked}>
        Sign out
      </button>
    </div>
  );
};

export default AuthInfo;
