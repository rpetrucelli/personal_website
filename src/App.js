import { createContext, useState } from 'react'
import './index.css'
import Router from './components/Router';

export const ThemeContext = createContext();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState('Ryan')

  const toggleTheme = () =>{
    setIsDarkMode(!isDarkMode);
  }

  const changeUser = (usr) => {
    setUser(usr);
  }

  return (
    <ThemeContext.Provider value = { { isDarkMode, toggleTheme, user, changeUser } }>
      <Router />
    </ThemeContext.Provider>
  );
}

