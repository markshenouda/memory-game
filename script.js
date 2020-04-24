document.addEventListener('DOMContentLoaded', ()=>{
	const cardArray = [
		{
			name: 'camel',
			img: 'camel.jpg'
		},
		{
			name: 'camel',
			img: 'camel.jpg'
		},
		{
			name: 'cat',
			img: 'cat.jpg'
		},
		{
			name: 'cat',
			img: 'cat.jpg'
		},
		{
			name: 'cow',
			img: 'cow.jpg'
		},
		{
			name: 'cow',
			img: 'cow.jpg'
		},
		{
			name: 'dog',
			img: 'dog.jpg'
		},
		{
			name: 'dog',
			img: 'dog.jpg'
		},
		{
			name: 'duck',
			img: 'duck.jpg'
		},
		{
			name: 'duck',
			img: 'duck.jpg'
		},
		{
			name: 'giraffe',
			img: 'giraffe.jpg'
		},
		{
			name: 'giraffe',
			img: 'giraffe.jpg'
		},
		{
			name: 'hamster',
			img: 'hamster.jpg'
		},
		{
			name: 'hamster',
			img: 'hamster.jpg'
		},
		{
			name: 'horse',
			img: 'horse.jpg'
		},
		{
			name: 'horse',
			img: 'horse.jpg'
		},
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	resultDisplay.textContent = 0;
	var cardsChosen = [];
	var cardsChosenId = [];
	var cardsWon = [];


	function checkForMatch(){
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if ((cardsChosen[0] === cardsChosen[1]) && (cardsChosenId[0] != cardsChosenId[1])){
			cards[optionOneId].classList.add('fadeOut');
			cards[optionTwoId].classList.add('fadeOut');
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/card.svg');
			cards[optionTwoId].setAttribute('src', 'images/card.svg');
		}

		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;

		if (cardsWon.length === cardArray.length/2) {
			alert('Congratulations! You win!')
		}
	}




	function createBoard(){
		for(let i = 0; i < cardArray.length; i++){
			var card = document.createElement('img');
			card.setAttribute('src', 'images/card.svg');
			card.classList.add('card');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}



	function flipCard(){
		var cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', 'images/' + cardArray[cardId].img);
		if (cardsChosen.length === 2){
			setTimeout(checkForMatch, '500');
		}
	}



	createBoard();
});