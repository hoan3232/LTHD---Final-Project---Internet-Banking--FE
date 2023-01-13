import TodoAppContext from "../todoAppContext.js";
import reducer, { initializer } from "../todoAppReducer.js";
import { instance } from "../utils.js";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Administrator() {
  return (
    <div className="container">
      <h2>Quản trị viên</h2>
      <Link to="/listemployee">
        <div className="fg mt-3">
          <button type="submit">Danh sách nhân viên</button>
        </div>
      </Link>
      <Link to="/recharge">
        <div className="fg mt-3">
          <button type="submit">Danh sách giao dịch</button>
        </div>
      </Link>
      <Link to="/">
        <div className="changepass">Back</div>
      </Link>
    </div>
  );
}

export default Administrator;
