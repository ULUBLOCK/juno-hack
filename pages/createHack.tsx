import React from 'react'
import FormChart from '../components/fromChart'

const createHack = () => {
  return (
    <>
       <div className='flex justify-center w-[100%]'>
    <div className=' w-[80%]'>
        <div className='flex flex-col'>
          <h2 className='text-[30px] font-bold'>Start a Hackathon</h2>
          <p className='text-[16px] mt-[10px] mb-[30px]'>
          On the <span className='font-bold'>HackLink</span> platform, you can start a Hackathon .
          </p>
      </div>
      </div>
  </div>
  <div className='flex justify-center w-[100%]'>
    <div className='w-[80%]'>
{/*             
            <div className='flex flex-col items-center rounded-[8px] w-[100%] h-[80vh]'>
                <h1>HackLink Started Sucessfully!</h1>
                <h1>address</h1>
                <div className='flex justify-center'>
                  <button className='cursor-pointer w-[100%] mt-[30px] p-2 font-bold rounded-[8px] bg-[#6AA4B0]'>
                    Go To Hackathon
                  </button>
                </div>
            </div>
            : */}   
            <div className='flex flex-col'>
                <FormChart />
            </div>    

    </div>
</div>
</>
  )
}

export default createHack
