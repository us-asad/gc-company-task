import { BiTrendingUp } from "react-icons/bi"
import { FiTrendingUp } from "react-icons/fi"

export default function Home() {
  return (
    <div className="flex gap-[68px] mt-[40px]">
      <div className="w-[70%] bg-white rounded-[30px] px-[37px] py-[24px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[22px] font-semibold">Yillik Statistika</h2>
          <select className="text-[#7E7E7E] bg-[#F9FBFF] rouned-[10px] px-4 py-2">
            <option>Yillik</option>
            <option>Oylik</option>
            <option>Haftalaik</option>
          </select>
        </div>
        <div className="flex items-end space-x-[16px] mt-[40px]">
          {statistics.map((item, i) => (
            <div key={i}>
              <div
                className={`group relative w-[31px] rounded-[8px] hover:bg-[#5932EA] mb-[12px] duration-100 cursor-pointer ${i === 7 ? "bg-[#5932EA]" : "bg-[#F2EFFF]"}`}
                style={{ height: item.value + "px" }}
              >
                <span className={`${i === 7 ? "!opacity-100 !top-[-40px]" : ""} absolute top-[-20px] opacity-0 group-hover:opacity-100 group-hover:top-[-40px] left-[50%] translate-x-[-50%] flex items-center gap-1 text-[12px] bg-black rounded-[8px] w-max px-[9px] py-[4px] text-white duration-200 after:absolute after:w-[10px] after:h-[10px] after:block after:rotate-[45deg] after:bg-black after:bottom-[-4px] after:left-[50%] after:translate-x-[-50%]`}>
                  <BiTrendingUp className="text-green-600 text-[16px]" />
                  <span>35%</span>
                </span>
              </div>
              <span className={`font-medium ${i === 7 ? "text-[12px] font-semibold" : "text-[10px]"}`}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[30%] bg-white rounded-[30px] px-[37px] py-[24px]">
        <h2 className="text-[22px] font-semibold">O’quvchilar</h2>
        <p className="text-[14px] text-[#ACACAC] mt-1">Guruhdagi o’quchilar guruhi</p>
        <div>CHART!</div>
      </div>
    </div>
  )
}

const statistics = [
  {
    name: "Jan",
    value: 111,
  },
  {
    name: "Feb",
    value: 142,
  },
  {
    name: "Mar",
    value: 176,
  },
  {
    name: "Apr",
    value: 131,
  },
  {
    name: "May",
    value: 94,
  },
  {
    name: "Jun",
    value: 131,
  },
  {
    name: "Jul",
    value: 142,
  },
  {
    name: "Aug",
    value: 207,
  },
  {
    name: "Sep",
    value: 181,
  },
  {
    name: "Oct",
    value: 152,
  },
  {
    name: "Nov",
    value: 111,
  },
  {
    name: "Dec",
    value: 168,
  }
]

