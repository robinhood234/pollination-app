"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
	{ href: '/about', label: 'About' },
	{ href: '/product', label: 'Products' },
	{ href: '/gallery', label: 'Gallery' },
	{ href: '/contact', label: 'Contact' },
]

const SmallNav = () => {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (!isOpen) return

		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setIsOpen(false)
		}

		document.addEventListener('keydown', closeOnEscape)
		document.body.style.overflow = 'hidden'

		return () => {
			document.removeEventListener('keydown', closeOnEscape)
			document.body.style.overflow = ''
		}
	}, [isOpen])

	return (
		<>
			<div className='flex items-center justify-between bg-background p-3 shadow-md'>
				<Link href='/' onClick={() => setIsOpen(false)}>
					<span className='font-dancing text-2xl'>Pollination</span>
				</Link>

				<button
					type='button'
					aria-expanded={isOpen}
					aria-controls='mobile-navigation'
					aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
					className='flex h-10 w-10 items-center justify-center'
					onClick={() => setIsOpen((open) => !open)}
				>
					<Image
						src={isOpen ? '/cancel-svgrepo-com.svg' : '/menu-svgrepo-com.svg'}
						alt=''
						width={25}
						height={25}
					/>
				</button>
			</div>

			{isOpen && (
				<>
					<button
						type='button'
						aria-label='Close navigation menu'
						className='fixed inset-0 z-[110] cursor-default bg-black/30'
						onClick={() => setIsOpen(false)}
					/>
					<nav
						id='mobile-navigation'
						aria-label='Mobile navigation'
						className='fixed right-0 top-0 z-[120] flex h-full w-[min(80vw,320px)] flex-col bg-background p-6 shadow-xl'
					>
						<div className='flex items-center justify-between border-b border-[#cad9c8] pb-5'>
							<span className='font-dancing text-2xl'>Pollination</span>
							<button
								type='button'
								aria-label='Close navigation menu'
								className='flex h-10 w-10 items-center justify-center'
								onClick={() => setIsOpen(false)}
							>
								<Image src='/cancel-svgrepo-com.svg' alt='' width={25} height={25} />
							</button>
						</div>

						<div className='flex flex-col gap-2 pt-8'>
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className='border-b border-[#cad9c8] py-4 font-inter text-lg'
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</div>
					</nav>
				</>
			)}
		</>
	)
}

export default SmallNav
