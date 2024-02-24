import { useState } from "react";

const AgeCalculator=()=>{
 const [birthDate,setBirthDate]=useState('');
 const [age,setAge]=useState(0);
const  CalculateAge=()=>{
    let today= new Date();
    let DOB=new Date(birthDate);
    let age=today.getFullYear()-DOB.getFullYear();
    const  MonthsDiff=today.getMonth()-DOB.getMonth();
    if(MonthsDiff<0 ||( MonthsDiff===0 && today.getDate()<DOB.getDate()) ){
      age--;
    }
    setAge(age);
}
const Rest=()=>{
  setBirthDate('')
  setAge(0);
}

  return (
      <>
          <div className='Container'>
           <h2 className='heading container_title'>Age Calculator</h2>
           <p className=' para container_title'>The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years,</p>
           <div className='Container_middle'>
                  <div className='right'>
                      <h4>Date of Birth</h4>
                      <input className='date' type="date" value={birthDate} onChange={e=>setBirthDate(e.target.value)} />
                      <div className='button_div'>
                      <button className='button-65' onClick={CalculateAge} >Calculate Age</button>
                      <button className="button-65" onClick={Rest} >
              Reset
            </button>
                      
                      </div>
                  </div>
                   
                  <div className='left'>
                      <div className='Container_middle_para'>
                          <h1>Your Age is</h1>
                      </div>
                      <h1 className='age_heading'>{age>0?`${age}`:''}</h1>
                  </div>
           </div>
          </div>
      </>
  );
}
export default AgeCalculator;