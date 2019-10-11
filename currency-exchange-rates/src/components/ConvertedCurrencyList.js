import React from 'react';
import { connect } from 'react-redux';

import ConvertedCurrency from './ConvertedCurrency';

const ConvertedCurrencyList = props => {
    console.log('these are props passed into my currency list', props)

    const keys = Object.keys(props.rates);
    console.log('these are the keys', keys)

    return (
        <div>
            <h2>Converted Currency List</h2>
            {keys.map(key => (
                <ConvertedCurrency rate={props.rates[key]} />
            ))}
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