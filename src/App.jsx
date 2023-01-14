import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Todo from "./views/Todo.jsx";
import Login from "./views/Login.jsx";
import Changepass from "./views/Changepass.jsx";
import CK from "../src/function/CK.jsx";
import CKor from "../src/function/CKor.jsx";
import NN from "../src/function/NN.jsx";
import History from "../src/function/History.jsx";
import Employee from "../src/employee/Employee.jsx";
import Register from "./employee/Register.jsx";
import Recharge from "./employee/Recharge.jsx";
import ReHistory from "./employee/ReHistory.jsx";
import Administrator from "./administrator/Administrator";
import ListEmployee from "./administrator/ListEmployee";
import LoginEmployee from "./views/LoginEmployee";
import LoginAdmin from "./views/LoginAdmin";
import SubmitEmail from "./views/SubmitEmail";
import OTP from "./views/OTP";
import SubmitEmailCK from "./views/SubmitEmailCK";
import OTPCK from "./views/OTPCK";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/loginemployee" element={<LoginEmployee />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/changepass" element={<Changepass />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Todo />
            </RequireAuth>
          }
        />
        <Route path="/transfer" element={<CK />} />
        <Route path="/transferorder" element={<CKor />} />
        <Route path="/debtreminder" element={<NN />} />
        <Route path="/history" element={<History />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/rehistory" element={<ReHistory />} />
        <Route path="/administrator" element={<Administrator />} />
        <Route path="/listemployee" element={<ListEmployee />} />
        <Route path="/submitemail" element={<SubmitEmail />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/submitemailck" element={<SubmitEmailCK />} />
        <Route path="/otpck" element={<OTPCK />} />
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Todo />} />
    //     <Route path="/transfer" element={<CK />} />
    //     <Route path="/transferorder" element={<CKor />} />
    //     <Route path="/debtreminder" element={<NN />} />
    //     <Route path="/history" element={<History />} />
    //     <Route path="/employee" element={<Employee />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

function RequireAuth({ children }) {
  const location = useLocation();

  if (!localStorage.todoApp_accessToken) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  return children;
}

export default App;
