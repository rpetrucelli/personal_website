function Prompt() {
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

export default Prompt;