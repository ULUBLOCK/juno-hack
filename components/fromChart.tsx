/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useRef, useState } from 'react';
import { contract, useWallet } from '../utils';

const fromChart = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);
  const { wallet } = useWallet();

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDate(e.target.value);
  };
  return (
    <div className='flex flex-col'>
    <form onSubmit={async (e) => {
      e.preventDefault();
      console.log(e);
      const title = e.target[0].value;
      const desc = e.target[1].value;
      const bounty = e.target[2].value;
      const j1 = e.target[4].value;
      const j2 = e.target[5].value;
      const j3 = e.target[6].value;
      const args = {
        create_hackathon: {
          name: title,
          description: desc,
          balance: bounty,
          jury1: j1,
          jury2: j2,
          jury3: j3,
          deadline: 3242343,
        }
      }
      console.log(args);
      await wallet.client.execute(wallet.account.address, contract, args, "auto");
    }}>
      <div className='mb-5'>
        <label className='font-bold mb-2'>Hackathon Title</label>
        <input className='p-[15px] mt-[4px] border-[1px] w-[100%] rounded-[8px] border-black' placeholder='Hackathon Title' name='HackathonTitle'>
        </input>
      </div>
      <div className='mb-5'>
        <label className='font-bold mb-2'>Hackathon Description</label>
        <textarea className='p-[15px] mt-[4px] border-[1px] max-w-[100%] min-w-[100%] min-h-[160px] rounded-[8px] border-black' name="story" placeholder='Description '>
        </textarea>
      </div>
      <div className='flex flex-col mt-[4px]'>
        <div className='flex justify-between w-[100%]'>
          <div className='flex flex-col w-[45%] mb-5'>
            <label className='font-bold mb-2'> Prize amount</label>
            <input className='p-[10px] mt-[4px] border-[1px] w-[100%] rounded-[8px] border-black' name="requiredAmount" placeholder=' Amount'></input>
          </div>
          <div className='flex flex-col w-[45%]'>
            <label className='font-bold'>Choose Category</label>
            <select className='p-[10px] mt-[4px] border-[1px] border-black w-[100%] rounded-[8px]' name="category">
              <option>ScocialFi</option>
              <option>DeFi</option>
              <option>GamFi</option>
            </select>
          </div>
        </div>
        <div className='mb-5'>
          <label className='font-bold mb-2'>jury 1</label>
          <input className='p-[15px] mt-[4px] border-[1px] w-[100%] rounded-[8px] border-black' placeholder='adress' name='HackathonTitle'>
          </input>
        </div>
        <div className='mb-5'>
          <label className='font-bold mb-2'>jury 2</label>
          <input className='p-[15px] mt-[4px] border-[1px] w-[100%] rounded-[8px] border-black' placeholder='adress' name='HackathonTitle'>
          </input>
        </div>
        <div className='mb-5'>
          <label className='font-bold mb-2'>jury 3</label>
          <input className='p-[15px] mt-[4px] border-[1px] w-[100%] rounded-[8px] border-black' placeholder='adress' name='HackathonTitle'>
          </input>
        </div>
      </div>
      <div className='flex flex-row w-[100%] mb-5 '>
        <div className='flex justify-between w-[100%]'>
          {/* Image */}
          <div className='flex flex-col mt-[10px] w-[45%]'>
            <label className='font-bold mb-2'>Select Image</label>
            <input className='mt-[4px] w-[100%]' alt="dapp" type={'file'} accept='image/*'>
            </input>

          </div>
          {/* Upload Files to IPFS */}

          <button className='w-[45%] mt-[30px] p-2 font-bold rounded-[8px] bg-slate-400' >
            Upload Files to IPFS
          </button>
          : <button className='w-[45%] mt-[30px] p-2 font-bold rounded-[8px] bg-slate-400' >Files uploaded Sucessfully</button>

        </div>
      </div>

      <div>
        <p > <span className='font-bold'>Deadline : </span> {date}</p>
        <input
          type="date"
          onChange={handleChange}
          ref={dateInputRef}
        />

      </div>

      {/* Start DonationEvent */}
      <div className='flex justify-center'>
        <button type='submit' className=' w-[60%] mt-[30px] p-2 font-bold rounded-[8px] bg-[#6AA4B0]' >
          Start Hackathon
        </button>
      </div>

      </form>

    </div>
  )
}

export default fromChart
