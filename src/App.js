import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Logo from './components/logo';
import Button from './components/button';
import Input from './components/input';
import Clear from './components/clear';

function App() {

  const [input, setInput] = useState('');

  const addValue = val => {
    setInput(input + val)
  };

  const clearValue = () => {
    setInput('')
  };

  const compute = () => {
    (input) ? setInput(evaluate(input)) : alert('Enter value!! :)')
  };

  return (
    <div className='App'>
   
      <Logo />

      <div className='container'>
        <Input  input={input}/>
        <section className='row'>
          <Button clickHandler={addValue}>7</Button>
          <Button clickHandler={addValue}>8</Button>
          <Button clickHandler={addValue}>9</Button>
          <Button clickHandler={addValue}>/</Button>
        </section>

        <section className='row'>
          <Button clickHandler={addValue}>4</Button>
          <Button clickHandler={addValue}>5</Button>
          <Button clickHandler={addValue}>6</Button>
          <Button clickHandler={addValue}>*</Button>
        </section>

        <section className='row'>
          <Button clickHandler={addValue}>1</Button>
          <Button clickHandler={addValue}>2</Button>
          <Button clickHandler={addValue}>3</Button>
          <Button clickHandler={addValue}>-</Button>
        </section>

        <section className='row'>
          <Button clickHandler={compute}>=</Button>
          <Button clickHandler={addValue}>0</Button>
          <Button clickHandler={addValue}>.</Button>
          <Button clickHandler={addValue}>+</Button>
        </section>

        <section className='row'>
          <Clear clickHandler={clearValue}>Clear</Clear>
        </section>


      </div>
    </div>
  );
}

export default App;