import React from 'react'

type Props = {
    children: React.ReactNode
    href: string
    
}

const Navitem = (props: Props) => {
  return (
    <li className='text-gray-800 font-sans hover:text-blue-700 transition cursor-pointer'>
   
      <a href={props.href}>
        {props.children}
      </a>

   
  </li>
  )
}

export default Navitem