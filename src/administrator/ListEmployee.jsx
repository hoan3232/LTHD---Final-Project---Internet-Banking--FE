import React, { useEffect, useState, useContext } from "react";
import { data } from "../constant/temp-data.jsx";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TodoAppContext from "../todoAppContext.js";
import reducer, { initializer } from "../todoAppReducer.js";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { instance } from "../utils";

function ListEmployee(props) {
  const [list, setList] = useState([]);
  const { store } = useContext(TodoAppContext);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [id, setId] = useState("");
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  useEffect(() => {
    const getList = async () => {
      const res = await instance.get(`admin/showEmp`);
      setList(res.data);
    };
    getList();
  }, [])


  let count = 0;

  const data1 = {
    Id: id,
    Pass: pass,
    Ten_DK: name,
    Email: email,
    Phone: phone
  };

  const create = async () => {
    await instance.post("admin/createEmp", data1);
    const res = await instance.get(`admin/showEmp`);
    setList(res.data);
  };

  const deleteEmp = async () => {
    console.log(id1);
    await instance.delete(`admin/deleteEmp/${id1}`)
    const res = await instance.get(`admin/showEmp`);
    setList(res.data);
  };

  const data2 = {
    Id: id2,
    Pass: pass2,
    Ten_DK: name2,
    Email: email2,
    Phone: phone2 
  }

  const updateEmp = async () => {
    await instance.put("admin/updateEmp", data2);
    const res = await instance.get(`admin/showEmp`);
    setList(res.data);
  }

  return (
    <div className="container2">
      <h2>Danh sách nhân viên</h2>
      <div className="option flex">
        <div onClick={() => handleOpen()}>
          <button type="button">Thêm</button>
        </div>
        <div onClick={() => handleOpen1()}>
          <button type="button">Xóa</button>
        </div>
        <div onClick={() => handleOpen2()}>
          <button type="button">Sửa</button>
        </div>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>STT</th>
            <th>Tên người dùng</th>
            <th>Tên nhân viên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
          </tr>
          {list.map((val, key) => {
            return (
              <tr key={key}>
                <td>{++count}</td>
                <td>{val.Id}</td>
                <td>{val.Ten_DK}</td>
                <td>{val.Email}</td>
                <td>{val.Phone}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <Link to="/administrator">
        <button type="button1-ck">Back</button>
      </Link>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="popup"
      >
        <DialogTitle id="alert-dialog-title">
          Thêm tài khoản nhân viên
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="bg-dialog"
          >
            <div className="conntainer1">
              <input
                type="text1"
                placeholder="Tên đăng nhập"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
              <input
                type="password1"
                placeholder="Mật khẩu"
                value={pass}
                onChange={(event) => setPass(event.target.value)}
              />
              <input
                type="text1"
                placeholder="Tên nhân viên"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type="text1"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="text1"
                placeholder="Phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={create}>Thêm</Button>
          <Button onClick={handleClose}>Đóng</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Xóa tài khoản nhân viên
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="bg-dialog"
          >
            <div>
              <input
                type="text1"
                placeholder="Tên đăng nhập"
                value={id1}
                onChange={(event) => setId1(event.target.value)}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteEmp}>Xóa</Button>
          <Button onClick={handleClose1}>Đóng</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Sửa thông tin tài khoản
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="bg-dialog"
          >
            <div>
              <input
                type="text1"
                placeholder="Tên đăng nhập"
                value={id2}
                onChange={(event) => setId2(event.target.value)}
              />
              <input
                type="password1"
                placeholder="Mật khẩu"
                value={pass2}
                onChange={(event) => setPass2(event.target.value)}
              />
              <input
                type="text1"
                placeholder="Tên nhân viên"
                value={name2}
                onChange={(event) => setName2(event.target.value)}
              />
              <input
                type="text1"
                placeholder="Mail nhân viên"
                value={email2}
                onChange={(event) => setEmail2(event.target.value)}
              />
              <input
                type="text1"
                placeholder="Số điện thoại nhân viên"
                value={phone2}
                onChange={(event) => setPhone2(event.target.value)}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={updateEmp}>Lưu thay đổi</Button>
          <Button onClick={handleClose2}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ListEmployee;
