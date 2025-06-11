import "./Header.css"
import { BsBrightnessHigh } from "react-icons/bs";
import { GiMoon } from "react-icons/gi";

export default function Header(props) {
    const {title, theme, setTheme}= props;

    function toggleTheme() {
        if (theme==="light") {
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    return(
        <>
            <nav>
               <h1>{title}</h1>
               <span onClick={toggleTheme}>
                    {theme==="light" ? <BsBrightnessHigh size={25}/> : <GiMoon size={25}/>}
               </span>
            </nav>    
        </>
    )
}