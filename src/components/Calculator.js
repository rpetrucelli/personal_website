import { useState, useRef } from "react"; 
import "../styles/Calculator.css";

function Calculator() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  function exp(e) {
    e.preventDefault();
    setResult((result) => result ** 2);
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }
 
  function reset(e) { 
    e.preventDefault();
    inputRef.current.value = 0;
    setResult((result) => 0);
  }; 

  return ( 
    <div className="calc"> 
      <h1 className="title">Calculator</h1> 
      <div className="container">  
        <p className="result" ref={resultRef}> 
          { result } 
        </p> 
        <input 
          classType = 'calc-input'
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        
        <div className="row">
        <button classType="calc-button" onClick={() => inputRef.current.value = (inputRef.current.value * 10) + 1}>1</button>
        <button classType="calc-button" onClick={() => inputRef.current.value = (inputRef.current.value * 10) + 2}>2</button>
        <button classType="calc-button" onClick={() => inputRef.current.value = (inputRef.current.value * 10) + 3}>3</button>
        </div>
        <div className="row">
        <button classType="calc-button" onClick={() => inputRef.current.value = (inputRef.current.value * 10) + 4}>4</button>
        <button classType="calc-button" onClick={() => inputRef.current.value = (inputRef.current.value * 10) + 5}>5</button>
        <button classType="calc-button" onClick={() => inputRef.current.value = (inputRef.current.value * 10) + 6}>6</button>
        </div>
        <div className="row">
        <button classType="calc-button" onClick={() => inputRef.current.value = (inputRef.current.value * 10) + 7}>7</button>
        <button classType="calc-button" onClick={() => inputRef.current.value = (inputRef.current.value * 10) + 8}>8</button>
        <button classType="calc-button" onClick={() => inputRef.current.value = (inputRef.current.value * 10) + 9}>9</button>
        </div >
        <button classType="calc-button" onClick={()=> inputRef.current.value = (inputRef.current.value * 10)}>0</button>

        <div className="operators"> 
        <button classType="calc-button" onClick={plus}>add</button> 
        <button classType="calc-button" onClick={minus}>subtract</button> 
        <button classType="calc-button" onClick={times}>multiply</button> 
        <button classType="calc-button" onClick={divide}>divide</button> 
        <button classType="calc-button" onClick={exp}>^2</button>
        <div >
          <button className="button-red" onClick={resetInput}>clear</button>
          <button className="button-red" onClick={reset}>reset</button> 
        </div>
        </div>
      </div> 
    </div> 
  ); 
} 
 
export default Calculator; 