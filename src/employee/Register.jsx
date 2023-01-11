import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { instance, parseJwt } from "../utils.js";

function Register(props) {
  const nagivate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async function (data) {
    // console.log(data);

    try {
      const res = await instance.post("/auth", data);
      if (res.data.authenticated) {
        // console.log(res.data.accessToken);
        localStorage.todoApp_accessToken = res.data.accessToken;

        const obj = parseJwt(res.data.accessToken);
        localStorage.todoApp_userId = obj.userId;

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
    <div className="container2">
      <h2>Tạo tài khoản</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fg">
          <input
            type="text"
            placeholder="Tên tài khoản"
            autoFocus
            {...register("username", { required: true })}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            {...register("password", { required: true })}
          />
        </div>
        <div className="fg">
          <div className="msgerr">
            {errors.username && <span>Tài khoản không hợp lệ</span>}
          </div>
          <div className="msgerr-ss">
            {errors.password && <span>Mật khẩu không hợp lệ</span>}
          </div>
        </div>

        <div className="fg">
          <input
            type="text"
            placeholder="Tên người dùng"
            autoFocus
            {...register("username", { required: true })}
          />
          <input
            type="text"
            placeholder="Tên gợi nhớ"
            {...register("username", { required: true })}
          />
        </div>
        <div className="fg">
          <div className="msgerr">
            {errors.username && <span>Hãy nhập tên người dùng</span>}
          </div>
          <div className="msgerr-ss">{errors.password && <span></span>}</div>
        </div>

        <div className="fg">
          <input
            type="text"
            placeholder="Email"
            autoFocus
            {...register("username", { required: true })}
          />
          <input
            type="number"
            placeholder="Số điện thoại"
            {...register("username", { required: true })}
          />
        </div>
        <div className="fg">
          <div className="msgerr">
            {errors.username && <span>Hãy nhập địa chỉ email</span>}
          </div>
          <div className="msgerr-ss">
            {errors.password && <span>Hãy nhập số điện thoại</span>}
          </div>
        </div>

        <div className="fg mt-3 container">
          <button type="submit">CONFIRM</button>
        </div>
        <Link to="/employee">
          <div className="changepass">Back</div>
        </Link>
      </form>
    </div>
  );
}

export default Register;
