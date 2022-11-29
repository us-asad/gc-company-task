import React from 'react'
import { BsFillPlusCircleFill, BsMoon } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { FiSearch } from 'react-icons/fi';
import { SearchField } from 'subcomponents';

export default function Header() {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-[24px] font-medium'>Salom Sheroz 👋🏼,</h1>
      <div className='flex gap-3 items-center text-[20px] text-[#7E7E7E]'>
        <button>
          <BsMoon />
        </button>
        <button>
          <BsFillPlusCircleFill />
        </button>
        <button>
          <BiBell />
        </button>
        <SearchField />
      </div>
    </div>
  )
}
