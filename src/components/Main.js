import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import "../styles/Main.css"
import Search from "./Search";

const Click = ()  => {
    const [count, setCount] = useState(0);

    return(
        <div className='click'>
            <h5>{count}</h5>
            <button onClick={() => setCount(count + 1)}>click here</button>
        </div>
    );
}

const Input = () => {
    const [inputText, setText] = useState('Update this text field using Hooks');

    function handleChange(text){
        setText(text.target.value);
    }

    return (
        <div className='input'>
            <h5>Type in the below box and see the text change</h5>
            <input style={{width: "450px"}} type="text"
                value={ inputText } 
                onChange= { handleChange }>    
            </input>
            <button 
                onClick={() => setText('Reset')}>
                Reset
            </button>
            <p>
                Reactive Text: { inputText }
            </p>  
        </div>
      );
}

const Prompt = () => {
    function clickHandler(){
        let randomNum = Math.floor(Math.random()*10) + 1
        console.log(randomNum)
        let userInput = prompt('type a number')
        alert(`${ userInput===randomNum ? "Correct! " : "Wrong! "}The computer guessed ${randomNum} and you guessed ${userInput}`)
    }
    return ( 
        <div className = 'prompt'>
            <h5>Guess the number!</h5>
            <button onClick = { clickHandler }>Guess a number between 1 and 10</button>
        </div>
     );
}

export default function Main(props) {   
    const context = useContext(ThemeContext); 

    return (
        <>
            <div>
                <h2>Check out some of the things {context.user} has learned about React below!</h2> 
            </div> 
            <Search />
            <Prompt />
            <Input />
        </>
    );
}
