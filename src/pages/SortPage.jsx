import { useState } from "react";


const SortPage = () => {

	const [cardList, setCardList] = useState([
		{id: 1, order: 3, text: 'Carte 3'},
		{id: 2, order: 1, text: 'Carte 1'},
		{id: 3, order: 2, text: 'Carte 2'},
		{id: 4, order: 4, text: 'Carte 4'},
	]);
	const [currentCard, setCurrentCard] = useState(null)
	
	
	const dragStartHandler = (e, card) => {
		console.log('drag', card);
		setCurrentCard(card);
		console.log('currentCard', currentCard);
	}
	const dragLeaveHandler = (e) => {
		e.target.style.background = 'white';
	}
	//(e: DragEvent<HTMLDivElement>)
	const dragEndHandler = (e) => {
		console.log('ici')
		e.target.style.background = 'white';
	}
	const dragOverHandler = (e) => {
		e.preventDefault();
		e.target.style.background = 'lightgray';
	}
	const dropHandler = (e, card) => {
		e.preventDefault();
		console.log('drop', card);
		setCardList(cardList.sort(sortCards).map(c => {
			if (c.id === card.id) {
				return {...c, order: currentCard.order}
			}
			if (c.id === currentCard.id) {
				return {...c, order: card.order}
			}
			return c
		}))
		e.target.style.background = 'white'
	}

	const sortCards = (a, b) => {
		if (a.order > b.order) {
			return 1;
		} else {
			return -1;
		}
	}

	return (
		<div className="cards">
			{cardList.map((card) => 
				<div 
					onDragStart={(e) => {dragStartHandler(e, card)}}
					onDragLeave = {(e) => {dragLeaveHandler(e, card)}}
					onDragEnd = {(e) => {dragEndHandler(e, card)}}
					onDragOver = {(e) => {dragOverHandler(e, card)}}
					onDrop = {(e) => {dropHandler(e, card)}}
					draggable = {true}
					key = {card.id}
					className="card">
					{card.text}
				</div>
			)}
		</div>
	)
}


export default SortPage;


	// onDragStart - quand on a pris la carte
	// onDragLeave - если вышли за пределы другой карточки
	// onDragEnd eсли отпустили
	// onDragOver если находимся над другим объектом
	// onDrop eсли отпустили карточку и должно произойти какое-то действие
	