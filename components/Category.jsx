import React from 'react'

const Category = () => {
  return (
    <div className='flex-col w-full gap-2 mt-2'>
        <h1 className="font-serif text-2xl font-medium text-black">
        Hello Admin,
        </h1>
        <p className="font-sans text-lg text-black font-extralight">
        This is what we got you for today.
        </p>
        <div className="flex items-center w-full gap-8 mt-4 ml-1 justify-evenly">
            <div className="flex gap-3">
                <div className="">
                <img src="./pi.png" alt="" className="object-contain" width={50} height={40} />
                </div>
                <div className="flex-col items-center justify-center gap-1">
                    <p className="font-serif text-lg font-medium text-black">Articles</p>
                    <p className="text-black text-[12px] font-extralight font-sans">4,950 New Updates</p>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="">
                <img src="./noti.png" alt="" className="object-contain" width={50} height={40} />
                </div>
                <div className="flex-col items-center justify-center gap-1">
                    <p className="font-serif text-lg font-medium text-black">Categories</p>
                    <p className="text-black text-[12px] font-extralight font-sans">10,275 New Updates</p>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="">
                <img src="./ci.png" alt="" className="object-contain" width={50} height={40} />
                </div>
                <div className="flex-col items-center justify-center gap-1">
                    <p className="font-serif text-lg font-medium text-black">Stories</p>
                    <p className="text-black text-[12px] font-extralight font-sans">4,193 New Updates</p>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="">
                <img src="./ad.png" alt="" className="object-contain" width={50} height={40} />
                </div>
                <div className="flex-col items-center justify-center gap-1">
                    <p className="font-serif text-lg font-medium text-black">Advertisements</p>
                    <p className="text-black text-[12px] font-extralight font-sans">928 New Updates</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category