import "./Addfrom.css"
import { useState } from "react"

export default function Addfrom() {
    const [name, setName]=useState("");
    const [gender, setGender]=useState("");
    function saveData(e) {
        e.preventDefault();
        const user ={
            name:name,
            gender:gender
        }
        console.log(user);
    }
    return(
        <>
            <section className="container">
                <form onSubmit={saveData}>
                    <label htmlFor="">ชื่อประชากร</label>
                    <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <select name="" id="" value={gender} onChange={(e)=>setGender(e.target.value)}>
                        <option>ชาย</option>
                        <option>หญิง</option>
                    </select>
                    <button type="submit" className="btn-save" disabled={name.trim()===""}>บันทึก</button>
                </form>
            </section>
        </>
    )
}