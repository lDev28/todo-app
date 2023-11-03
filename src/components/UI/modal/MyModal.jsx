const MyModal = ({ modal, openModal, title, children }) => {
	const openM = () => {
		openModal(false)
	}
	return modal ? (
		<div className='top-0 left-0 right-0 bottom-0 absolute bg-black/[.5] flex justify-center items-center'>
			<div className='bg-white p-5'>
				<div className='text-black flex flex-row justify-between items-center'>
					<h2>{title}</h2>
					<span
						className='bg-red-600 rounded-full w-[25px] h-[25px] cursor-pointer'
						onClick={openM}
					>
						&times;
					</span>
				</div>
				<hr className='m-2' />
				<div>{children}</div>
			</div>
		</div>
	) : (
		''
	)
}

export default MyModal
