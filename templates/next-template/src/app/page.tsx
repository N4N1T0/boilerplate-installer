import { personalizationFeatures } from '@/constants/site-data'

export default function Home() {
	return (
		<section className='py-10 bg-gray-50 sm:py-16 lg:py-24'>
			<div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
				<div className='max-w-2xl mx-auto text-center'>
					<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
						Welcome to Nanito's Personalized Next.js Boilerplate
					</h2>
					<p className='max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600'>
						Personalization has the following{' '}
						<span className='text-blue-600 font-bold'>Main</span>{' '}
						characteristics:
					</p>
				</div>

				<div className='grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3'>
					{personalizationFeatures.map((feature) => (
						<div
							className='overflow-hidden bg-white rounded shadow'
							key={feature.title}
						>
							<div className='p-8'>
								<div className='flex items-center'>
									<div className='mx-auto text-center tracking-wider'>
										<p className='text-3xl font-semibold text-black'>
											{feature.title}
										</p>
										<p className='mt-px text-gray-600'>{feature.subtitle}</p>
									</div>
								</div>
								<p className='text-base leading-relaxed text-gray-600 mt-7 text-center'>
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
