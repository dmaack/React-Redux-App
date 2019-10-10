import React from 'react';

import './App.css';
import ConvertedCurrencyList from './components/ConvertedCurrencyList';
import CurrencyForm from './components/CurrencyForm';

function App() {
  return (
    <div className="App">
      <h1>Dominique's Currency Converter</h1>
      <CurrencyForm />
      <ConvertedCurrencyList />
    </div>
  );
}

export default App;
