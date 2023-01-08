import React, { useState } from "react";
import TodoAppContext from "../todoAppContext.js";
import { data } from "../constant/temp-data.jsx";
import ListCK from "./ListCK.jsx";
import ListNN from "./ListNN.jsx";
import ListBN from "./ListBN.jsx";

function List(props) {
  //   const { store } = useContext(TodoAppContext);
  const [option, setOption] = useState("listtransfer");

  const handleChange = (value) => {
    setOption(value);
  };

  return (
    <div>
      <div className="titlelist">Danh sách tài khoản</div>
      <div className="option">
        <label for="card">Tùy chọn danh sách:</label>
        <select
          id="card"
          value={option}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="listdebt">Danh sách nhắc nợ</option>
          <option value="listbedebt">Danh sách nợ</option>
          <option value="listtransfer" selected>
            Danh sách tài khoản
          </option>
        </select>
      </div>

      {option === "listtransfer" && <ListCK />}
      {option === "listdebt" && <ListNN />}
      {option === "listbedebt" && <ListBN />}

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

export default List;
