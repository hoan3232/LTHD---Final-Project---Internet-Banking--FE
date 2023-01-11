import React, { useState } from "react";
import TodoAppContext from "../todoAppContext.js";
import { data } from "../constant/temp-data.jsx";
import { Link } from "react-router-dom";
import HisCK from "../components/HisCK.jsx";
import HisNT from "../components/HisNT.jsx";

function History(props) {
  //   const { store } = useContext(TodoAppContext);
  const [option, setOption] = useState("histransfer");

  const handleChange = (value) => {
    setOption(value);
  };

  return (
    <div className="container2">
      <div className="titlelist">Lịch sử giao dịch</div>
      <div className="option">
        <label for="card">Tùy chọn lịch sử giao dịch:</label>
        <select
          id="card"
          value={option}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="hisreceive">Lịch sử nhận tiền</option>
          <option value="histransfer" selected>
            Lịch sử chuyển khoản
          </option>
        </select>
      </div>

      {option === "histransfer" && <HisCK />}
      {option === "hisreceive" && <HisNT />}

      <Link to="/">
        <button type="button1-ck">Back</button>
      </Link>

      {/* <ul> */}
      {/* {store.items
          .filter(function (item) {
            return item.title.includes(store.query);
          })
          .map(function (item) {
            return <TodoItem key={item.id} task={item} />;
          })} */}

      {/*{*/}
      {/*  list*/}
      {/*    .filter(function (item) {*/}
      {/*      return item.title.includes(query);*/}
      {/*    })*/}
      {/*    .map(function (item) {*/}
      {/*      return (<TodoItem key={item.id} task={item} />);*/}
      {/*    })*/}
      {/*}*/}

      {/*<li className="done">Pay Bills</li>*/}
      {/*<li>*/}
      {/*  @vue/cli vs create-react-app*/}
      {/*  <button>Delete</button>*/}
      {/*</li>*/}
      {/* </ul> */}
    </div>
  );
}

export default History;
