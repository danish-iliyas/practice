import React from 'react'

const Home = () => {
  return (
    <div className='h-[90vh] bg-slate-400 w-[100%]  flex align-center justify-center items-center flex-col flex-wrap gap-[10px]'  >
           <div className='flex gap-[10px] w-[100%] align-center justify-around'>
           <div className=' h-[40vh] w-[40vh] bg-[#e0e0e0] flex flex-col justify-center items-center rounded-[10px] '>
             
                 <h1>tittle</h1>
                 <p >description</p>
                 <button className='bg-red-400 rounded  p-[5px]'>read more</button>
           </div>
           <div className='h-[40vh] w-[40vh] bg-[#e0e0e0] flex flex-col justify-center items-center rounded-[10px]'>
             
             <h1>tittle</h1>
             <p >description</p>
             <button className='bg-red-400 rounded  p-[5px]'>read more</button>
       </div>
       <div className='h-[40vh] w-[40vh] bg-[#e0e0e0] flex flex-col justify-center items-center rounded-[10px]'>
             
             <h1>tittle</h1>
             <p >description</p>
             <button className='bg-red-400 rounded  p-[5px]'>read more</button>
       </div>
       </div>
        <button className="cursor-pointer bg-blue-500 rounded-sm p-[5px] mt-[30px]">
                     More...
       </button>

      
      
    </div>
  )
}

export default Home
