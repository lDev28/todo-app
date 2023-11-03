import React from 'react'

const MyInput = ({ ...props }) => {
	return (
		<input
			className='rounded-s-[25px] w-full h-[40px] px-5 p-2 bg-light'
			{...props}
		/>
	)
}

export default MyInput
