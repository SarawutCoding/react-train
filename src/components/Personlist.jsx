import { useState } from "react";
import "./Personlist.css"
import User from "./User";
export default function Personlist(props) {
    const {data, deleteUser}=props;
    const [show, setShow] = useState(true);
    const myStyle={
        color:"red",
        fontSize:"30px"
    }
    return (
        <div className="container">
            <div className="header">
                <h1 style={myStyle}>จำนวนประชากร {data.length} คน</h1>
                <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button> 
            </div>
            
            <ul>
                {show && data.map((item) => (
                    <User key={item.id} item={item} deleteUser={deleteUser}/>
                ))}
            </ul>
        </div>
    );
}