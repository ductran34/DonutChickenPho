import React from 'react'

function SmallCardContainer() {
  return (
    <div>
        {/*======== Title of Container ============ */}
        <div>
            Donuts
        </div>
        {/*======== List Item of Container ============ */}
        <div className="h-full w-full bg-pink-500 grid gap-8 grid-cols-auto-fill ">
            <div className='bg-pink-300 h-[10rem]'>ddddddd</div>
            <div className='bg-pink-300'>ddddddd</div>
            <div className='bg-pink-300'>ddddddd</div>
            <div className='bg-pink-300'>ddddddd</div>
            <div className='bg-pink-300'>ddddddd</div>
            <div className='bg-pink-300'>ddddddd</div>
        </div>
    </div>
  )
}

export default SmallCardContainer