import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = parseFloat(num1) / parseFloat(num2);
    setResult(quotient);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <br />
      <button className="button button-addition" onClick={handleAddition}>
        Addition
      </button>
      <button className="button button-subtraction" onClick={handleSubtraction}>
        Subtraction
      </button>
      <button
        className="button button-multiplication"
        onClick={handleMultiplication}
      >
        Multiplication
      </button>
      <button className="button button-division" onClick={handleDivision}>
        Division
      </button>
      <br />
      <h2>Result: {result}</h2>
    </div>
  );
};

export default Calculator;
