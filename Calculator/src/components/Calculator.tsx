import React from 'react'

//eval e functia


export const Calculator = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="relative group hover:scale-110 transition-all duration-500 flex flex-col items-center h-[35rem] w-2/12 border-4 border-black rounded-2xl">
                <span className="border group-hover:scale-110 transition-all duration-500 border-black bg-black w-20 h-2 rounded-br-xl z-10 rounded-bl-xl"></span>
                <span className="absolute group-hover:scale-110 transition-all duration-500 -right-2 top-14 border-4 border-black h-7 z-10 rounded-md"></span>
                <span className="absolute group-hover:scale-110 transition-all duration-500 -right-2 bottom-36 border-4 border-black h-10 z-10 rounded-md"></span>
                <div className='w-full h-full bg-blue-500 absolute rounded-xl z-0'>
                </div>
            </div>
        </div>
    )
}
