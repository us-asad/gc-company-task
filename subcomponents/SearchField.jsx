import React from 'react'
import { FiSearch } from 'react-icons/fi'

export default function SearchField({ className }) {
  return (
    <div className={`flex items-center gap-[13px] px-[15px] bg-white rounded-[12px] overflow-hidden ${className}`}>
      <FiSearch className="text-[#B5B7C0]" />
      <input
        type="text"
        placeholder='Qidiruv'
        className='py-[5px] bg-transparent text-[16px] text-black'
      />
    </div>
  )
}
