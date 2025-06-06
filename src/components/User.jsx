import logo from "../assets/react.svg"

export default function User({item, deleteUser}) {
    return (
        <>
            <li style={{ borderStyle: "solid", borderColor: item.gender == "male" ? "green" : "pink" }}>
                <img src={logo} width={50} height={50} />
                <p>{item.name} {item.gender}</p>
                <div className="control">
                    <button onClick={()=>deleteUser(item.id)}>ลบ</button>
                </div>
            </li>
        </>
    )
}