import React, { useEffect, useState } from "react";
import { instance } from "../utils";

export default function ReHisCK(props) {
  const [list, setList] = useState([]);
  const [term, setTerm] = useState("");

  const txtTerm_Changed = function (e) {
    setTerm(e.target.value);
  };



  const data1 = {
    userId: "emp01",
  };

  const data2 = {
    userId: "emp01",
    STK: term
  };

  const getTrans = async () => {
    const res = await instance.post(
      'employee/trans', data2
    );
    console.log(term);
    setList(res.data);

  };

  useEffect(() => {
    const getHis = async () => {
      const res = await instance.post(`employee/all`, data1);
      setList(res.data);
    };
    getHis();
  }, []);
  let count = 0;
  return (
    <div className="container3">
      <div className="bodysearch">
        <input
          type="text"
          value={term}
          onChange={txtTerm_Changed}

          // onKeyUp={txtTerm_KeyUp}
        />
        <button type="button" onClick={getTrans}>Tìm kiếm</button>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>STT</th>
            <th>Ngày giờ</th>
            <th>STK Người Gửi</th>
            <th>STK Người Nhận</th>
            <th>Số tiền</th>
            <th>Nội dung</th>
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
                <td>{val.So_Tien}</td>
                <td>{val.Noi_Dung}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
