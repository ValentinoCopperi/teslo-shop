"use client"
import { useStoreFilter } from "@/store"
import { IoArrowDown , IoArrowUp } from 'react-icons/io5'
export const SortPrice = () => {
    const handleSort = useStoreFilter(state => state.handleSort)
    const sortMaxToMin =  useStoreFilter(state => state.sortMaxToMin)
  return (
    <div onClick={()=> handleSort (!sortMaxToMin)} className="cursor-pointer" >
        {
            sortMaxToMin ? <div className="flex items-center font-bold"><IoArrowUp /> DESC</div> : <div className="flex items-center font-bold"><IoArrowDown /> ASC</div>
        }
    </div>
  )
}
