
import { Swiper, Navigation } from 'swiper/js/swiper.esm'

window.addEventListener('load', () => {

	Swiper.use([Navigation]);

	new Swiper('.bigSec .container .bigSec__wrapperSwiper .bigSec__swiper-container', {
		loop: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.bigSec .container .bigSec__wrapperSwiper .bigSec__sliderButtons .bigSec__chevron_left',
			prevEl: '.bigSec .container .bigSec__wrapperSwiper .bigSec__sliderButtons .bigSec__chevron_right',
		}
	})

	new Swiper('.cardSlider .container .cardSlider__wrapperSwiper .cardSlider__swiper-container', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.cardSlider .container .cardSlider__wrapperSwiper .cardSlider__sliderButtons .cardSlider__chevron_left',
			prevEl: '.cardSlider .container .cardSlider__wrapperSwiper .cardSlider__sliderButtons .cardSlider__chevron_right',
		}
	})
})