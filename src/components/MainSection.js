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
		<div>
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
			<div>
				<Carousel
					responsive={responsive}
					ssr={true}
					infinite={true}
				>
					{images.map((image, idx) => {
						return <div key={idx}>
							<img src={image} className="h-80" />
						</div>
					})}

				</Carousel>
			</div>
		</div>
		<div>
			<div className='flex justify-center items-center'>
				<hr className="w-32 h-1 my-8 bg-gray-200 border-0 rounded" style={{ backgroundColor: '#2250f4' }} />
				<h2 className='mx-5 text-3xl font-bold'>İş Modeli</h2>
				<hr className="w-32 h-1 my-8 bg-gray-200 border-0 rounded" style={{ backgroundColor: '#2250f4' }} />
			</div>
			<div className='text-center mt-6'>
				<p>
					<b>Benzersiz iş fırsatı ile kendi şartlarınıza göre gelir elde edin !</b>
				</p>
				<p>
				150&apos;den fazla ülkede yüzbinlerce insanın kendi işlerinde , kendi belirledikleri koşullara göre ek gelir yada finansal özgürlük elde etmelerini sağlayan bir iş modelidir. Başkalarının yaşam kalitelerini kontrol altına almalarına yardımcı olarak gelir elde edin. Hayatınızı dilediğiniz gibi özgürce yaşayın.
				</p>
			</div>
		</div>
		<div>
			<div className='flex justify-center items-center'>
				<hr className="w-32 h-1 my-8 bg-gray-200 border-0 rounded" style={{ backgroundColor: '#2250f4' }} />
				<h2 className='mx-5 text-3xl font-bold'>Etkinlikler</h2>
				<hr className="w-32 h-1 my-8 bg-gray-200 border-0 rounded" style={{ backgroundColor: '#2250f4' }} />
			</div>
			<div className='text-center mt-6'>
				<p>
					<b>Dünyanın dört bir yanında sizin gibi düşünen insanların tutkusuna ortak olun !</b>
				</p>
				<p>
					Kendi işinizi başlatmak için gerekli temel adımlar ile ihtiyacınız olan tüm eğitim desteklerinden faydalanın.
				</p>
			</div>
		</div>

		<div>
			<div className='flex justify-center items-center'>
				<hr className="w-32 h-1 my-8 bg-gray-200 border-0 rounded" style={{ backgroundColor: '#2250f4' }} />
				<h2 className='mx-5 text-3xl font-bold'>Etkinlikler</h2>
				<hr className="w-32 h-1 my-8 bg-gray-200 border-0 rounded" style={{ backgroundColor: '#2250f4' }} />
			</div>
			<div className='text-center mt-6'>
				<p>
					<b>Dünyanın dört bir yanında sizin gibi düşünen insanların tutkusuna ortak olun !</b>
				</p>
				<p>
					One More Üyelik işlemlerinizi aşağıda bulunan son derece basit 3 adımla gerçekleştirebilirsiniz.
					1. Adım : &apos;One More Üyelik Formu&apos; bağlantısına tıklayarak açılan formu doldurup &apos;Kayıt ol&apos; düğmesiyle üyeliğinizi kolaylıkla oluşturabilirsiniz.
					2. Adım : Başarıyla oluşturulan kaydın ardından formda belirtmiş olduğunuz mail adresinizin ön adı
					(@ simgesinden önceki kısım) sistem tarafından kullanıcı adı olarak tanımlanır ve şifreniz aynı mail adresinize gönderilir. (lütfen mail adresinizi doğru yazdığınızdan emin olunuz.)
					3. Adım : Kullanıcı adı ve şifreniz ile birlikte. Siparişlerinizi oluşturulacağınız ve ekibinizin genel kontrolünü sağlayacağınız &apos;One More Back Office&apos; platformuna giriş yaparak faaliyete başlayabilirsiniz.

				</p>
			</div>
		</div>
	</div>
}

export default MainSection
