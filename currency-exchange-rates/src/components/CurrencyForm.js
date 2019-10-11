import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRates, updateAmount } from '../actions';



const CurrencyForm = props => {
console.log('these are the props from the currency form', props)

    useEffect(() => {
        props.fetchRates();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChange = e => {
        props.updateAmount(e.target.value)
    }
    // const handleClick = e => {
    //     e.preventDefault();
    //     props.updateAmount(props.amount);
        
    //     console.log('this is my handleclick props.amount', props.amount)
    // }

    if (props.isFetching) {
        return <h2>Loading Your Currency Conversion...</h2>;
      }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label>$
                <input 
                    type='number'
                    name='amount'
                    value={props.amount}
                    onChange={handleChange}
                /> USD
                </label>
                
                {/* <label>Select Currency</label>
             <select id = "myList">
               <option value = "1">EURO</option>
               <option value = "2">CHF</option>
               <option value = "3">NOK</option>
               <option value = "4">CAD</option> */}
             {/* </select> */}

            </form>
            {/* <button onClick={handleClick}>Convert</button> */}
        </div>
    )
}

const mapsStateToProps = state => {
    return {
        amount: state.amount,

    }
}

export default connect(mapsStateToProps, { fetchRates, updateAmount })(CurrencyForm);