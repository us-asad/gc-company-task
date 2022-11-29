import React, { useEffect, useState } from 'react'

export default function ClockBox() {
  const [date, setDate] = useState(new Date());
  const [timeText, setTimeText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // for nextjs hydration failed error
    setTimeText(`${getTwoDigitTime(date.getHours())} : ${getTwoDigitTime(date.getMinutes())} : ${getTwoDigitTime(date.getSeconds())}`)
  }, [date]);

  return (
    <div
      className='px-[50px] py-[59px] rounded-[20px] text-white text-center text-[29px] font-semibold'
      style={{background: "linear-gradient(107.91deg, #EAABF0 7.37%, #4623E9 95.19%)"}}
    >
      {timeText}
    </div>
  )
}

const getTwoDigitTime = time => `${time}`.length === 1 ? `0${time}` : time;
