import React from 'react'

type Props = {
    children: React.ReactNode
}

const Service = (props: Props) => {
  return (
    <div className='p-5 border border-blue-600 transition-all duration-200 hover:bg-blue-500 group rounded-lg py-10  cursor-pointer'>
        <h1 className='text-slate-900 text-center group-hover:text-white tracking-wide font-bold text-xl'>{props.children}</h1>
    </div>
  )
}


export default Service