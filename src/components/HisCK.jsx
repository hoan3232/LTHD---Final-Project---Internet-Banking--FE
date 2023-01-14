import React, { useEffect, useState } from "react";
import { instance } from "../utils";
export default function HisCK(props) {
  // const { store } = useContext(TodoAppContext);
  const [list, setList] = useState([]);
  // const res = function () {
  //   return instance.get(`users/history/${localStorage.todoApp_userSTK}`);
  // };

  // useEffect(() => {
  //   getHis().then((data) => setList(data));
  // }, []);
  // console.log(list);
  // getHis(localStorage.todoApp_userSTK).then((d) => setList(d));
  //console.log(localStorage.todoApp_userSTK);
  useEffect(() => {
    const getHis = async () => {
      const res = await instance.get(
        `users/history/${localStorage.todoApp_userSTK}`
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
            <th>Tên người nhận</th>
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
                <td>{val.Ma_Ng_Nhan}</td>
                <td>{val.TK_TT_DS_CK_Ma_Ng_NhanToTK_TT.DS_TK.Ten_DK}</td>
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
      {/* <ul>
        {store.items.map(function (item) {
          return <TodoItem key={item.id} task={item} />;
        })}
      </ul> */}
    </div>
  );
}
