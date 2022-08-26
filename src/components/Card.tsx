import React from 'react'

type Props = {
  children:React.ReactNode
}

const Card = (props: Props) => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-3 gap-8'>
      {props.children}
    </div>
  )
}

export default Card