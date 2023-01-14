import React, { useEffect, useState } from "react";
import { instance } from "../utils";
import { Link } from "react-router-dom";

export default function ReHisto(props) {
  const [list, setList] = useState([]);
  const [term, setTerm] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const txtTerm_Changed = function (e) {
    setTerm(e.target.value);
  };

  const txtDate1_Changed = function (e) {
    setDate1(e.target.value);
  };

  const txtDate2_Changed = function (e) {
    setDate2(e.target.value);
  };

  const data = {
    userId: "emp01",
  };

  useEffect(() => {
    const getHis = async () => {
      const res = await instance.get(`admin/showTransion`);
      setList(res.data);
    };
    getHis();
  }, []);
  let count = 0;


  const getHisBank = async () => {
    const res = await instance.get(`admin/showBankTrans/${term}`)
    setList(res.data);
  }

  const data1 = {
    time1: date1,
    time2: date2
  }

  const getTransTime = async () => {
    const res = await instance.post("admin/showTransTime", data1)
    setList(res.data);
  }

  return (
    <div className="container2">
      <h2>Lịch sử giao dịch</h2>
      <div className="bodysearch">
        <input
          type="text"
          value={term}
          onChange={txtTerm_Changed}
          placeholder={"Tên ngân hàng"}
          // onKeyUp={txtTerm_KeyUp}
        />
        <button type="button" onClick={getHisBank}>Tìm kiếm</button>
      </div>
      <div className="bodysearch">
        <input
          type="text"
          value={date1}
          onChange={txtDate1_Changed}
          placeholder={"Thời gian bắt đầu"}
          // onKeyUp={txtTerm_KeyUp}
        />
        <input
          type="text"
          value={date2}
          onChange={txtDate2_Changed}
          placeholder={"Thời gian kết thúc"}
          // onKeyUp={txtTerm_KeyUp}
        />
        <button type="button" onClick={getTransTime}>Tìm kiếm</button>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>STT</th>
            <th>Ngày giờ</th>
            <th>STK Người Gửi</th>
            <th>STK Người Nhận</th>
            <th>Ngân hàng</th>
            <th>Số tiền</th>
            <th> </th>
          </tr>
          {list.map((val, key) => {
            let date = new Date(val.Ngay_Gio);

            let datef =
              date.getFullYear() +
              "-" +
              (date.getMonth() + 1) +
              "-" +
              date.getDate() +
              " " +
              ("0" + date.getHours()).slice(-2) +
              ":" +
              ("0" + date.getMinutes()).slice(-2) +
              ":" +
              ("0" + date.getSeconds()).slice(-2);
            let dateString = datef.toString();
            return (
              <tr key={key}>
                <td>{++count}</td>
                <td>{dateString}</td>
                <td>{val.Ma_Ng_Gui}</td>
                <td>{val.Ma_Ng_Nhan}</td>
                <td>{val.TK_TT_DS_CK_Ma_Ng_NhanToTK_TT.Ngan_Hang}</td>
                <td>{val.So_Tien}</td>
              </tr>
            );
          })}
        </table>
        <Link to="/administrator">
          <button type="button1-ck">Back</button>
        </Link>
      </div>
    </div>
  );
}
