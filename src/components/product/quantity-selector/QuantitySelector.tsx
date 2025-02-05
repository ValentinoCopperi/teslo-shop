"use client"
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    onQuantityChange:Function,
    quantity:number
}
export const QuantitySelector = ({onQuantityChange,quantity} : Props) => {

    
    
  return (
    <div className="flex">
        <button onClick={()=> onQuantityChange(-1)} >
            <IoRemoveCircleOutline size={30}/>
        </button>

        <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded">
            {quantity}
        </span>

        <button  onClick={()=> onQuantityChange(1)} >
            <IoAddCircleOutline size={30}/>
        </button>
    </div>
  )
}
