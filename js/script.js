let servicePricesBlockHead = document.querySelectorAll('.service-prices-block__head');
let servicePricesBlockBtnShow = document.querySelectorAll('.service-prices-block__btn-show');
let servicePricesBlockBody = document.querySelectorAll('.service-prices-block__body');

for (let i = 0; i < servicePricesBlockHead.length; i++) {
	servicePricesBlockHead[i].onclick = function (e) {
		if (e.target.closest('.service-prices-block__btn-show')) {
			for (let j = 0; j < servicePricesBlockHead.length; j++) {
				if (servicePricesBlockBody[j] != this.nextElementSibling) {
					servicePricesBlockHead[j].classList.remove('active-head');
					servicePricesBlockBody[j].classList.remove('opened');
					servicePricesBlockBody[j].style.maxHeight = 0;
					servicePricesBlockBtnShow[j].classList.remove('active-btn-show');
				}
			}
			if (this.nextElementSibling.classList.contains('opened')) {
				this.nextElementSibling.classList.remove('opened');
				this.nextElementSibling.style.maxHeight = 0;
				this.classList.remove('active-head');
			} else {
				this.nextElementSibling.classList.add('opened');
				this.classList.add('active-head');
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
			}
			servicePricesBlockBtnShow[i].classList.toggle('active-btn-show');
		}
	}
}
;
let faqBlockHead = document.querySelectorAll('.faq-block__head');
let faqBlockBtnShow = document.querySelectorAll('.faq-block__btn-show');
let faqBlockBody = document.querySelectorAll('.faq-block__body');

for (let i = 0; i < faqBlockHead.length; i++) {
	faqBlockHead[i].onclick = function (e) {
		if (e.target.closest('.faq-block__btn-show')) {
			for (let j = 0; j < faqBlockHead.length; j++) {
				if (faqBlockBody[j] != this.nextElementSibling) {
					faqBlockBody[j].classList.remove('opened');
					faqBlockBody[j].style.maxHeight = 0;
					faqBlockBtnShow[j].classList.remove('active-btn-show');
				}
			}
			if (this.nextElementSibling.classList.contains('opened')) {
				this.nextElementSibling.classList.remove('opened');
				this.nextElementSibling.style.maxHeight = 0;
			} else {
				this.nextElementSibling.classList.add('opened');
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
			}
			faqBlockBtnShow[i].classList.toggle('active-btn-show');
		}
	}
};
let reviewsSlider = new Swiper('.reviews-slider', {
	speed: 600,
	slidesPerView: 1,
	navigation: {
		nextEl: '.reviews-slider__btn-next',
		prevEl: '.reviews-slider__btn-prev'
	},
	pagination: {
		el: '.reviews-slider__pagination',
		type: 'fraction',
	},
	autoHeight: true,
	spaceBetween: 40,
});

function reinitSwiper(swiper) {
	swiper.update();
}
window.onload = function () {
	reinitSwiper(reviewsSlider);
}
;