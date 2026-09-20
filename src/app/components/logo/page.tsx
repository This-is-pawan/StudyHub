import React from 'react'
import { PiStudentFill } from "react-icons/pi";
const Logo = () => {
  return (
    <div>
     <button className='flex items-center'>

<PiStudentFill  className='text-4xl text-blue-500'/>
<p className="text-xl capitalize font-bold flex items-center text-black">
  Study <span className="text-blue-500">Hub</span>
</p>
     </button>
    </div>
  )
}

export default Logo