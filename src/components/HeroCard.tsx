import React from 'react'
import Button from './Button'

function HeroCard() {
  return (
    <div className='absolute top-1/4 left-48 bg-white p-8 pr-32 rounded-3xl flex flex-col gap-6' >
      <h1 className='text-4xl font-bold tracking-wide'>BLACK  OLIVE</h1>
      <p className='text-slate-400'>We Belive in taste & Quality</p>
      <Button />
    </div>
  )
}

export default HeroCard