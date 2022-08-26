import React from 'react'

type Props = {
    children: React.ReactNode
}

const Navbar = (props: Props) => {
  return (
    <nav className='min-w-full sticky top-0 bg-white bg-opacity-60 backdrop-blur-sm  p-3 flex  '>
        <ul className='flex justify-between items-center space-x-5 mx-auto'>
        {props.children}
        </ul>
    </nav>
  )
}

export default Navbar