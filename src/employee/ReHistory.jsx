import React, { useState } from "react";
import TodoAppContext from "../todoAppContext.js";
import { data } from "../constant/temp-data.jsx";
import { Link } from "react-router-dom";
import ReHisCK from "../employee/ReHisCK.jsx";
import ReHisNT from "../employee/ReHisNT.jsx";

function ReHistory(props) {
  //   const { store } = useContext(TodoAppContext);
  const [option, setOption] = useState("rehistransfer");

  const handleChange = (value) => {
    setOption(value);
  };

  return (
    <div className="container2">
      <h2>Lịch sử giao dịch</h2>
      {/* <div className="option">
        <label for="card">Tùy chọn lịch sử giao dịch:</label>
        <select
          id="card"
          value={option}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="rehisreceive">Lịch sử nhận tiền</option>
          <option value="rehistransfer" selected>
            Lịch sử chuyển khoản
          </option>
        </select>
      </div> */}

      {option === "rehistransfer" && <ReHisCK />}
      {option === "rehisreceive" && <ReHisNT />}

      <Link to="/employee">
        <button type="button1-ck">Back</button>
      </Link>
    </div>
  );
}

export default ReHistory;
