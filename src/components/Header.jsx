import React from 'react'

import { AiOutlineCheckCircle } from 'react-icons/ai'
const Header = () => {
	return (
		<header className='absolute top-0 left-0 w-full bg-light flex justify-center items-center h-[70px] text-4xl z-10'>
			<div className='flex flex-row'>
				TO
				<span className='flex flex-row items-center text-amber'>
					D
					<AiOutlineCheckCircle />
				</span>
			</div>
		</header>
	)
}

export default Header
