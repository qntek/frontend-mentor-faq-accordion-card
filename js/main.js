const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
	question.addEventListener('click', (e) => {
		const arrow = e.target.parentElement.querySelector('img');
		const question = e.target.parentElement.querySelector('p');
		const answer = e.target.closest('div').nextElementSibling;
		if (arrow.classList.contains('rotated')) {
			arrow.classList.remove('rotated');
			answer.classList.remove('answer-open');
			answer.classList.add('answer-close');
			question.classList.remove('question-opened');
			return;
		}
		arrow.classList.add('rotated');
		answer.classList.remove('answer-close');
		answer.classList.add('answer-open');
		question.classList.add('question-opened');
	});
});

window.addEventListener('resize', imagesHandler);
imagesHandler();
function imagesHandler() {
    const mainImg = document.querySelector('.img-main');
	const bgImg = document.querySelector('.img-background');
	if (window.innerWidth >= 768) {
		if (mainImg.src != './images/illustration-woman-online-desktop.svg') {
			mainImg.src = './images/illustration-woman-online-desktop.svg';
			bgImg.src = './images/bg-pattern-desktop.svg';
		}
	}
	if (window.innerWidth < 768) {
		if (mainImg.src != './images/illustration-woman-online-mobile.svg') {
			mainImg.src = './images/illustration-woman-online-mobile.svg';
			bgImg.src = './images/bg-pattern-mobile.svg';
		}
	}
}