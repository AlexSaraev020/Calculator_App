import { ReactNode } from 'react';
import Radical from '../assets/operations/radical.svg?react';
import Exponent from '../assets/operations/exponent.svg?react';
import Multiplication from '../assets/operations/multiplication.svg?react';
import Minus from '../assets/operations/minus.svg?react';
import Plus from '../assets/operations/plus.svg?react';
import Equal from '../assets/operations/equal.svg?react';
import Divide from '../assets/operations/divide.svg?react';
import Percent from '../assets/operations/percent.svg?react';

export interface ButtonsType {
    id: number;
    symbol: string | undefined;
    icon: ReactNode;
    className: string;
    onClick?: () => void;
    rotate?: boolean;
}

export const buttonsCreate = (rotate: boolean, setRotate: (rotate: boolean) => void): ButtonsType[] => [
    {
        id: 1,
        icon: 'AC',
        symbol: 'AC',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500',
    },
    {
        id: 2,
        icon: 'DC',
        symbol: 'DC',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500',
    },
    {
        id: 3,
        icon: rotate ? <Radical className='w-8 fill-cyanGreen-500' /> : <Percent className='w-8 h-7 fill-cyanGreen-500' />,
        symbol: rotate ? '√' : '%',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500'
    },
    {
        id: 4,
        icon: rotate ? <Exponent className='w-8 h-8 fill-pink-300' /> : <Divide className='w-8 h-8 fill-pink-300' />,
        symbol: rotate ? '**' : '/',
        className: 'shadow-pink-500 hover:shadow-pink-500',
    },
    {
        id: 5,
        icon: '7',
        symbol: '7',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500'
    },
    {
        id: 6,
        icon: '8',
        symbol: '8',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500'
    },
    {
        id: 7,
        icon: '9',
        symbol: '9',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500'
    },
    {
        id: 8,
        icon: rotate ? '(' : <Multiplication className='w-5 h-5 fill-pink-300' />,
        symbol: rotate ? '(' : '*',
        className: 'shadow-pink-500 text-pink-300 hover:shadow-pink-500',
    },
    {
        id: 9,
        icon: '4',
        symbol: '4',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500'
    },
    {
        id: 10,
        icon: '5',
        symbol: '5',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500'
    },
    {
        id: 11,
        icon: '6',
        symbol: '6',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500'
    },
    {
        id: 12,
        icon: rotate ? ')' : <Minus className='w-8 h-8 stroke-pink-300' />,
        symbol: rotate ? ')' : '-',
        className: 'shadow-pink-500 text-pink-300 hover:shadow-pink-500',
    },
    {
        id: 13,
        icon: '1',
        symbol: '1',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500'
    },
    {
        id: 14,
        icon: '2',
        symbol: '2',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500'
    },
    {
        id: 15,
        icon: '3',
        symbol: '3',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500'
    },
    {
        id: 16,
        icon: <Plus className='w-8 h-8 fill-pink-300' />,
        symbol: '+',
        className: 'shadow-pink-500 hover:shadow-pink-500',
    },
    {
        id: 17,
        icon: '.',
        symbol: '.',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500'
    },
    {
        id: 18,
        icon: '0',
        symbol: '0',
        className: 'shadow-cyanGreen-500 text-cyanGreen-500 hover:shadow-cyanGreen-500'
    },
    {
        id: 19,
        icon: (
            <button
                onClick={() => setRotate(!rotate)}
            >
                🗘
            </button>
        ),
        symbol: undefined,
        className: 'transition-all duration-500 ease-in-out hover:rotate-180 shadow-cyanGreen-500 shadow-sm hover:shadow-glow-sm text-cyanGreen-500 hover:shadow-cyanGreen-500',
    },
    {
        id: 20,
        icon: <Equal className='w-8 h-8 fill-pink-300' />,
        symbol: '=',
        className: 'shadow-pink-500 hover:shadow-pink-500',
    }
];
