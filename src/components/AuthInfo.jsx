import { useNavigate } from "react-router-dom";
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

import { data } from "../constant/temp-data";
console.log(data);
const user = data[0];

const AuthInfo = () => {
  return (
    <div className="Infor">
      <div className="nav">
        <div>Số tài khoản: {user.id}</div>
        <div>Tên người dùng: {user.nickName}</div>
        <div>Số dư khả dụng: {user.bank_balance}</div>
      </div>
      <button type="button">Sign out</button>
    </div>
  );
};

export default AuthInfo;
