import { useState } from "react";
import "./Personlist.css"
import User from "./User";
import { FaEye } from "react-icons/fa"; //เปิด
import { LuEyeOff } from "react-icons/lu"; //ปิด
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
                <span onClick={()=> setShow(!show)}>
                    {show ? <FaEye size={40}/> : <LuEyeOff size={40}/>}
                </span>
            </div>
            
            <ul>
                {show && data.map((item) => (
                    <User key={item.id} item={item} deleteUser={deleteUser}/>
                ))}
            </ul>
        </div>
    );
}