import React, { useEffect, useState } from 'react'
import Signal from '../../assets/signal.svg?react'
import WiFi from '../../assets/wifi.svg?react'
import Battery from '../../assets/battery.svg?react'

interface Time {
    hour: number;
    min: number;
}

export const TopBar = () => {

    const [time, setTime] = useState<Time | undefined>(undefined)
    useEffect(() => {
        setTimeout(() => {
            const date = new Date()
            setTime({ hour: date.getHours(), min: date.getMinutes() })
        }, 1000);
    })


    return (
        <div className='text-white w-11/12'>
            <div className='font-medium flex justify-between'>
                {time?.hour}:{time && time.min < 10 ? `0${time.min}` : time?.min}
                <div className='flex'>
                    <Signal className='w-4 fill-white' />
                    <WiFi className='w-4 fill-white'/>
                    <Battery className='w-4 fill-white'/>
                </div>
            </div>
        </div>
    )
}
