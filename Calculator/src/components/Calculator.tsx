import { TopBar } from "./phoneComponents/TopBar"
//eval e functia


export const Calculator = () => {

    const buttons = [
        { id: 1, symbol: 'AC', value: 'AC', className: 'bg-gray-500 w-14 h-14' },
        { id: 2, symbol: '+/-', value: 'AC', className: 'bg-gray-500 w-14 h-14' },
        { id: 3, symbol: '%', value: 'AC', className: 'bg-gray-500 w-14 h-14' },
        { id: 4, symbol: '÷', value: 'AC', className: 'bg-orange-500 w-14 h-14' },
        { id: 5, symbol: 7, value: 'AC', className: 'bg-zinc-900 w-14 h-14' },
        { id: 6, symbol: 8, value: 'AC', className: 'bg-zinc-900 w-14 h-14' },
        { id: 7, symbol: 9, value: 'AC', className: 'bg-zinc-900 w-14 h-14' },
        { id: 8, symbol: 'X', value: 'AC', className: 'bg-orange-500 w-14 h-14' },
        { id: 9, symbol: 4, value: 'AC', className: 'bg-zinc-900 w-14 h-14' },
        { id: 10, symbol: 5, value: 'AC', className: 'bg-zinc-900 w-14 h-14' },
        { id: 11, symbol: 6, value: 'AC', className: 'bg-zinc-900 w-14 h-14' },
        { id: 12, symbol: '-', value: 'AC', className: 'bg-orange-500 w-14 h-14' },
        { id: 13, symbol: 1, value: 'AC', className: 'bg-zinc-900 w-14 h-14' },
        { id: 14, symbol: 2, value: 'AC', className: 'bg-zinc-900 w-14 h-14' },
        { id: 15, symbol: 3, value: 'AC', className: 'bg-zinc-900 w-14 h-14' },
        { id: 16, symbol: '+', value: 'AC', className: 'bg-orange-500 w-14 h-14' },
        { id: 17, symbol: 0, value: 'AC', className: 'bg-zinc-900 w-32 h-14 col-span-2 flex justify-start' },
        { id: 18, symbol: ',', value: 'AC', className: 'bg-orange-500 w-14 h-14' },
        { id: 19, symbol: '=', value: 'AC', className: 'bg-orange-500 w-14 h-14' },
    ]

    return (
        <div className='w-full h-full flex items-center justify-center animate-fadeIn transition-all duration-500 '>
            <div className="relative shadow-glow hover:shadow-glow hover:shadow-white shadow-zinc-400 group hover:scale-110 transition-all duration-500 flex flex-col items-center h-[35rem] w-2/12 border-8 border-black rounded-3xl">
                <span className="border group-hover:scale-110 transition-all duration-500 border-black bg-black w-28 h-4 rounded-br-xl z-10 rounded-bl-xl"></span>
                <span className="absolute group-hover:scale-110 transition-all duration-500 -right-3 top-24 border-4 border-black h-14 z-10 rounded-md"></span>
                <span className="absolute group-hover:scale-110 transition-all duration-500 -left-3 top-24 border-4 border-black h-20 z-10 rounded-md"></span>
                <div className='w-full h-full flex flex-col items-center bg-zinc-900 absolute rounded-2xl z-0'>
                    <TopBar />
                    <div className="w-full h-full flex flex-col justify-end items-center">
                        <div className="w-11/12 font-medium text-2xl py-1 px-2 flex justify-end text-white rounded-md">
                            3242
                        </div>
                        <div className="bg-darkGray-500 grid grid-cols-4 grid-rows-5 text-white h-[75%] w-full rounded-2xl place-items-center">
                            {buttons.map(button => (
                                <input key={button.id} className={`${button.className} rounded-full `} type="button" value={button.symbol} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
