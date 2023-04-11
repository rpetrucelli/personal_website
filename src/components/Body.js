import Sidebar from './Sidebar'
import Main from './Main'
import { useContext, useState } from 'react';
import "../styles/Body.css"
import { ThemeContext } from '../App';

export default function Body(props) {
    const [side, setSide] = useState(false);
    const context = useContext(ThemeContext);
    
    const isTrue = 
        <>
            <div className = {context.isDarkMode ? 'sidebar-dark' : 'sidebar-light'} >
                <Sidebar/>
            </div>
            <div className={context.isDarkMode ? 'main-with-side-dark' : 'main-with-side-light'} >
                <Main/>
            </div>
        </>
    
    const isFalse = 
        <div className={context.isDarkMode ? 'main-without-side-dark' : 'main-without-side-light'} >
            <Main />
        </div>

    function clickHandler () {
        setSide(!side);
    }

    return ( 
        <>
        <div className='sidetoggle'>
            <button onClick={ clickHandler }>{ side ? `<` : `>`}</button>
        </div>
        <div className = "body">
            { side ? isTrue : isFalse}         
        </div>
        </>
     );
}
