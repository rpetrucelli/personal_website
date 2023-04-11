import { useContext } from "react";
import { ThemeContext } from "../App";
import DateTime from "./DateTime";

import "../styles/Header.css"
import Weather from "./Weather";

function Header(props){
    const context = useContext(ThemeContext);
    const name = context.isDarkMode ? "header-dark" : "header-light";
    return(
        <header className ={name}>
            <h1>{ context.user }'s Website</h1>
            <DateTime />
            {/* <Weather /> */}
        </header>
    );
}

export default Header;