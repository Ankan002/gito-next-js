import React from 'react'

interface CounterTabProps{
    count: number | null | undefined;
    text: String | string;
}

const CounterTab = (props: CounterTabProps) => {

  const {count, text} = props

  return (
    <div className='flex-1 flex flex-col items-center justify-center'>
        <h1 className='lg:text-2xl md:text-xl text-lg font-balsamiq font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full text-center px-2'>
            {count}
        </h1>
        <h1 className='lg:text-lg md:text-lg text-sm font-balsamiq font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full text-center px-2'>
            {text}
        </h1>
    </div>
  )
}

export default CounterTab