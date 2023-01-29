import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import PainlessImg from '../assets/images/painless_night_glu.png'

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
}

const images = [
	PainlessImg,
	PainlessImg,
	PainlessImg,
	PainlessImg,
	PainlessImg,
	PainlessImg
]

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
		<Carousel
			responsive={responsive}
			infinite={true}
		>
			{images.map((image, idx) => {
				return <div key={idx}>
					<img src={PainlessImg} />
				</div>
			})}

		</Carousel>;
	</div>
}

export default MainSection
