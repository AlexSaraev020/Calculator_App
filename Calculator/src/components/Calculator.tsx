import { useEffect, useState } from "react"
import { TopBar } from "./phoneComponents/TopBar"
import { buttons } from "./types"

export const Calculator = () => {
    const [value, setValue] = useState<string>('0')
    const operations: string[] = ['%', '÷', 'X', '-', '+', '.']

    const handleCalculator = (symbol: string) => {
        if (symbol === 'AC') {
            setValue('0');
        } else if (symbol === 'DC') {
            setValue(value.slice(0, -1));
        } else if (operations.includes(symbol)) {
            setValue((prevValue) => {
                const lastChar = prevValue.slice(-1);
                if (prevValue === '0' && symbol === '-') {
                    return '-';
                }
                if (operations.includes(symbol)) {
                    if (operations.includes(lastChar) && lastChar !== symbol ) {
                        if(lastChar !== ''){
                            return '0'
                        }
                        console.log('a fost apelat')
                        return prevValue.slice(0, -1) + symbol;
                    }

                    if (!operations.includes(lastChar)) {
                        return prevValue + symbol;
                    }
                }
                return prevValue;
            });
        } else if (symbol === '=') {
            const result = eval(value.replace('X', '*').replace('÷', '/'));
            setValue(String(result));
        } else {
            setValue((prevValue) =>
                prevValue === '0' && symbol !== '.' ? symbol : prevValue + symbol
            );
        }
    }

    useEffect(() => {
        console.log(value);
    }, [value])

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
