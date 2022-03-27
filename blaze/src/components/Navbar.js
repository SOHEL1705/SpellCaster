import React from 'react'
export default function Navbar() {
  return (
    <div >
      <nav className='py-3  bg-gradient-to-t from-slate-400/50  to-slate-900/75 '>
          <ul className='flex   text-slate-900 space-x-10 mx-9'>
              <span className='text-black flex mb-2 text-[20px]  '>SlimeBlaze</span>
              <li><a className='text p-1'href ="/">Home</a></li>
              <li><a className='text p-1'href="/About">About</a></li>
              <select className='flex items-start bg-transparent' name="cars" id="cars">
              <option className=' bg-slate-500'value="volvo">News</option>
              <option className=' bg-slate-500'value="saab">Aajtak</option>
              <option className=' bg-slate-500'value="opel">NDTV</option>
              <option className=' bg-slate-500'value="audi">BhiwandiNews</option>
              </select>
          </ul>
      </nav>
    </div>
    
  )
}

