import { useState, useEffect } from 'react';

export default function ImageVerification({ accountNumber, firstName, otherName, lastName, customerID }) {

  useEffect(()  => {

  }, []); 

  const image_url = 'http://192.168.1.242/imaging/getimages-' + accountNumber;


  return (
    <>
        <iframe width="100%" height="500px" src={image_url} title="Browser"></iframe>
        <div className='flex justify-center'>
            <div>
                <div>Customer's Name     : <span className='font-extrabold text-black text-lg'>{firstName} {otherName} {lastName}</span></div>
                <div>Customer ID    : <span className='font-extrabold text-black text-lg'>{customerID}</span></div>
                <div>Account Number    : <span className='font-extrabold text-black text-lg'>{accountNumber}</span> </div>
            </div>
        </div>
    </>
  );
}