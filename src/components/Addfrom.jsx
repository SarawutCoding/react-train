import "./Addfrom.css"
import { useState } from "react"

export default function Addfrom() {
    const [name, setName]=useState("");
    const [gender, setGender]=useState("");
    
    return(
        <>
            <section className="container">
                <form action="">
                    <label htmlFor="">ชื่อประชากร</label>
                    <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <select name="" id="" value={gender} onChange={(e)=>setGender(e.target.value)}>
                        <option>ชาย</option>
                        <option>หญิง</option>
                    </select>
                    <button type="submit" className="btn-save">บันทึก</button>
                </form>
            </section>
        </>
    )
}