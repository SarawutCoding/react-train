
import Header from "./components/Header";
import Personlist from "./components/Personlist";
import Addfrom from "./components/Addfrom";
import "../public/css/App.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([
    { id: 0, name: "เคน", gender: "male" },
    { id: 1, name: "เรด", gender: "male" },
    { id: 2, name: "บลู", gender: "female" },
    { id: 3, name: "โมโมะ", gender: "female" }
  ]);

  function deleteUser(id) {
    const result = data.filter((user)=>user.id!==id);
    setData(result);
  }
  return (
    <>
      <div className="App">
        <Header title="My ไอบลูหนังหมา" />
        <main>
          <Addfrom data={data} setData={setData}/>
          <Personlist data={data} deleteUser={deleteUser}/>
        </main>
      </div>
    </>
  );
}
