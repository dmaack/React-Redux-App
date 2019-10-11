import React from 'react';
import { connect } from 'react-redux';

import ConvertedCurrency from './ConvertedCurrency';

const ConvertedCurrencyList = props => {
    console.log('these are props passed into my currency list', props)

    const keys = Object.keys(props.rates).sort();
    console.log('these are the keys', keys)

    return (
        <div>
            <h2>Converted Currencies</h2>
        <div className='list-container'>
            
            
            

            {keys.map(key => (
                <ConvertedCurrency name={key} rate={props.rates[key].toFixed(4)} convertedAmount={(props.rates[key]*props.amount).toFixed(2)}/>
            ))}
        </div>
        </div>
    )
}



const mapsStateToProps = state => {
    return {
        amount: state.amount,
        rates: state.rates
    }
}

export default connect(mapsStateToProps, {})(ConvertedCurrencyList);