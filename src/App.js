
import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

    const [input, setInput] = useState('');

    //Event listener
    const addInput = (valueInput) => {
      setInput(input + valueInput);
      console.log(valueInput)
    };

    const calculateResult = () => {
      if (input) {
        setInput(evaluate(input));
      } else {
        alert('Ingrese un valor');
      };
    };

  return (
    <div className='App bg-black h-[100vh] p-3 justify-center items-center flex-wrap flex'>
      
      <div className='bg-blue-700 border-4 rounded-2xl p-3 w-auto h-auto'>

        <div className='flex items-center justify-center'>        
          <Screen input={input} />
        </div>

        <div className='flex items-center justify-center'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='flex items-center justify-center'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='flex items-center justify-center'>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='flex items-center justify-center'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='flex items-center justify-center'>
          <ClearButton clearP={() => setInput('')}/>
        </div>

      </div>
      
    </div>
  );
};

export default App;