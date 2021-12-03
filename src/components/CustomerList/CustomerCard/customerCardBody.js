import React from 'react'

const CustomerCardBody = ({customer, dateString}) => {
    return (
        <div className="flex w-10/12 items-center">
        <div className="w-8/12">
          <div className="text-sm text-gray-900">{`${customer.first_name} ${customer.last_name}`}</div>
          <div className="text-xs text-gray-600 truncate ">
            {customer.messages[0].body}
          </div>
        </div>
        <div className="w-4/12 flex-col justify-end item-center">
          <div className="text-sm text-gray-900">
            Agent:{" "}
            {customer.assignments ? customer.assignments[0].user.name : ""}
          </div>
          <div className="text-xs text-gray-600 truncate ">{dateString}</div>
          <div className="text-sm text-gray-900">
            {customer.tags.length > 0 ? customer.tags[0].name : ""}
          </div>
        </div>
      </div>
    )
}

export default CustomerCardBody
