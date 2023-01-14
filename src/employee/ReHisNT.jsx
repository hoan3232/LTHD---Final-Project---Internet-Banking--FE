import React, { useEffect, useState } from "react";
import TodoAppContext from "../todoAppContext.js";
import { instance } from "../utils";
function ReHisNN(props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getHis = async () => {
      const res = await instance.get(
        `users/receive/${localStorage.todoApp_userSTK}`
      );
      setList(res.data);
    };
    getHis();
  }, []);
  let count = 0;
  return (
    <div className="container2">
      <div className="table">
        <table>
          <tr>
            <th>STT</th>
            <th>Ngày giờ</th>
            <th>Số tài khoản</th>
            <th>Tên người gửi</th>
            <th>Số tiền</th>
            <th>Nội dung</th>
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
                <td>{val.Ma_Ng_Nhan}</td>
                <td>{val.TK_TT_DS_CK_Ma_Ng_GuiToTK_TT.DS_TK.Ten_DK}</td>
                <td>{val.So_Tien}</td>
                <td>{val.Noi_Dung}</td>
                <td>
                  <button onClick={() => handleInfo(val)}>Chi tiết</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default ReHisNN;
