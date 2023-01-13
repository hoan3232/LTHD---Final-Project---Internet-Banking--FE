import React, { useEffect, useState } from "react";
import { instance } from "../utils";

export default function ListNN(props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getNN = async () => {
      const res = await instance.get(
        `users/notice/${localStorage.todoApp_userSTK}`
      );
      setList(res.data);
    };
    getNN();
  }, []);
  let count = 0;
  return (
    <div>
      <div className="table">
        <table>
          <tr>
            <th>STT</th>
            <th>Ngày giờ</th>
            <th>Số tài khoản</th>
            <th>Tên người nợ</th>
            <th>Số tiền</th>
            <th>Nội dung</th>
            <th>Trạng thái</th>
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
                <td>{val.TK_TT_DS_NN_Ma_Ng_NhanToTK_TT.DS_TK.Ten_DK}</td>
                <td>{val.So_No}</td>
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
