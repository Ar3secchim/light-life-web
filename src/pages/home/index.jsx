import React from 'react'
import LayoutRoot from './layout'

function Home() {
  return (
    <LayoutRoot>
       <div className='flex flex-col p-6 '>
        <h1 className='font-bold text-xl'>Tasks do dia </h1>

        <ul className='mt-8'>
          <li>tasks 01</li>
        </ul>
       </div>
    </LayoutRoot>
  )
}

export default Home;