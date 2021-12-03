import React from "react";

const CustomerListHeader = () => {
 
  return (
    <>
      <div className="text-black h-1/6 border-b-2 border-r-2 border-grey-100 bg-gray-50 flex-col">
        <h1 className="font-bold pt-3 pl-8">Communication Theater</h1>
        <div className="flex w-full justify-between py-2 text-base font-bold text-gray-700 px-8">
          <div>Agent:</div>
          <div>Status:</div>
          <div className="flex-col">
            <span>Date Range:</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerListHeader;
