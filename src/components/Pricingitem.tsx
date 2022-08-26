import React from 'react'

type Props = {
    children: React.ReactNode,

}





const Pricingitem = (props: Props) => {

    return (


        <ul className=' list-disc list-inside'>
            {props.children}
        </ul>

    )
}

export default Pricingitem