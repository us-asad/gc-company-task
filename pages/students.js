import Image from 'next/image';
import React from 'react'
import { BsArrowDown, BsArrowUp, BsPeople } from 'react-icons/bs';
import { FiUserCheck, FiUserX } from 'react-icons/fi';
import { GoDeviceDesktop } from "react-icons/go";
import { SearchField } from 'subcomponents';

export default function Students() {
  return (
    <div>
      <div className='flex justify-between bg-white px-[5px] py-[29px] rounded-[30px]'>
        <div className='flex gap-3 items-center'>
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
        <div className='flex gap-3 items-center'>
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
        <div className='flex gap-3 items-center'>
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
        <div className='flex gap-3 items-center'>
          <div
            className='text-[#00AC4F] px-[25px] py-[22px] text-[40px] rounded-full'
            style={{ background: "linear-gradient(201.18deg, #D3FFE7 3.14%, #EFFFF6 86.04%)" }}
          >
            <GoDeviceDesktop />
          </div>
          <div className='flex flex-col'>
            <span className='text-[12px] text-[#ACACAC]'>Faol o’quvchilar</span>
            <h3 className='text-[30px] font-semibold'>54 ta</h3>
            <div className='flex'>
              {[...new Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src={`/images/students/${i + 1}.png`}
                  alt={`Student ${i + 1}`}
                  width={26}
                  height={26}
                  style={{ transform: `translateX(-${i * 8}px)` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white px-[40px] py-[30px] rounded-[30px]'>
        <h2 className='text-[22px] font-semibold'>Hamma O’quvchilar</h2>
        <div className="flex items-center justify-between mt-[7px]">
          <span className='text-[#16C098] text-[14px]'>Faol o’quvchilar</span>
          <div className='flex gap-2'>
            <SearchField className="!bg-[#F9FBFF]" />
            <div className='text-[16px] px-[15px] py-[10px] rounded-[10px] bg-[#F9FBFF]'>
              <span className='text-[#7E7E7E]'>Short Status: </span>
              <select>
                <option>Faol</option>
                <option>Nofaol</option>
                <option>Bitirgan</option>
                <option>Ketgan</option>
              </select>
            </div>
          </div>
        </div>
        <table className='w-full'>
          <thead className="border-b pb-6">
            <tr className='text-[#B5B7C0] text-[14px]'>
              {tableContent.map((item, i) => (
                <td className='font-medium py-4' key={i}>{item.label}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={i} className="items-center">
                {tableContent.map(item => (
                  <td key={item.name} className={`py-5 border-b text-[14px] font-medium`}>
                    {item.name === "status" ? (
                      <button className={`border-2 w-[84px] py-1 rounded-md capitalize ${student.status === "active" ? "border-[#00B087] bg-[#16C09861] text-[#008767]" : "border-[#DF0404] bg-[#FFC5C5] text-[#DF0404]"}`}>{student.status}</button>
                    ) : (
                      student[item.name]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const tableContent = [
  {
    label: "F.I.O",
    name: "full_name"
  },
  {
    label: "Yo’nalish",
    name: "course"
  },
  {
    label: "Telefon nomer",
    name: "phone_number"
  },
  {
    label: "To’lov",
    name: "fee"
  },
  {
    label: "Guruh",
    name: "course_name"
  },
  {
    label: "Status",
    name: "status"
  },
]

const students = [
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "inactive"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "inactive"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "inactive"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "inactive"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  {
    full_name: "Jane Cooper",
    course: "Programming",
    phone_number: "(225) 555-0118",
    fee: "697 000",
    course_name: "Frontend 010",
    status: "active"
  },
  
]
