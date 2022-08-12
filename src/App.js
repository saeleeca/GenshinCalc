import primo from './Item_Primogem.webp'
import './App.css';
import * as React from 'react';
import { useState } from 'react';


function App() {
  const [base, setBase] = useState('');
  const [compensation, setCompensation] = useState('');
  const [exploration, setExploration] = useState('');
  const [events, setEvents] = useState('');
  const [welkin, setWelkin] = useState('');
  const [battlepass, setBattlepass] = useState('');
  let [total, setTotal] = useState(0);
  // let checkForce = false;
  

  const calcPrimos = async () => {
    const data = {base, compensation, exploration, events, welkin, battlepass};
    // let total = 0

    for(let key in data) {

      if (data[key] === '') {
        console.log("is undefined: ", data[key]);
      }

      else {
        console.log(key, data[key]);
        total = total + parseInt(data[key]);
        // total = total + parseInt(data[key]);
      }
      setTotal(total)
      
    }
    console.log("> calcPrimos total: ", total);
    // alert("Your primos by the end of the Patch 2.8 is :", total);
    
  }


  return (
    <div className="App"
    style={{ 
  backgroundImage: `url("https://assets.pcinvasion.com/wp-content/uploads/2022/07/Genshin-Impact-unlock-golden-apple-archipelago-version-2.8--800x400.jpg")` 
}}
    >
      <header className="App-header">
        <img src={primo} className="App-logo" alt="logo" />
        <h2>
          Welcome to PrimoCalc!
        </h2>
        <p>
          Enter your current primogems and calculate your amount by end of Patch 2.8!
        </p>

        <tbody>

          <tr>
            <label>Current: </label>
            <input
            type="number"
            placeholder='0'          
            value={base}
            onChange={a => setBase(a.target.value)} />
          </tr>

          {/* <select
                type="text"
                // value={unit}
                onChange={e => setUnit(e.target.value)}>
                    <option value="Choose One">Choose One</option>
                    <option value="kgs">kgs</option>
                    <option value="lbs">lbs</option>
                 </select> */}

          <tr>
            <label>Update Compensation: </label>
            <select
            required true
            type="number"
            // value={compensation}
            onChange={b => setCompensation(b.target.value)}>
              <option value="0">0</option>
              <option value="300">300</option>
              <option value="600">600</option>
              </select>
          </tr>

          <tr>
            <label>100% Exploration: </label>
            <select
            required true
            type="number"
            // value={compensation}
            onChange={c => setExploration(c.target.value)}>
              <option value="0">0%</option>
              <option value="250">25%</option>
              <option value="500">50%</option>
              <option value="750">75%</option>
              <option value="1000">100%</option>
              </select>
          </tr>

          <tr>
            <label>All New Events: </label>
            <input
            type="checkbox"
            value={2260}
            onChange={d => setEvents(d.target.value)} />
          </tr>

          <tr>
            <label>Blessing of Welkin: </label>
            <input
            type="checkbox"
            value={3780}
            onChange={e => setWelkin(e.target.value)} />
          </tr>

          <tr>
            <label>Battlepass: </label>
            <input
            type="checkbox"
            value={1320}
            onChange={f => setBattlepass(f.target.value)} />
          </tr>

        </tbody>

        <br></br>
            <button
                onClick={calcPrimos}
            >Calculate!</button>

        <div>
          <p>Approximate Primos: { total } </p>
        </div>


      
      </header>
    </div>
  );
}

// style={{ 
//   backgroundImage: `url("https://assets.pcinvasion.com/wp-content/uploads/2022/07/Genshin-Impact-unlock-golden-apple-archipelago-version-2.8--800x400.jpg")` 
// }}
export default App;
