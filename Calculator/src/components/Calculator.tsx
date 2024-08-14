import { useState } from "react"
import { TopBar } from "./phoneComponents/TopBar"
import { buttonsCreate } from "./types"
import { calculatorFunctionalities } from "./phoneComponents/Actions"

export const Calculator = () => {
    const [value, setValue] = useState<string>('0')
    const [rotate, setRotate] = useState<boolean>(false)
    const handleCalculate = (symbol: string | undefined) => {
        calculatorFunctionalities({ value, setValue, symbol })
    }

    const buttons = buttonsCreate(rotate, setRotate)

    return (
        <div className='w-full h-full flex items-center justify-center animate-fadeIn transition-all duration-500 '>
            <div className={`relative group shadow-lg shadow-zinc-700 transition-all duration-500 flex flex-col items-center min-h-[80%] sm:min-h-[70%] md:min-h-[80%] lg:min-h-[80%] xl:min-h-[75%] 2xl:min-h-[90%] w-11/12 sm:w-6/12 md:w-7/12 lg:w-[30%] xl:w-3/12 2xl:w-[30%] border-8 border-black rounded-3xl`}>
                <span className="border transition-all duration-500 border-black bg-black w-28 h-4 rounded-br-xl z-10 rounded-bl-xl"></span>
                <span className="absolute transition-all duration-500 -right-3 top-24 border-4 border-black h-14 z-10 rounded-md"></span>
                <span className="absolute transition-all duration-500 -left-3 top-24 border-4 border-black h-20 z-10 rounded-md"></span>
                <div className='w-full h-full flex flex-col items-center bg-darkBlue-600 absolute rounded-2xl z-0'>
                    <TopBar />
                    <div className="w-full h-full flex flex-col justify-end items-center">
                        <div className={`w-11/12 font-medium ${value.length > 14 ? 'text-2xl sm:text-4xl' : 'text-4xl sm:text-6xl'} py-1 px-2 flex justify-end text-white truncate rounded-md`}>
                            {value}
                        </div>
                        <div className="bg-darkBlue-500 grid grid-cols-4 grid-rows-5 text-white h-[75%] w-full rounded-2xl place-items-center">
                            {buttons.map(button => (
                                <button key={button.id} onClick={() => button.symbol===undefined ? setRotate(!rotate) : handleCalculate(button.symbol)} className={` w-5/6 h-5/6 bg-darkBlue-700 hover:cursor-pointer ${button.className} hover:scale-105 transition-all duration-500 ease-in-out shadow-sm hover:shadow-md text-3xl flex items-center justify-center font-semibold rounded-full `}>
                                    {button.icon}
                                </button>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
