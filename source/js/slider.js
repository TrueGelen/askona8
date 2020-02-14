
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
})