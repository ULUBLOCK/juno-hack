import React from 'react'

const fromChart = () => {
  return (
    <div className='flex flex-col'>
      <div className='mb-5'>
        <label className='font-bold mb-2'>Hackathon Title</label>
        <input className='p-[15px] mt-[4px] border-[1px] w-[100%] rounded-[8px] border-black' placeholder='Hackathon Title' name='HackathonTitle'>
        </input>
      </div>
      <div className='mb-5'>
        <label className='font-bold mb-2'>Hackathon Description</label>
        <textarea className='p-[15px] mt-[4px] border-[1px] max-w-[100%] min-w-[100%] min-h-[160px] rounded-[8px] border-black'   name="story" placeholder='Description '>
        </textarea>
      </div>
      <div className='flex flex-col mt-[4px]'>
        <div className='flex justify-between w-[100%]'>
          <div className='flex flex-col w-[45%] mb-5'>
            <label className='font-bold mb-2'> Prize amount</label>
            <input className='p-[10px] mt-[4px] border-[1px] w-[100%] rounded-[8px] border-black'  name="requiredAmount"  placeholder=' Amount'></input>
          </div>
          <div className='flex flex-col w-[45%]'>
            <label className='font-bold'>Choose Category</label>
            <select className='p-[10px] mt-[4px] border-[1px] border-black w-[100%] rounded-[8px]'  name="category">
              <option>ScocialFi</option>
              <option>DeFi</option>
              <option>GamFi</option>
            </select>
          </div>
        </div>
      </div>
      <div className='flex flex-row w-[100%] mb-5 '>
      <div className='flex justify-between w-[100%]'>
     {/* Image */}
     <div className='flex flex-col mt-[10px] w-[45%]'>
        <label className='font-bold mb-2'>Select Image</label>
        <input className='mt-[4px] w-[100%]' alt="dapp"  type={'file'} accept='image/*'>
        </input>
      </div>
      {/* Upload Files to IPFS */}
       
        <button className='w-[45%] mt-[30px] p-2 font-bold rounded-[8px] bg-slate-400' >
          Upload Files to IPFS
        </button>
        : <button className='w-[45%] mt-[30px] p-2 font-bold rounded-[8px] bg-slate-400' >Files uploaded Sucessfully</button>
      
       </div>
      </div>
      {/* Start DonationEvent */}
      <div className='flex justify-center'>
      <button className=' w-[60%] mt-[30px] p-2 font-bold rounded-[8px] bg-[#6AA4B0]' >
        Start Hackathon
      </button>
      </div>
    </div>
  )
}

export default fromChart
