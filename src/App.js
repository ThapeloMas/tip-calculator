import React, { useState } from 'react';
import './App.css';
import dollar from './icon-dollar.svg';
import Person from './icon-person.svg'

const TipCalculator = () => {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState('');
  const [customTip, setCustomTip] = useState('');

  const handleBillChange = (e) => setBill(e.target.value);
  const handleTipPercentageChange = (percentage) => setTipPercentage(percentage);
  const handlePeopleChange = (e) => setPeople(e.target.value);
  const handleCustomTipChange = (e) => setCustomTip(e.target.value);

  const calculateTip = () => {
    const billAmount = parseFloat(bill);
    const peopleCount = parseInt(people, 10);
    const tipAmount = (billAmount * (tipPercentage / 100)) / peopleCount;
    return isNaN(tipAmount) ? 0 : tipAmount.toFixed(2);
  };

  const calculateTotal = () => {
    const billAmount = parseFloat(bill);
    const peopleCount = parseInt(people, 10);
    const totalAmount = (billAmount * (1 + tipPercentage / 100)) / peopleCount;
    return isNaN(totalAmount) ? 0 : totalAmount.toFixed(2);
  };

  return (
    <div className="container">
      <div className="input-container">
        <label  className='nametag' >Bill</label>
        <img src={dollar} alt='dollar' className='dollar'></img>
        <input className='inputb' type="number" value={bill} onChange={handleBillChange} placeholder="0" />
        
        <label className='nametag' >Select Tip %</label>
        <div className="tip-buttons">
          {[5, 10, 15, 25, 50].map((percentage) => (
            <button key={percentage} onClick={() => handleTipPercentageChange(percentage)}>
              {percentage}%
            </button>
          ))}
          
          <input
            type="number"
            value={customTip}
            onChange={handleCustomTipChange}
            placeholder="Custom"
          />
        </div>
        <br></br>
        <br></br>
        <br></br>

        <label className='nametag'>Number of People</label>
        <img src={Person} alt='person' className='person'></img>
        <input className='inputb' type="number" value={people} onChange={handlePeopleChange} placeholder="0" />
      </div>

      <div className="output-container">
        <div>
          <p>TipAmount/person: <span className='resultsm'> ${calculateTip()}</span>  </p>
         
          
        </div>
        <div>
          <p>Total/person: <span className='resultsms'>${calculateTotal()} </span> </p>
          
        </div>
        <div className='Resetbtn'>
        <button className='btn' onClick={() => {setBill(''); setTipPercentage(0); setPeople(''); setCustomTip('')}}>
          RESET
        </button>
        </div>
      
      </div>
    </div>
  );
};

export default TipCalculator;
