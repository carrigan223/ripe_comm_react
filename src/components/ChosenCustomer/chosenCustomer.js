import React from 'react'
import { ChosenCustomer } from "./chosenCustomerStyles";
import CustomerProfileStatusComponent from './CustomerProfileStatus/customerProfileStatusComponent';

const ChosenCustomerComponent = () => {
    return (
        <ChosenCustomer>
            <CustomerProfileStatusComponent />
            Chosen Customers
        </ChosenCustomer>
    )
}

export default ChosenCustomerComponent
