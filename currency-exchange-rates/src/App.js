import React from 'react';

import './App.scss'
import ConvertedCurrencyList from './components/ConvertedCurrencyList';
import CurrencyForm from './components/CurrencyForm';

function App() {
  return (
    <div className="App">
      <h1>USD Currency Converter</h1>
      <CurrencyForm />
      <ConvertedCurrencyList />
    </div>
  );
}

export default App;
