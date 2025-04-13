import React from 'react'
import VisaCard from './VisaCard'
import { useOutletContext } from 'react-router-dom';

export const PaymentCards = () => {
  const { data, isSuccess, isLoading } = useOutletContext();
  console.log(data,'data')
  console.log(isSuccess,'isSuccess')
  return (
    <div className='d-flex gap-3 justify-content-center p-5  flex-wrap'>
      {isSuccess&&data?.data?.payments.map((payment ,index) =>  <VisaCard key={index} cardAssociation={payment?.cardAssociation} lastFourDigits={payment.lastFourDigits}/>
      )}
      
 
    </div>
  )
}
