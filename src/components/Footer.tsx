import React from 'react'

function Footer() {
  return (
    <footer className='bg-black pt-12 px-40 relative'>
      <div className='font-bold text-xl text-slate-400 text-center mb-8'>
          BLACK OLIVE
      </div>
        <ul className='flex text-sm text-slate-400 font-medium gap-6 justify-center mb-20'>
          <li>ABOUT US</li>
          <li>SHIPPING POLICY</li>
          <li>TERMS & CONDITION</li>
          <li>PRIVACY POLICY</li>
          <li>CONTACT US</li>
        </ul>
      <div>
        <p className='text-sm text-slate-400 font-medium'>@2024 BLACK OLIVE, Website Developed by Vaibhav Gupta</p>
      </div>
    </footer>
  )
}

export default Footer