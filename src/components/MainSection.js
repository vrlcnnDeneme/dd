import React from 'react'

const MainSection = () => {
	return <div>
		<div className='flex justify-center items-center'>
			<hr className="w-32 h-1 my-8 bg-gray-200 border-0 rounded" style={{ backgroundColor: '#2250f4' }} />
			<h2 className='mx-5 text-3xl font-bold'>Ürünlerimiz</h2>
			<hr className="w-32 h-1 my-8 bg-gray-200 border-0 rounded" style={{ backgroundColor: '#2250f4' }} />
		</div>
		<div className='text-center mt-6'>
			<p>
				Enerjinizin düşük ve sağlığınızın kötü olmasının nedenleri genelde çevresel stres etkenleri ve günümüzdeki beslenme alışkanlıklarıdır.
			</p>
			<p>
				Daha mutlu , daha enerjik, daha sağlıklı olmayı hak ediyoruz. Bu konuda yaşam kalitenizi destekleyecek ürünlerimiz ile tanışın.
			</p>
		</div>
	</div>
}

export default MainSection
