import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  let [showps, setShowps] = useState(false);
  let [setmenu, setSetmenu]= useState(false)
  return (
    <div className="App">
      <div>
       <input type={showps ? 'text' : 'password'} />
        <button onClick={() => setShowps(!showps)}>{
          showps ? "Hide" : "show"}</button>

      </div>
      <button className='micon' onClick={()=>setSetmenu(!setmenu)}>
        
        {
          setmenu ? <span>&times;</span> :<span>&#9776;</span>
        }
        
        </button>
      <div className={` menu ${setmenu ?'activemenu':''}`}>
        <nav>
          <ul className='navItem'>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

    </div>
  );
}

export default App;
