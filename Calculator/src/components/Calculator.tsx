import { useEffect, useState } from "react"
import { TopBar } from "./phoneComponents/TopBar"
import { buttonsCreate } from "./types"
import { calculatorFunctionalities } from "./phoneComponents/Actions"

export const Calculator = () => {
    const [value, setValue] = useState<string>('0')
    const [rotate, setRotate] = useState<boolean>(false)
    const handleCalculate = (symbol: string | undefined) => {
        calculatorFunctionalities({ value, setValue, symbol })
    }

    useEffect(() => {
        console.log(value);
    }, [value])


    const buttons = buttonsCreate(rotate, setRotate)

    return (
        <div className='w-full h-full flex items-center justify-center animate-fadeIn transition-all duration-500 '>
            <div className={`relative shadow-glow hover:shadow-glow hover:shadow-white shadow-zinc-400 group scale-125 transition-all duration-500 flex flex-col items-center h-[40rem] w-[20%] border-8 border-black rounded-3xl`}>
                <span className="border scale-125 transition-all duration-500 border-black bg-black w-28 h-4 rounded-br-xl z-10 rounded-bl-xl"></span>
                <span className="absolute scale-125 transition-all duration-500 -right-3 top-24 border-4 border-black h-14 z-10 rounded-md"></span>
                <span className="absolute scale-125 transition-all duration-500 -left-3 top-24 border-4 border-black h-20 z-10 rounded-md"></span>
                <div className='w-full h-full flex flex-col items-center bg-darkBlue-600 absolute rounded-2xl z-0'>
                    <TopBar />
                    <div className="w-full h-full flex flex-col justify-end items-center">
                        <div className={`w-11/12 font-medium ${value.length > 14 ? 'text-2xl' : 'text-4xl'} py-1 px-2 flex justify-end text-white truncate rounded-md`}>
                            {value}
                        </div>
                        <div className="bg-darkBlue-500 grid grid-cols-4 grid-rows-5 text-white h-[75%] w-full rounded-2xl place-items-center">
                            {buttons.map(button => (
                                <button key={button.id} onClick={() => handleCalculate(button.symbol)} className={` w-16 h-16 bg-darkBlue-700 hover:cursor-pointer ${button.className} hover:scale-105 transition-all duration-500 ease-in-out shadow-sm hover:shadow-md text-2xl flex items-center justify-center font-semibold rounded-full `}>
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
