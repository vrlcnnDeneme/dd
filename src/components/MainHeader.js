import React from 'react'

const MainHeader = () => {
	return (
		<div className="min-w-full">
			<div>
				LOGO
			</div>
			<div className='hidden md:block'>
				Ana sayfa
			</div>
			<div className='md:hidden'>
				<button style={{ backgroundColor: '#2250f4', color: '#ffffff' }}>Kayıt Ol</button>
			</div>
		</div>
	)
}

export default MainHeader
