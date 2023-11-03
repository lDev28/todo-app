import React from 'react'

const MyButton = ({ children, ...props }) => {
	return (
		<button
			className='h-[40px] w-[120px] rounded-e-[25px] p-2 bg-blue text-white font-bold'
			{...props}
		>
			{children}
		</button>
	)
}

export default MyButton
