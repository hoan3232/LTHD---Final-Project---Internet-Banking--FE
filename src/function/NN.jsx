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
import { instance } from "../utils";

function NN(props) {
  const { state } = useLocation();
  const { user } = state;
  const [open, setOpen] = useState(false);
  const [idBank, setIdBank] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [money, setMoney] = useState("");
  const [message, setMessage] = useState("");
  const [messageError1, setMessageError1] = useState("");
  const [messageError2, setMessageError2] = useState("");
  const [messageErrorBank, setMessageErrorBank] = useState("");
  const [list, setList] = useState("");
  const [status, setstatus] = useState("init");
  const handleSubmit = (event) => {
    event.preventDefault();
    const getinfo = async () => {
      const res = await instance.get(`users/info/${idBank}`);
      return { status: res.status, data: res.data };
    };

    getinfo().then((value) => {
      if (value.status === 201) {
        // alert("dung roi");
        setName(value.data.DS_TK.Ten_DK);
        setEmail(value.data.DS_TK.Email);
        setPhone(value.data.DS_TK.Phone);
      } else {
        console.log(value);
        ///asalert("sai");
        setName("");
        setEmail("");
        setPhone("");
      }
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitBanking = (event) => {
    if (!idBank) {
      setMessageErrorBank("Hãy nhập số tài khoản");
    } else {
      setMessageErrorBank("");
    }
    if (!money) {
      setMessageError1("Hãy nhập số tiền cần nhắc");
    } else {
      setMessageError1("");
    }
    if (!message) {
      setMessageError2("Hãy nhập nội dung muốn nhắc");
    } else {
      setMessageError2("");
    }
    event.preventDefault();
    if (idBank && money && message && name && email && phone) {
      setMessageErrorBank("");
      setMessageError1("");
      setMessageError2("");
      create();
      setOpen(true);
    }
  };
  const navigate = useNavigate();

  const handleCloseAndBack = () => {
    setOpen(false);
    navigate(`/`);
  };

  useEffect(() => {
    if (!(Object.keys(user).length === 0)) {
      setName(user.TK_TT_DS_GN_Id2ToTK_TT.DS_TK.Ten_DK);
      setEmail(user.TK_TT_DS_GN_Id2ToTK_TT.DS_TK.Email);
      setPhone(user.TK_TT_DS_GN_Id2ToTK_TT.DS_TK.Phone);
      setIdBank(user.TK_TT_DS_GN_Id2ToTK_TT.STK);
    }
  }, [user]);

  const date = new Date(Date.now());

  const data = {
    Ngay_Gio:  date,
    Ma_Ng_Gui: localStorage.todoApp_userSTK,
    Ma_Ng_Nhan: idBank,
    So_No: parseFloat(money),
    Noi_Dung: message
  }

  const create = async () => {
    const res = await instance.post(
      'users/createNotice', data
    );
    setList(res.data);
  };
  

  return (
    <div className="container2">
      <h2>Nhắc nợ</h2>
      <form onSubmit={handleSubmit}>
        <div className="fg">
          <input
            type="number"
            value={idBank}
            onChange={(event) => setIdBank(event.target.value)}
            placeholder="Số tài khoản"
            autoFocus
          />
          <button type="submit-ck">Xác nhận</button>
        </div>
        <div className="msgerr">
          {messageErrorBank && <div>{messageErrorBank}</div>}
        </div>
      </form>
      <h3 className="info-ck">Thông tin người nhận</h3>
      <form onSubmit={handleSubmitBanking}>
        <div className="form-ck">
          <input type="text" placeholder="Tên" value={name} disabled />
          <input type="text" placeholder="Email" value={email} disabled />
          <input type="text" placeholder="SĐT" value={phone} disabled />
          <h3 className="info-ck">Thông tin nhắc nợ</h3>
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
          Nhắc nợ
        </button>
        <Link to="/">
          <button type="button1-ck">Back</button>
        </Link>
      </form>
      <Dialog
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
            <div>Nhắc nợ thành công</div>
            <div>
              Bạn có muốn lưu thông tin của {name} cho lần nhắc nợ tiếp theo ?
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAndBack}>Đóng</Button>
          <Button>Lưu</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NN;
