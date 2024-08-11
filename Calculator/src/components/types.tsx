import { ReactNode } from 'react';
import Radical from '../assets/operations/radical.svg?react';
import Exponent from '../assets/operations/exponent.svg?react'
import Pi from '../assets/operations/pi.svg?react'
import Multiplication from '../assets/operations/multiplication.svg?react'
import Minus from '../assets/operations/minus.svg?react'
import Plus from '../assets/operations/plus.svg?react'
import Equal from '../assets/operations/equal.svg?react'
import Divide from '../assets/operations/divide.svg?react'
import Percent from '../assets/operations/percent.svg?react'

export interface ButtonsType {
    id: number;
    symbol: string;
    className: string;
    icon: ReactNode;
}

export const buttonsCreate = (rotate: boolean): ButtonsType[] => [
    {
        id: 1,
        icon: 'AC',
        symbol: 'AC',
        className: 'bg-gray-500 w-16 h-16',
    },
    {
        id: 2,
        icon: 'DC',
        symbol: 'DC',
        className: 'bg-gray-500 w-16 h-16',
    },
    {
        id: 3,
        icon: rotate ? <Radical className='w-8 fill-white' /> : <Percent className='w-8 h-7 fill-white'/>,
        symbol: rotate ? '√' : '%',
        className: 'bg-orange-500 w-16 h-16',
    },
    {
        id: 4,
        icon: rotate ? <Exponent className='w-8 h-8 fill-white' /> : <Divide className='w-8 h-8 fill-white' />,
        symbol: rotate ? '**' : '/',
        className: 'bg-orange-500 w-16 h-16',
    },
    {
        id: 5,
        icon: '7',
        symbol: '7',
        className: 'bg-zinc-900 w-16 h-16',
    },
    {
        id: 6,
        icon: '8',
        symbol: '8',
        className: 'bg-zinc-900 w-16 h-16',
    },
    {
        id: 7,
        icon: '9',
        symbol: '9',
        className: 'bg-zinc-900 w-16 h-16',
    },
    {
        id: 8,
        icon: rotate ? <Pi className='w-8 h-8 fill-white' /> : <Multiplication className='w-5 h-5 fill-white' />,
        symbol: rotate ? '3.14159' : 'X',
        className: 'bg-orange-500 w-16 h-16',
    },
    {
        id: 9,
        icon: '4',
        symbol: '4',
        className: 'bg-zinc-900 w-16 h-16',
    },
    {
        id: 10,
        icon: '5',
        symbol: '5',
        className: 'bg-zinc-900 w-16 h-16',
    },
    {
        id: 11,
        icon: '6',
        symbol: '6',
        className: 'bg-zinc-900 w-16 h-16',
    },
    {
        id: 12,
        icon: <Minus className='w-8 h-8 stroke-white'/>,
        symbol: '-',
        className: 'bg-orange-500 w-16 h-16',
    },
    {
        id: 13,
        icon: '1',
        symbol: '1',
        className: 'bg-zinc-900 w-16 h-16',
    },
    {
        id: 14,
        icon: '2',
        symbol: '2',
        className: 'bg-zinc-900 w-16 h-16',
    },
    {
        id: 15,
        icon: '3',
        symbol: '3',
        className: 'bg-zinc-900 w-16 h-16',
    },
    {
        id: 16,
        icon: <Plus className='w-8 h-8 fill-white'/>,
        symbol: '+',
        className: 'bg-orange-500 w-16 h-16',
    },
    {
        id: 17,
        icon: '.',
        symbol: '.',
        className: 'bg-orange-500 w-16 h-16',
    },
    {
        id: 18,
        icon: '0',
        symbol: '0',
        className: 'bg-zinc-900 w-16 h-16',
    },
    {
        id: 19,
        icon: <Equal className='w-8 h-8 fill-white'/>,
        symbol: '=',
        className: 'bg-orange-500 w-16 h-16',
    },
];
