import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";
import React from "react";
import { evaluate } from "mathjs";

const App = () => {

  const [result, setResult] = useState(" ");
  const [text, setText] = useState(" ");
  const [error, setError] = useState(" ");

 
   

 // set custom color for each button
  const buttonColor = "#f2a33c"


  // function to handle input
  const addToText = (value) => {

    if (value === "=") {
       calculateResult()
    } else {
      setText(text + value)
    }
      
  }

  

  //  // npm install mathjs for the math library
  // // then create a function to calculate results
  const calculateResult = () => { 
    try {
      const showresult = evaluate(text)

    setResult(showresult)
    } catch (error) { setError("error") }
  }

  // function to clear input

  const resetInput = () => { 
    setText("")
    setResult(" ")
    setError(" ")
  }


  return <div className="App">
      


    <div className="calc-wrapper">
    <Input text={text} result={result} error={error}/>
    <div className="row">
    <Button  symbol="7" handleClick={addToText}/>
    <Button symbol="8" handleClick={addToText}/>
    <Button symbol="9" handleClick={addToText}/>
    <Button  symbol="/" color={buttonColor} handleClick={addToText}/>
    </div>
    <div className="row">
    <Button symbol="4" handleClick={addToText}/>
    <Button symbol="5" handleClick={addToText}/>
    <Button symbol="6" handleClick={addToText}/>
    <Button symbol="*" color={buttonColor} handleClick={addToText}/>
    </div>
    <div className="row">
    <Button symbol="1" handleClick={addToText}/>
    <Button symbol="2" handleClick={addToText}/>
    <Button symbol="3" handleClick={addToText}/>
    <Button symbol="+" color={buttonColor} handleClick={addToText}/>
    </div>
    <div className="row">
    <Button symbol="0" handleClick={addToText}/>
    <Button symbol="." handleClick={addToText}/>
    <Button symbol="=" handleClick={calculateResult}/>
    <Button symbol="-" color={buttonColor} handleClick={addToText}/>
    </div>
    <Button symbol="clear" color= "red" handleClick={resetInput}/>
    </div>
  </div>;
};

export default App;
