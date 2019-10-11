import React from 'react';
import { connect } from 'react-redux';




const ConvertedCurrency = props => {
    console.log('this is my converted currency component props', props)
    return(
        <div className='converted-currency-container'>
            <h3>{props.name}</h3>
            <p><strong>Amount: </strong>{props.convertedAmount}</p>
            <p><strong>Rate: </strong>{props.rate}</p>
        </div>
    )
}

const mapsStateToProps = state => {
    return {
        amount: state.amount,
        rates: state.rates
    }
}

export default connect(mapsStateToProps, {})(ConvertedCurrency);