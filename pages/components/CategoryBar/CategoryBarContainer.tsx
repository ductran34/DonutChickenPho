import React from 'react'

function CategoryBarContainer() {
  return (
    <div className='h-[9rem] bg-white border-b-8 border-[#F5F5F5]'>
        <div className='h-full flex flex-row justify-center gap-10 items-center' >
            {[...new Array(4)].map((item, key) => {return (
                <div className='flex flex-col items-center gap-2 text-center text-white'>
                    <div className='w-[4rem] h-[4rem] bg-[#1E283E] rounded-full'></div>
                    <div className='bg-[#1E283E] h-[2rem] w-[6rem] py-0.5 px-4 rounded-full'>donut</div>
                </div>
            )})}
        </div>
    </div>
  )
}

export default CategoryBarContainer