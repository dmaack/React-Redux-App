import React from 'react';



const CurrencyForm = () => {

    return (
        <div>
            <form>
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
        </div>
    )
}

export default CurrencyForm;