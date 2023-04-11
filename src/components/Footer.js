import { ThemeContext } from "../App";
import { useContext } from "react";
import '../styles/Footer.css';

export default function Footer(props) {
    const context = useContext(ThemeContext);
    const itemTheme = context.isDarkMode ? "footer-item-dark" : "footer-item-light";

    return ( 
        <footer className = {context.isDarkMode ? "footer-dark" : "footer-light"}>
            <div>
                <h3>Check out some of { context.user }'s links below:</h3>
            </div>
            <div>
                <ul className = "no-bullets">
                    <li className={itemTheme}>    
                        <a href="https://www.linkedin.com/in/ryan-petrucelli">LinkedIn</a>
                    </li>
                    <li className={itemTheme}>     
                        <a href="https://www.github.com/rpetrucelli">Github</a>
                    </li>
                    <li className={itemTheme}>
                        <a href="https://instagram.com/ryan.petrucelli/">Instagram</a>
                    </li>
                </ul>
            </div>
        </footer>
     );
}
 
