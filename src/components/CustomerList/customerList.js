import React from "react";
import { CustomerList } from "./customerListStyles.js";
import CustomerListHeader from "./CustomerListHeader/customerListHeader.js";
import CustomerCard from "./CustomerCard/customerCard"


const CustomerListComponent = ({ customers }) => {
  console.log(customers);
  return (
    <CustomerList className="text-black">
      <CustomerListHeader />
      <div className="overflow-scroll h-5/6">
        {customers.map((customer) => (
          <CustomerCard customer={customer} key={customer.id} />
        ))}
      </div>
    </CustomerList>
  );
};

export default CustomerListComponent;
