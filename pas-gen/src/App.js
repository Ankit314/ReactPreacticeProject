import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';


function App() {
  let [uppercase ,setUppercase]= useState(false);
  let [lowerCase, setLowerCase]= useState(false);
  let [number, setNumber]=useState(false);
  let [symbol, setSymbol]= useState(false);
  let [passwordLen, setPasswordLen]= useState(10);
  let [fPass , setFpass]= useState('');

  let createPassword=()=>{
    let finalPass='';
    let charSet='';
    if(uppercase || lowerCase || number || symbol){
      if(uppercase) charSet+=UC;
      if(lowerCase) charSet+= LC;
      if(number) charSet+=NC;
      if(symbol) charSet+=SC;
      for(let i=0 ;i<passwordLen;i++){
        finalPass+= charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setFpass(finalPass);

    }
    else{
      alert("Please select at least one checkbox");
    }
  }

  let copyPass =()=>{
    navigator.clipboard.writeText(fPass);
  }

  return (
    <>
    <div className='passwordBox'>
      <h2>Password Generator</h2>
      <div className='passwordBoxin'>
        <input type='text'value={fPass} readOnly />
        <button onClick={copyPass}>Copy</button>
      </div>

      <div className='passLenght'>
        <label>Password Lenght</label>
        <input type='number' max={20} value={passwordLen} onChange={(event)=>setPasswordLen(event.target.value)}/>

      </div>

      <div className='passLenght'>
        <label>Including upper case latter</label>
        <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>

      </div>

      <div className='passLenght'>
        <label>Including lower case latter</label>
        <input type='checkbox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}/>

      </div>

      <div className='passLenght'>
        <label>Including number</label>
        <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>

      </div>
      <div className='passLenght'>
        <label>Including symbol</label>
        <input type='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)}/>

      </div>
      <button className='btn' onClick={createPassword}>Generate password</button>

    </div>
    
    
    </>
  );
}

export default App;
