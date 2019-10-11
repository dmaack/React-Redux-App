import React from 'react';
import { connect } from 'react-redux';




const ConvertedCurrency = props => {
    console.log('this is my converted currency component props', props)
    return(
        <div>
            <li>{props.rate}</li>
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