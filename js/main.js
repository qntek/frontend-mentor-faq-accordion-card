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
            return
        }
		arrow.classList.add('rotated');
        answer.classList.remove('answer-close');
        answer.classList.add('answer-open');
        question.classList.add('question-opened');
	});
});
