import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center w-full gap-3 mt-3'>
        <div className="font-serif text-xl font-medium text-black">Top Articles</div>
        <div className="flex items-center justify-start w-full gap-8">
            <img src="./a1.png" alt="" className="object-contain cursor-pointer" width={250} height={260} />
            <img src="./a2.png" alt="" className="object-contain cursor-pointer" width={250} height={260} />
            <img src="./a3.png" alt="" className="object-contain cursor-pointer" width={250} height={260} />
        </div>
        <div className="mt-3 font-serif text-xl font-medium text-black">Top Stories</div>
        <div className="flex items-center justify-start w-full gap-8">
            <img src="./s1.png" alt="" className="object-contain cursor-pointer" width={230} height={240} />
            <img src="./s2.png" alt="" className="object-contain cursor-pointer" width={230} height={240} />
            <img src="./s3.png" alt="" className="object-contain cursor-pointer" width={230} height={240} />
            <img src="./s4.png" alt="" className="object-contain cursor-pointer" width={230} height={240} />
        </div>
        <div className="font-serif text-xl font-medium text-black">Advertisements</div>
        <div className="flex items-center justify-start w-full gap-8">
            <img src="./adv1.png" alt="" className="object-contain cursor-pointer" width={285} height={245} />
            <img src="./adv2.png" alt="" className="object-contain cursor-pointer" width={285} height={245} />
            <img src="./adv3.png" alt="" className="object-contain cursor-pointer" width={285} height={245} />
        </div>
    </div>
  )
}

export default Hero