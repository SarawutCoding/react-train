import "./Addfrom.css"
import { useState } from "react"

export default function Addfrom(props) {
    const [name, setName]=useState("");
    const [gender, setGender]=useState("");
    const {data, setData} = props;
    function saveData(e) {
        e.preventDefault();
        const user ={
            id:data.length+1,
            name:name,
            gender:gender
        }
        console.log(user);
        setData([...data,user]);
        setName("");
        setGender("male");
    }
    return(
        <>
            <section className="container">
                <form onSubmit={saveData}>
                    <label htmlFor="">ชื่อประชากร</label>
                    <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <select name="" id="" value={gender} onChange={(e)=>setGender(e.target.value)}>
                        <option>male</option>
                        <option>female</option>
                    </select>
                    <button type="submit" className="btn-save" disabled={name.trim()===""}>บันทึก</button>
                </form>
            </section>
        </>
    )
}