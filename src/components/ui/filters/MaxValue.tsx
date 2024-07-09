"use client"
import React from 'react'
import { useStoreFilter } from '@/store'
import Slider from '@mui/material/Slider';

export const MaxValue = () => {
  const maxValue = useStoreFilter(state => state.maxValue)
  const handleMaxValue = useStoreFilter(state => state.handleMaxValue)

  const handleMaxValueInput = (event: Event, value: number | number[]) => {
    handleMaxValue(value as number)
  }

  return (
    <div className='flex items-center'>
      <Slider
        aria-label="Temperature"
        min={10}
        max={300}
        step={10}
        onChange={handleMaxValueInput}
        color="primary"
        value={maxValue}
      />
      <span className='pl-3'>{maxValue}</span>
    </div>
  )
}
