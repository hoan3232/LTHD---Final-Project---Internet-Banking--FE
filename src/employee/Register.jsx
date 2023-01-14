import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { instance } from "../utils.js";

function Register(props) {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messageError1, setMessageError1] = useState("");
  const [messageError2, setMessageError2] = useState("");
  const [messageError3, setMessageError3] = useState("");
  const [messageError4, setMessageError4] = useState("");
  const [messageError5, setMessageError5] = useState("");

  const handleSubmitBanking = (event) => {
    if (!id) {
      setMessageError1("Hãy nhập tên đăng nhập");
    } else {
      setMessageError1("");
    }
    if (!pass) {
      setMessageError2("Hãy nhập mật khẩu");
    } else {
      setMessageError2("");
    }
    if (!name) {
      setMessageError3("Hãy nhập tên người dùng");
    } else {
      setMessageError3("");
    }
    if (!email) {
      setMessageError4("Hãy nhập địa chỉ email");
    } else {
      setMessageError4("");
    }
    if (!phone) {
      setMessageError5("Hãy nhập số điện thoại");
    } else {
      setMessageError5("");
    }
    event.preventDefault();
    if (id && pass && email && phone) {
      setMessageError1("");
      setMessageError2("");
      setMessageError3("");
      setMessageError4("");
      setMessageError5("");
      create();
      console.log(data);
    }
  };

  const data = {
    userId: localStorage.todoApp_userId,
    Id: id,
    Pass: pass,
    Ten_DK: name,
    Ten_Goi_Nho: name,
    Email: email,
    Phone: phone,
  };

  const create = async () => {
    const res = await instance.post("employee/createUser", data);
    setList(res.data);
  };

  return (
    <div className="container2">
      <h2>Tạo tài khoản</h2>
      <form onSubmit={handleSubmitBanking}>
        <div className="form-ck">
          <div className="fg">
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={pass}
              onChange={(event) => setPass(event.target.value)}
            />
          </div>
          <div className="fg">
            <div className="msgerr">
              {messageError1 && <div>{messageError1}</div>}
            </div>
            <div className="msgerr-sss">
              {messageError2 && <div>{messageError2}</div>}
            </div>
          </div>

          <div className="fg">
            <input
              type="text"
              placeholder="Tên người dùng"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input type="text" placeholder="Tên gợi nhớ" />
          </div>
          <div className="fg">
            <div className="msgerr">
              {messageError3 && <div>{messageError3}</div>}
            </div>
          </div>

          <div className="fg">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="number"
              placeholder="Số điện thoại"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="fg">
            <div className="msgerr">
              {messageError4 && <div>{messageError4}</div>}
            </div>
            <div className="msgerr-sx4">
              {messageError5 && <div>{messageError5}</div>}
            </div>
          </div>
        </div>

        <button type="button1-ck" onSubmit={handleSubmitBanking}>
          Xác nhận
        </button>
        <Link to="/employee">
          <button type="button1-ck">Back</button>
        </Link>
      </form>
    </div>
  );
}

export default Register;
