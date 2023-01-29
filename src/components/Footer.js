import React from 'react'

const Footer = () => {
	return <div className='my-24 py-24' style={{ backgroundColor: '#f8f8f8' }}>
		<div className='container mx-auto max-w-screen-lg px-5'>
			<div>
			Logo
				<hr className="h-1 my-8 bg-gray-200 border-0 rounded" style={{ backgroundColor: '#2250f4' }} />
			</div>
			<div className="flex justify-between">
				<div>
				İletşime Geçin
				</div>
				<div>
				Linklerimiz
				</div>
			</div>
			<div className='mt-6'>
				<hr className="w-32 h-1 my-8 bg-gray-200 border-0 rounded" style={{ backgroundColor: '#2250f4' }} />
			Copyright © 2023 site adi All rights reserved.
			</div>
		</div>
	</div>
}

export default Footer
