import React, {useState} from 'react'
    import OtpInput from './OtpInput'
function index(){
    const [otp, setotp] = useState('');
    const onChange = (value:string) => setotp(value);
  return (
    <section>
        <h1>OTP INPUT</h1>
    <OtpInput value={otp} valueLength={6} onChange={onChange}/>
    </section>
  )
}

export default index