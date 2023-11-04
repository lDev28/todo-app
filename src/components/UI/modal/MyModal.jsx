import { AiOutlineCloseCircle } from 'react-icons/ai'
const MyModal = ({ modal, openModal, title, children }) => {
	const openM = () => {
		openModal(false)
	}
	const handleClick = (e) => {
		e.stopPropagation()
		openM()
	}
	return modal ? (
		<div className='top-0 left-0 right-0 bottom-0 absolute flex justify-center items-center'>
			<div className='z-[2] bg-white p-5 box-border rounded-[25px]'>
				<div className='text-black flex flex-row justify-between items-center'>
					<h2 className='text-black text-2xl'>{title}</h2>
					<span
						className='text-2xl text-amber cursor-pointer'
						onClick={openM}
					>
						<AiOutlineCloseCircle />
					</span>
				</div>
				<hr className='m-2 border-blue' />
				<div>{children}</div>
			</div>

			<div
				onClick={handleClick}
				className='top-0 left-0 right-0 bottom-0 absolute bg-black/[.5]'
			></div>
		</div>
	) : (
		''
	)
}

export default MyModal
