import React from 'react'

const MainHeader = () => {
	return (
		<div className="min-w-full flex justify-between items-center py-3.5">
			<div>
				LOGO
			</div>
			<div className='hidden md:block'>
				<ul className='list-none'>
					<li className='inline-block'>Ana Sayfa</li>
					<li className='inline-block pl-2'>Hakkımda</li>
					<li className='inline-block pl-2'>Ürünler</li>
					<li className='inline-block pl-2'>İletişim</li>
				</ul>
			</div>
			<div className='md:hidden'>
				<button className='rounded-xl p-3' style={{ backgroundColor: '#2250f4', color: '#ffffff' }}>Kayıt Ol</button>
			</div>
			<div className='hidden md:block mr-5'>
				<button className='rounded-xl p-3 ' style={{ backgroundColor: '#2250f4', color: '#ffffff' }}>Kayıt Ol</button>
			</div>
			<div className='md:hidden'>
				<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" />
			</div>
		</div>
	)
}

export default MainHeader
