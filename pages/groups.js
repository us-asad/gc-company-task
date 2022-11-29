import Image from 'next/image'
import React from 'react'
import { BsArrowDown, BsArrowUp, BsPeople, BsThreeDotsVertical } from 'react-icons/bs'
import { FiUserCheck, FiUserX } from 'react-icons/fi'
import { AiOutlinePlus } from "react-icons/ai";

export default function Groups() {
  return (
    <div className='mt-16'>
      <div className='flex justify-around bg-white px-[5px] py-[29px] rounded-[30px]'>
        <div className='flex gap-5 items-center'>
          <div
            className='text-[#00AC4F] px-[25px] py-[22px] text-[40px] rounded-full'
            style={{ background: "linear-gradient(201.18deg, #D3FFE7 3.14%, #EFFFF6 86.04%)" }}
          >
            <BsPeople />
          </div>
          <div className='flex flex-col'>
            <span className='text-[12px] text-[#ACACAC]'>Hamma o’quvchilar</span>
            <h3 className='text-[30px] font-semibold'>125 ta</h3>
            <span className='text-[#00AC4F] flex gap-2'>
              <BsArrowUp className='text-[16px]' />
              <span className='text-[12px]'>16% Oylik</span>
            </span>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div
            className='text-[#00AC4F] px-[25px] py-[22px] text-[40px] rounded-full'
            style={{ background: "linear-gradient(201.18deg, #D3FFE7 3.14%, #EFFFF6 86.04%)" }}
          >
            <FiUserCheck />
          </div>
          <div className='flex flex-col'>
            <span className='text-[12px] text-[#ACACAC]'>Bitirgan o’quvchilar</span>
            <h3 className='text-[30px] font-semibold'>61 ta</h3>
            <span className='text-[#00AC4F] flex gap-2 invisible'>
              <BsArrowUp className='text-[16px]' />
              <span className='text-[12px]'>16% Oylik</span>
            </span>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div
            className='text-[#DF0404] px-[25px] py-[22px] text-[40px] rounded-full'
            style={{ background: "linear-gradient(201.18deg, #FFA3CF 3.14%, #FFD5F3 86.04%)" }}
          >
            <FiUserX />
          </div>
          <div className='flex flex-col'>
            <span className='text-[12px] text-[#ACACAC]'>Ketgan O’quvchilar</span>
            <h3 className='text-[30px] font-semibold'>10 ta</h3>
            <span className='text-[#DF0404] flex gap-2'>
              <BsArrowDown className='text-[16px]' />
              <span className='text-[12px]'>1% Oylik</span>
            </span>
          </div>
        </div>
      </div>
      <div className='bg-white mt-10 rounded-[40px_40px_0px_0px] px-10 py-8'>
        <div className="flex justify-between">
          <h2 className='text-[32px] font-semibold'>Guruhlar</h2>
          <h3 className='text-[18px] font-semibold'>Oktabr, 27</h3>
        </div>
        <div className="flex mt-4 gap-5">
          <div className="flex flex-col">
            <span className='text-[28px] font-medium'>7</span>
            <span className='text-[#838383]'>Faol Guruhlar</span>
          </div>
          <div className="flex flex-col">
            <span className='text-[28px] font-medium'>2</span>
            <span className='text-[#838383]'>Tugatgan guruh</span>
          </div>
          <div className="flex flex-col">
            <span className='text-[28px] font-medium'>9</span>
            <span className='text-[#838383]'>Umumiy guruh</span>
          </div>
        </div>
        <div className='flex flex-wrap justify-between gap-y-3 mt-8'>
          {groups.map((grp, i) => (
            <div
              key={i}
              style={{ background: grp.status === "active" ? "#DBF6FD" : "#FEE4CB" }}
              className="pt-[17px] px-[22px] pb-[24px] rounded-[25px] w-[32%]"
            >
              <div className='flex justify-between'>
                <span className='text-[#6F6F6F] text-[10px] font-medium'>December 20, 2022</span>
                <BsThreeDotsVertical />
              </div>
              <h4 className='text-[20px] font-bold mt-4 mb-[7px]'>{grp.name}</h4>
              <span className='text-[#6F6F6F] text-[12px] block mb-[17px]'>O’quvchilar soni : 6</span>
              <span className='block ml-2 text-[12px] font-bold'>O’rtacha o’z</span>
              <div className='w-[95%] h-1 rounded-full bg-white mt-1.5'>
                <div className='w-[75%] bg-[#FF942E] h-full rounded-md' />
              </div>
              <span className='text-[12px] font-bold block text-end mt-1'>70%</span>
              {grp.students ? (
                <div className='flex justify-between mt-[13px]'>
                  <span className='text-[12px] font-medium text-[#6F6F6F]'>O’qituvchi</span>
                  <div className='flex'>
                    {grp.students?.map((std, i) => (
                      <Image
                        key={i}
                        src={std}
                        alt="Student"
                        width={27}
                        height={27}
                        className={`object-contain ${i === 0 ? "translate-x-5" : i === 1 ? "translate-x-2" : ""}`}
                      />
                    ))}
                    <span className='text-[#FF942E] bg-white px-[5px] py-[4px] rounded-full relative z-[10]'>
                      <AiOutlinePlus />
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const groups = [
  {
    name: "Umumiy guruh",
    status: "inactive",
    students: [
      "/images/students/1.png",
      "/images/students/2.png",
    ]
  },
  {
    name: "Backend 001",
    status: "active"
  },
  {
    name: "Frontent 011",
    status: "inactive"
  },
  {
    name: "Frontent 013",
    status: "inactive"
  },
  {
    name: "Frontent 018",
    status: "inactive"
  },
  {
    name: "Backend 002",
    status: "active"
  },

]
