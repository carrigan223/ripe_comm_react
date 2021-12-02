import React from 'react'



const CustomerInitials = ({customer}) => {
    const lastIdDigitsString = customer.id.toString().split('');
    const oneDigit = lastIdDigitsString.pop();
    const tenDigit = lastIdDigitsString.pop();
    const lastIdDigits = parseInt(oneDigit + tenDigit);

    const textAndBg = (digit) => {
    if (digit > 0 && digit < 10) {
        return 'bg-orange-100 text-orange-400'
    } else if (digit > 10 && digit < 30) {
        return 'bg-red-200 text-red-400'
    } else if (digit > 30 && digit < 40) {
        return 'bg-blue-100 text-blue-400'
    } else if (digit > 40 && digit < 60) {
        return 'bg-purple-200 text-purple-400'
    } else if (digit > 60 && digit < 90) {
        return 'bg-green-200 text-green-400'
    } else if (digit > 90 && digit < 100) {
        return 'bg-teal-200 text-teal-400'
    }  else {
        return 'bg-orange-100 text-orange-400'
    }
}
    
    return (
        <div className={`flex-none font-bold relative ${textAndBg(lastIdDigits)} inline-flex items-center justify-center h-14 w-14 rounded-full mx-6`}>
        {customer.first_name.charAt(0)}
        {customer.last_name.charAt(0)}
      </div>
    )
}

export default CustomerInitials
