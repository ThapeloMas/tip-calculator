import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState(null);
  const [customTip, setCustomTip] = useState('');
  const [people, setPeople] = useState('');
  const [totalTip, setTotalTip] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const calculateTip = (percentage) => {
    const billAmount = parseFloat(bill);
    const numPeople = parseInt(people, 10);
    const tip = (billAmount * percentage) / 100;
    const total = billAmount + tip;
    const perPerson = numPeople ? total / numPeople : total;
    setTotalTip(tip);
    setTotalPerPerson(perPerson);
  };

  const handleCustomTip = () => {
    const customPercentage = parseFloat(customTip);
    calculateTip(customPercentage);
  };

  const handleReset = () => {
    setBill('');
    setTipPercentage(null);
    setCustomTip('');
    setPeople('');
    setTotalTip(0);
    setTotalPerPerson(0);
  };

  return (
    <div className="container">
    
      <div className="input-group">
        <label htmlFor="bill">Bill Amount:</label>
        <input
          type="number"
          id="bill"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />


      </div>
      <div className="button-group">
        {[5, 10, 15, 25, 50 , <label> <input
          type="number"
          id="customTip"
          placeholder='custom'
          value={customTip}
          onChange={(e) => setCustomTip(e.target.value)}
        />  </label> ].map((percentage) => (
          <button key={percentage} onClick={() => calculateTip(percentage)}>
            {percentage}%
          </button>
          
         
          
        ))}
      </div>
      <div className="input-groups">
        <label htmlFor="customTip">
        </label>
        
          
        
      </div>
      <div className="input-group">
        <label htmlFor="people">Number of People:</label>
        <input
          type="number"
          id="people"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
        <div>
         <button onClick={handleCustomTip}>Apply</button> 
        </div>
      </div>
      <div className="result-group">
        <p>Total Tip: ${totalTip.toFixed(2)}</p>
        <p>Total Per Person: ${totalPerPerson.toFixed(2)}</p>
      
      <button onClick={handleReset} className="reset-button">Reset</button>
      </div>
    </div>
 
  );
};

export default App;
