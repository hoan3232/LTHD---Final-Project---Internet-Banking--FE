// import React, { useContext } from "react";
import React, { useEffect, useState } from "react";
import TodoAppContext from "../todoAppContext.js";
import { Link } from "react-router-dom";
import { data } from "../constant/temp-data.jsx";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function CKor(props) {
  // const { store } = useContext(TodoAppContext);
  const { state } = useLocation();
  const { user } = state;
  const [open, setOpen] = useState(false);
  const [idBank, setIdBank] = useState("");
  const [nameBank, setNameBank] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [money, setMoney] = useState("");
  const [message, setMessage] = useState("");
  const [messageError1, setMessageError1] = useState("");
  const [messageError2, setMessageError2] = useState("");
  const [messageErrorBank1, setMessageErrorBank1] = useState("");
  const [messageErrorBank2, setMessageErrorBank2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let user = data.filter((item) => {
      return item.stk === idBank && item.bank === nameBank;
    });
    if (user.length != 0) {
      // alert("dung roi");
      setName(user[0].name);
      setEmail(user[0].email);
      setPhone(user[0].phone);
    } else {
      // alert("sai");
      setName("");
      setEmail("");
      setPhone("");
    }
  };
  const handleSubmitBanking = (event) => {
    if (!idBank) {
      setMessageErrorBank1("Hãy nhập số tài khoản");
    } else {
      setMessageErrorBank1("");
    }
    if (!nameBank) {
      setMessageErrorBank2("Hãy nhập tên ngân hàng");
    } else {
      setMessageErrorBank2("");
    }
    if (!money) {
      setMessageError1("Hãy nhập số tiền cần chuyển");
    } else {
      setMessageError1("");
    }
    if (!message) {
      setMessageError2("Hãy nhập nội dung muốn gửi");
    } else {
      setMessageError2("");
    }
    event.preventDefault();
    if (idBank && nameBank && money && message && name && email && phone) {
      setMessageErrorBank1("");
      setMessageErrorBank2("");
      setMessageError1("");
      setMessageError2("");
      setOpen(true);
    }
  };
  const navigate = useNavigate();

  const handleCloseAndBack = () => {
    setOpen(false);
    navigate(`/`);
  };
  console.log(user);
  useEffect(() => {
    if (!(Object.keys(user).length === 0)) {
      setName(user.TK_TT_DS_GN_Id2ToTK_TT.DS_TK.Ten_DK);
      setEmail(user.TK_TT_DS_GN_Id2ToTK_TT.DS_TK.Email);
      setPhone(user.TK_TT_DS_GN_Id2ToTK_TT.DS_TK.Phone);
      setIdBank(user.TK_TT_DS_GN_Id2ToTK_TT.STK);
      setNameBank(user.NganHang);
    }
  }, [user]);

  return (
    <div className="container2">
      <h2>Chuyển khoản liên ngân hàng</h2>
      <form onSubmit={handleSubmit}>
        <div className="fg">
          <input
            type="number"
            value={idBank}
            onChange={(event) => setIdBank(event.target.value)}
            placeholder="Số tài khoản"
          />
          <input
            type="text"
            placeholder="Tên ngân hàng"
            value={nameBank}
            onChange={(event) => setNameBank(event.target.value)}
          />
          <button type="submit-ck">Xác nhận</button>
        </div>
        <div className="fg">
          <div className="msgerr">
            {messageErrorBank1 && <div>{messageErrorBank1}</div>}
          </div>
          <div className="msgerr-s">
            {messageErrorBank2 && <div>{messageErrorBank2}</div>}
          </div>
        </div>
      </form>
      <h3 className="info-ck">Thông tin người nhận</h3>
      <form onSubmit={handleSubmitBanking}>
        <div className="form-ck">
          <input type="text" placeholder="Tên" value={name} disabled />
          <input type="text" placeholder="Email" value={email} disabled />
          <input type="text" placeholder="SĐT" value={phone} disabled />
          <h3 className="info-ck">Số tiền cần chuyển</h3>
          <div>
            <input
              type="number"
              placeholder="0 VNĐ"
              value={money}
              onChange={(event) => setMoney(event.target.value)}
            />
            <div className="msgerr">
              {messageError1 && <div>{messageError1}</div>}
            </div>
            <input
              type="text"
              placeholder="Nội dung"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <div className="msgerr">
              {messageError2 && <div>{messageError2}</div>}
            </div>
          </div>
        </div>
        <button type="button1-ck" onSubmit={handleSubmitBanking}>
          Chuyển khoản
        </button>
        <Link to="/">
          <button type="button1-ck">Back</button>
        </Link>
      </form>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Thông báo</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="bg-dialog"
          >
            <div>Chuyển khoản thành công</div>
            <div>
              Bạn có muốn lưu thông tin của {name} cho lần chuyển khoản tiếp
              theo ?
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAndBack}>Đóng</Button>
          <Button>Lưu</Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}

export default CKor;
