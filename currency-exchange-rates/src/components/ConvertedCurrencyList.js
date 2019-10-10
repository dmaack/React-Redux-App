import React from 'react';
import { connect } from 'react-redux';

const ConvertedCurrencyList = props => {
    console.log('these are props passed into my currency list', props)
    return (
        <div>
            <h2>Converted Currency List</h2>
        </div>
    )
}



const mapsStateToProps = state => {
    return {
        rates: state.rates
    }
}

export default connect(mapsStateToProps, {})(ConvertedCurrencyList);