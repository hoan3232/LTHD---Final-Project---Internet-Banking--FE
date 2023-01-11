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
import { data } from "../constant/temp-data";
console.log(data);
const user = data[0];

const AuthInfo = () => {
  const navigate = useNavigate();
  const btnSignOut_Clicked = function (e) {
    delete localStorage.todoApp_accessToken;
    delete localStorage.todoApp_userId;
    navigate("/login");
  };

  return (
    <div className="Infor">
      <div className="nav">
        <div>Số tài khoản: {localStorage.todoApp_userSTK}</div>
        <div>Tên người dùng: {localStorage.todoApp_userName}</div>
        <div>Số dư khả dụng: {localStorage.todoApp_userSodu}</div>
      </div>
      <button type="button" onClick={btnSignOut_Clicked}>
        Sign out
      </button>
    </div>
  );
};

export default AuthInfo;
