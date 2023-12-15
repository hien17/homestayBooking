import React from 'react'
import DealCard from './DealCard'
const data=[1,2,3,4,5,6,7,8,9,10,11,12]

const TopDealCard = () => {
  return (
    <div className=''>
        <p className='text-2xl font-bold'>
            Top Deals
        </p>
        <div className='mt-4 flex flex-col space-y-2'>
          {data.map((item)=>(
            <DealCard/>
          ))}
        </div>
        
        
    </div>
  )
}

export default TopDealCard