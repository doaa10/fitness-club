import React, { useState } from 'react';
import './membership.css';
import axios from 'axios';
import PaymentIcon from 'react-payment-icons';

export const Membership = () => {
    const[Firstname,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[number,setNumber]=useState('');
    const[age,setAge]=useState('');
    const[height,setHeight]=useState('');
    const[weight,setWeight]=useState('');
    const[city,setCity]=useState('');
    const[cardName,setCardName]=useState('');
    const[cardNum,setCardNum]=useState('');
    const[cvv,setCvv]=useState('');
    const[membershipType,setMembershipType]=useState('');

    const[show,setShow]=useState(false);


    const handleChange = e => {
        const target = e.target;
        if (target.checked) {
          setMembershipType(target.value);
        }
      };

      const handleSubmit = e => {
        e.preventDefault();
        
        let fData=new FormData();
        
        fData.append('firstName',Firstname);
        fData.append('lastName',lastName);
        fData.append('phoneNumber',number);
        fData.append('age',age);
        fData.append('height',height);
        fData.append('weight',weight);
        fData.append('city',city);
        fData.append('cardName',cardName);
        fData.append('cardNum',cardNum);
        fData.append('cvv',cvv);
        fData.append('MembershipType',membershipType);

        axios.post('http://localhost/web/index.php', fData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
        
      setShow(true);
      };
  return (
    
    <div className='membership'>
    <div className='mem-head'>
        <h1>membership application</h1>
        <span>To apply for membership please complete all questions.</span>
    </div>
    <form className='form'  action="http://localhost/web/index.php"
                method="post">
    <div className='mem-form'>
        
            <div className='left-form'>
            <div className='name'>
                <label> Name </label>
                <input type='text' placeholder='first name' value={Firstname} onChange={(e)=>setFirstName(e.target.value)}></input>
                <input type='text' placeholder='last name' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
            </div>
            <div className='mem-num'>
                <label>phone number </label>
                <input type='number' placeholder='+20 - - - - - - - - - - -' value={number} onChange={(e)=>setNumber(e.target.value)}></input>
                 </div>

                 <div className='mem-age'>
                    <label>age </label>
                    <input type='number' placeholder='eg: +16' value={age} onChange={(e)=>setAge(e.target.value)}></input>
                 </div>

                 <div className='mem-inf'>
                    <div className='height'>
                        <label>height </label>
                        <input type='number' placeholder='eg: 170' value={height} onChange={(e)=>setHeight(e.target.value)}></input>
                    </div>
                    <div className='weight'>
                        <label>weight </label>
                        <input type='number' placeholder='eg: 60' value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
                    </div>
                </div>

            <div className='address'>
                <label>city </label> 
                <input type='text' placeholder='eg: Alexandria' value={city} onChange={(e)=>setCity(e.target.value)}></input>
                </div>    

             

            </div>
            

            <div className='right-form'>
                <span>payment</span>
                <span>accepted cards</span>
                <div className='acc-card'>
                <PaymentIcon
                        id="visa"
                        style={{ width: 40 }}
                        className="payment-icon"
                />
                      <PaymentIcon
                        id="mastercard"
                        style={{ width: 40 }}
                        className="payment-icon"
                />
                      <PaymentIcon
                        id="discover"
                        style={{ width: 40 }}
                        className="payment-icon"
                />
                      <PaymentIcon
                        id="amex"
                        style={{ width: 40 }}
                        className="payment-icon"
                />
                </div>
                
                
                <div className='card-name'>
                    <label>name on the card</label>
                    <input type='text' placeholder='card name' value={cardName} onChange={(e)=>setCardName(e.target.value)}></input>
                </div>
                <div className='card-num'>
                    <label >credit card number</label>
                    <input type='number' placeholder='- - - - - - - - - - - -' value={cardNum} onChange={(e)=>setCardNum(e.target.value)}></input>
                </div>

                    <div className='cvv'>
                        <label>CVV</label>
                        <input type='number' placeholder='CVV' value={cvv} onChange={(e)=>setCvv(e.target.value)}></input>
                    </div>
                    
                    <div className='type-memb'>
                        
                    <label className='typ'>membership type</label>
                       <div>
                       <input type='radio' value='basic plan' checked={membershipType=='basic plan'} onChange={handleChange}></input>
                        <label>basic plan</label>
                       </div>
                        <div>
                        <input type='radio' value='premium  plan' checked={membershipType=='premium plan'} onChange={handleChange}></input>
                        <label>premium plan</label>
                        </div>
                        <div>
                            <input type='radio' value='pro plan' checked={membershipType=='pro plan'} onChange={handleChange}></input>
                        <label>pro plan</label>
                        </div>
                        <button className='confirm' onClick={handleSubmit}>confirm</button>

                       {
                        show &&<h1 className='valid'>submitted succcessfully</h1>
                       } 
                    </div>
            </div>
        

        
    </div>
    </form>
    </div>
  )
}
