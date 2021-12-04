import React from "react";
import CustomerInitials from "../../CustomerInitials/customerInitials";
import CustomerCardBody from "./customerCardBody";

const CustomerCard = ({ customer }) => {

  //finding the last message date if customer
  //has messages
  let dateString = ''
  if (customer.messages.length > 0) {
    const firstMessageDate = new Date(customer.messages[0].created_at);
    dateString = firstMessageDate.toLocaleString();
  }

  return (
    <div className="flex p-3 border-b-2">
      <CustomerInitials customer={customer} />
      <CustomerCardBody customer={customer} dateString={dateString} />
    </div>
  );
};

export default CustomerCard;
