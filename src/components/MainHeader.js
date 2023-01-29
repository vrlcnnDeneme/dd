import React from 'react'

const MainHeader = () => {
	return (
		<div className="min-w-full flex justify-between">
			<div>
				LOGO
			</div>
			<div className='hidden md:block'>
				<ul className='list-none'>
					<li className='inline-block'>Ana Sayfa</li>
					<li className='inline-block'>Hakkımda</li>
					<li className='inline-block'>Ürünler</li>
					<li className='inline-block'>İletişim</li>
				</ul>
			</div>
			<div className='md:hidden'>
				<button style={{ backgroundColor: '#2250f4', color: '#ffffff' }}>Kayıt Ol</button>
			</div>
		</div>
	)
}

export default MainHeader
