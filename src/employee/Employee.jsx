import TodoAppContext from "../todoAppContext.js";
import reducer, { initializer } from "../todoAppReducer.js";
import { instance } from "../utils.js";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Employee() {
  return (
    <div className="container">
      <h2>Giao dịch viên</h2>
      <Link to="/register">
        <div className="fg mt-3">
          <button type="submit">Tạo tài khoản</button>
        </div>
      </Link>
      <Link to="/changepass">
        <div className="fg mt-3">
          <button type="submit">Chuyển tiền</button>
        </div>
      </Link>
      <Link to="/changepass">
        <div className="fg mt-3">
          <button type="submit">Xem lịch sử giao dịch</button>
        </div>
      </Link>
      <Link to="/">
        <div className="changepass">Back</div>
      </Link>
    </div>
  );
}

export default Employee;
