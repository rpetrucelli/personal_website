import { useContext } from "react";
import { ThemeContext } from "../App";
import ReactSwitch from "react-switch";

export default function Toggler (){
    const context = useContext(ThemeContext);

    return (
        <div >
            <ReactSwitch checked={context.isDarkMode} onChange={() => context.toggleTheme()} />
        </div>
    )
}