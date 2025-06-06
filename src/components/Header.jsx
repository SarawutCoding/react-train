import "./Header.css"

export default function Header(props) {
    return(
        <>
            <nav>
               <h1 style={{color:"blue"}}>{props.title}</h1> 
               <button>Ligth/Dark</button>
            </nav>    
        </>
    )
}