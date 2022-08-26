import React from 'react'

type Props = {
    children: React.ReactNode,
    title:string,
    className?:string,
}

const Pricing = (props: Props) => {
  return (
    <div className={`p-2 px-6 border border-blue-500 rounded-md max-h-fit mx-auto  max-w-xs  ${props.className}`}>
        <h1 className='text-slate-900 text-xl font-semibold py-3'>{props.title}</h1>
        {props.children}
    </div>
  )
}

export default Pricing