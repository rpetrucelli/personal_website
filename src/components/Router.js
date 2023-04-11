import { Link, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage'
import AboutMe from './AboutMe'
import ControlledForm from './ControlledForm'
import Calculator from './Calculator'
import Feedback from './Feedback'
import ToDo from './ToDo'
import '../styles/Nav.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';


function Router() {
    const context = useContext(ThemeContext);
    const navName = context.isDarkMode ? "nav-item-dark" : "app-light";

    return (
        <div className={context.isDarkMode ? "app-dark" : "app-light"} >
            <nav className={context.isDarkMode ? "nav-dark" : "nav-light"}>
                <Link to="/" className={navName}>Homepage</Link>
                <Link to="/about-me" className={navName}>About Me</Link>
                <Link to="/form" className={navName}>Create an account</Link>
                <Link to='/calculator' className={navName}>Calculator</Link>
                <Link to='/feedback' className={navName}>Reviews</Link>
                <Link to='/improvements' className={navName}>Improvements</Link>
            </nav>
            
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path='/form' element={<ControlledForm />} />
                <Route path='/calculator' element={<Calculator />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/improvements' element={<ToDo/>} />
            </Routes>
        </div>
     );
}

export default Router;
