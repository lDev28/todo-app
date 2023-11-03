import React from 'react'

import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
const Header = () => {
	return (
		<div className='w-full bg-light flex justify-center items-center h-[70px] text-4xl'>
			<div className='flex flex-row'>
				TO
				<span className='flex flex-row items-center text-amber'>
					D
					<IoCheckmarkDoneCircleOutline />
				</span>
			</div>
		</div>
	)
}

export default Header
