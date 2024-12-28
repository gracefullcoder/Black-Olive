import Button from './Button'
import { Link } from 'react-router-dom'
function HeroCard() {
  return (
    <div className='absolute top-1/4 left-48 bg-white p-8 pr-32 rounded-3xl flex flex-col gap-6 max-lg:hidden'>
      <h1 className='text-4xl font-bold tracking-wide'>BLACK  OLIVE</h1>
      <p className='text-slate-400'>We Belive in taste & Quality</p>
      <Link to={"salads"}><Button /></Link>
    </div>
  )
}

export default HeroCard