import { useState } from "react"
import { TopBar } from "./phoneComponents/TopBar"

export const Calculator = () => {
    const [value, setValue] = useState<string>('0')
    const buttons = [
        { id: 1, symbol: 'AC', className: 'bg-gray-500 w-16 h-16' },
        { id: 2, symbol: '+/-', className: 'bg-gray-500 w-16 h-16' },
        { id: 3, symbol: '%', className: 'bg-gray-500 w-16 h-16' },
        { id: 4, symbol: '÷', className: 'bg-orange-500 w-16 h-16' },
        { id: 5, symbol: '7', className: 'bg-zinc-900 w-16 h-16' },
        { id: 6, symbol: '8', className: 'bg-zinc-900 w-16 h-16' },
        { id: 7, symbol: '9', className: 'bg-zinc-900 w-16 h-16' },
        { id: 8, symbol: 'X', className: 'bg-orange-500 w-16 h-16' },
        { id: 9, symbol: '4', className: 'bg-zinc-900 w-16 h-16' },
        { id: 10, symbol: '5', className: 'bg-zinc-900 w-16 h-16' },
        { id: 11, symbol: '6', className: 'bg-zinc-900 w-16 h-16' },
        { id: 12, symbol: '-', className: 'bg-orange-500 w-16 h-16' },
        { id: 13, symbol: '1', className: 'bg-zinc-900 w-16 h-16' },
        { id: 14, symbol: '2', className: 'bg-zinc-900 w-16 h-16' },
        { id: 15, symbol: '3', className: 'bg-zinc-900 w-16 h-16' },
        { id: 16, symbol: '+', className: 'bg-orange-500 w-16 h-16' },
        { id: 17, symbol: '0', className: 'bg-zinc-900 w-36 h-16 col-span-2 flex justify-start' },
        { id: 18, symbol: '.', className: 'bg-orange-500 w-16 h-16' },
        { id: 19, symbol: '=', className: 'bg-orange-500 w-16 h-16' },
    ]

    const handleCalculator = (symbol: string) => {
        if (symbol === 'AC') {
            setValue('0')
        } else if (symbol === '+/-') {
            console.log('fasdas')
        } else if (symbol === '%') {
            setValue(value + symbol)
        } else if (symbol === '÷') {
            setValue(value + symbol)
        } else if (symbol === 'X') {
            setValue(value + symbol)
        } else if (symbol === '-') {
            setValue(value + symbol)
        } else if (symbol === '+') {
            setValue(value + symbol)
        } else if (symbol === ',') {
            setValue(value + symbol)
        } else if (symbol === '=') {
            setValue(eval(value.replace('X', '*').replace('÷', '/')))
        } else {
            setValue((prevValue) =>
                prevValue === '0' && symbol !== '.' ? symbol : prevValue + symbol
            )
        }
    }

    return (
        <div className='w-full h-full flex items-center justify-center animate-fadeIn transition-all duration-500 '>
            <div className="relative shadow-glow hover:shadow-glow hover:shadow-white shadow-zinc-400 group hover:scale-110 transition-all duration-500 flex flex-col items-center h-[40rem] w-[20%] border-8 border-black rounded-3xl">
                <span className="border group-hover:scale-110 transition-all duration-500 border-black bg-black w-28 h-4 rounded-br-xl z-10 rounded-bl-xl"></span>
                <span className="absolute group-hover:scale-110 transition-all duration-500 -right-3 top-24 border-4 border-black h-14 z-10 rounded-md"></span>
                <span className="absolute group-hover:scale-110 transition-all duration-500 -left-3 top-24 border-4 border-black h-20 z-10 rounded-md"></span>
                <div className='w-full h-full flex flex-col items-center bg-zinc-900 absolute rounded-2xl z-0'>
                    <TopBar />
                    <div className="w-full h-full flex flex-col justify-end items-center">
                        <div className="w-11/12 font-medium text-4xl py-1 px-2 flex justify-end text-white rounded-md">
                            {value}
                        </div>
                        <div className="bg-darkGray-500 grid grid-cols-4 grid-rows-5 text-white h-[75%] w-full rounded-2xl place-items-center">
                            {buttons.map(button => (
                                <input key={button.id} onClick={() => handleCalculator(button.symbol)} className={`${button.className} hover:cursor-pointer text-2xl font-semibold rounded-full `} type="button" value={button.symbol} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
