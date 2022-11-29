import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { ClockBox } from 'subcomponents';

export default function NavigationBar() {
  return (
    <div className='fixed top-0 left-0 overflow-y-auto flex flex-col justify-between h-screen pt-[40px] pb-[20px] px-[30px] w-[320px] bg-white'>
      <div>
        <div className='flex items-center gap-[10px] mb-[50px]'>
          <Image
            src="/images/setting.png"
            alt="Setting"
            width={30}
            height={30}
          />
          <h3 className='text-[26px] font-[600]'>Dashboard</h3>
        </div>
        <div className='space-y-2'>
          {nav_items.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className={`flex items-center justify-between py-[13px] px-4 rounded-xl hover:bg-purple-600 hover:text-white duration-100 ${i === 0 ? "bg-purple-600 text-white" : "text-[#9197B3]"}`}
            >
              <div className='flex gap-2'>
                <Image
                  src={item.icon_url}
                  alt={item.name}
                  width={25}
                  height={25}
                  objectFit='contain'
                />
                <span>{item.name}</span>
              </div>
              {i !== 0 ? <FiChevronRight className='text-[20px]' /> : null}
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-10'>
        <ClockBox />
        <div className='flex items-center justify-between mt-6'>
          <div className='flex gap-3'>
            <Image
              src="/images/user-picture.png"
              alt="User"
              width={42}
              height={42}
            />
            <div className='flex flex-col'>
              <span className='text-[14px] font-medium'>Turdiyev Sheroz</span>
              <span className='text-[#757575] text-[12px]'>Frontend o’qituvchi</span>
            </div>
          </div>
          <FiChevronDown className='text-[20px]' />
        </div>
      </div>
    </div>
  )
}


const nav_items = [
  {
    icon_url: "/images/key.png",
    name: "Dashboard",
    link: "/"
  },
  {
    icon_url: "/images/groups.png",
    name: "Guruhlar",
    link: '/groups'
  },
  {
    icon_url: "/images/students.png",
    name: "O’quvchilar",
    link: '/students'
  },
  {
    icon_url: "/images/routines.png",
    name: "Dars jadvali",
    link: '/groups'
  },
  {
    icon_url: "/images/settings.png",
    name: "Sozlamalar",
    link: '/students'
  },
  {
    icon_url: "/images/help.png",
    name: "Yordam",
    link: '/'
  }
]
