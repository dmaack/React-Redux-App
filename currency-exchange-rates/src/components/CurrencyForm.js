import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRates } from '../actions';



const CurrencyForm = props => {
console.log('these are the props from the currency form', props)

    useEffect(() => {
        props.fetchRates();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

    }

    if (props.isFetching) {
        return <h2>Loading Your Currency Conversion...</h2>;
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>$
                <input type='number'/> USD
                </label>
                
                {/* <label>Select Currency</label>
             <select id = "myList">
               <option value = "1">EURO</option>
               <option value = "2">CHF</option>
               <option value = "3">NOK</option>
               <option value = "4">CAD</option> */}
             {/* </select> */}

            </form>
            <button type='submit'>Convert</button>
        </div>
    )
}

const mapsStateToProps = state => {
    return {
        amount: state.amount,

    }
}

export default connect(mapsStateToProps, { fetchRates })(CurrencyForm);