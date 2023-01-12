import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Recharge(props) {
  const [id, setId] = useState("");
  const [numbank, setNumbank] = useState("");
  const [money, setMoney] = useState("");
  const [name, setName] = useState("");
  const [messageError1, setMessageError1] = useState("");
  const [messageError2, setMessageError2] = useState("");
  const [messageError3, setMessageError3] = useState("");
  const [messageError4, setMessageError4] = useState("");

  const handleSubmitBanking = (event) => {
    if (!id) {
      setMessageError1("Hãy nhập tên đăng nhập");
    } else {
      setMessageError1("");
    }
    if (!numbank) {
      setMessageError2("Hãy nhập số tài khoản");
    } else {
      setMessageError2("");
    }
    if (!name) {
      setMessageError3("Hãy nhập tên người dùng");
    } else {
      setMessageError3("");
    }
    if (!money) {
      setMessageError4("Hãy nhập số tiền cần nạp");
    } else {
      setMessageError4("");
    }
    event.preventDefault();
    if (id && numbank && name && money) {
      setMessageError1("");
      setMessageError2("");
      setMessageError3("");
      setMessageError4("");
      setOpen(true);
    }
  };

  return (
    <div className="container2">
      <h2>Nạp tiền vào tài khoản</h2>
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
              type="text"
              placeholder="Tên người dùng"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="fg">
            <div className="msgerr">
              {messageError1 && <div>{messageError1}</div>}
            </div>
            <div className="msgerr-sx5">
              {messageError3 && <div>{messageError3}</div>}
            </div>
          </div>

          <div className="fg">
            <input
              type="number"
              placeholder="Số tài khoản"
              value={numbank}
              onChange={(event) => setNumbank(event.target.value)}
            />
          </div>
          <div className="fg">
            <div className="msgerr">
              {messageError2 && <div>{messageError2}</div>}
            </div>
          </div>

          <div className="fg">
            <input
              type="number"
              placeholder="Số tiền cần nạp"
              value={money}
              onChange={(event) => setMoney(event.target.value)}
            />
          </div>
          <div className="fg">
            <div className="msgerr">
              {messageError4 && <div>{messageError4}</div>}
            </div>
          </div>
        </div>

        <button type="button1-ck" onSubmit={handleSubmitBanking}>
          Nạp tiền
        </button>
        <Link to="/employee">
          <button type="button1-ck">Back</button>
        </Link>
      </form>
    </div>
  );
}

export default Recharge;
