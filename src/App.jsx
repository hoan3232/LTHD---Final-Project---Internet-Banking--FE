import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Todo from "./views/Todo.jsx";
import Login from "./views/Login.jsx";
import "./App.css";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route
    //       path="/"
    //       element={
    //         <RequireAuth>
    //           <Todo />
    //         </RequireAuth>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </BrowserRouter>
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
