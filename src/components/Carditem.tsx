import React from 'react'

type Props = {
    children:React.ReactNode
}

const Carditem = (props: Props) => {
  return (
    <div className='border max-w-sm mx-auto hover:scale-105 transition-all rounded-md shadow-sm'>
        {props.children}
    </div>
  )
}

export default Carditem