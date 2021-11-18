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
let onlyLetterRus = document.querySelectorAll('.only-letter-rus');
let telMask = document.querySelectorAll('.tel-mask');
let onlyLetterEng = document.querySelectorAll('.only-letter-eng');

for (let i = 0; i < onlyLetterRus.length; i++) {
	onlyLetterRus[i].addEventListener('keyup', function () {
		this.value = this.value.replace(/[\w]/g, '');
	});
}
for (let i = 0; i < onlyLetterEng.length; i++) {
	onlyLetterEng[i].addEventListener('keyup', function () {
		this.value = this.value.replace(/[а-яё]/ig, '');
	});
}
for (let i = 0; i < telMask.length; i++) {
	telMask[i].addEventListener("input", mask, false);
}
function setCursorPosition(pos, elem) {
	elem.focus();
	if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
	else if (elem.createTextRange) {
		var range = elem.createTextRange();
		range.collapse(true);
		range.moveEnd("character", pos);
		range.moveStart("character", pos);
		range.select()
	}
}
function mask(event) {
	var matrix = this.defaultValue,
		i = 0,
		def = matrix.replace(/\D/g, ""),
		val = this.value.replace(/\D/g, "");
	def.length >= val.length && (val = def);
	matrix = matrix.replace(/[_\d]/g, function (a) {
		return val.charAt(i++) || "_"
	});
	this.value = matrix;
	i = matrix.lastIndexOf(val.substr(-1));
	i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
	setCursorPosition(i, this)
};