import React, { useMemo } from 'react'

 type Props ={
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
 }



const OtpInput = ({value, valueLength}: Props) => {
  const valueItems = useMemo(() => {
    const valueArray = value.split('');
    const items: Array<string> = [];
    for (let i=0; i < valueLength; i++) {
      const char = valueArray[i];
       if (char) {
      items.push(char);
    } else {
      items.push('');
    }

    }


    return items;
  }
, [value, valueLength]);
  return (


    <div className='flex w-full max-w-[368px] gap-x-[10px]'>
      {[1,2,3,4,5,6].map((digit, idx ) => (

        <input key={idx}
         type='text'
         inputMode='numeric'
         autoComplete='one-time-code'
         pattern='\d(1)'
         maxLength={6}
         className='otp-input w-full h-[60px] border border-#ccc rounded-md text-center text-[32px] leading-3 font-bold  '
         value={digit}
         />
 ))}
    </div>


  );
}
export default OtpInput