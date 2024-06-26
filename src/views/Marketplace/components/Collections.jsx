import React from 'react'
import CollectionCard from './CollectionCard'

const Collections = ({setNoCollection}) => {
  return (
    <div className='mt-10 mb-10 text-white min-[1200px]:mx-40 min-[800px]:mx-20 min-[600px]:mx-10 min-[400px]:mx-4 mx-2'>
        <div className='flex flex-col space-y-8 '>
            <div className='min-[1200px]:text-4xl min-[600px]:text-3xl text-xl'>
              Homestay Providers on Binance Smart Chain
            </div>
            <div>
              <div className='min-[1200px]:text-xl min-[600px]:text-base text-sm'>
                Discover rental contracts and interesting offer by some of the most <br className='max-[800px]:hidden'/>
                famous homestay provider from all over the world.
              </div>
            </div>
            <div className='grid min-[1200px]:grid-cols-3 min-[600px]:grid-cols-2 grid-cols-1 gap-4 justify-between'>
              {Array.from({ length: 12 }, (_, index) => (
                <div key={index} className='border border-blue-950 rounded-lg'>
                  <CollectionCard setNoCollection={setNoCollection} index={index}/>
                </div>
              ))}
            </div>
            
        </div>

    </div>
  )
}

export default Collections