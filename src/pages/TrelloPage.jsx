import { useState } from "react";

const TrelloPage = () => {
	const [boards, setBoards] = useState([
		{id:1, title: 'A faire', items: [{id: 1, title: 'Faire les courses'}, {id: 2, title: 'Sortir la poubelle'}, {id: 3, title: 'Envoier le message aux parents'}]},
		{id:2, title: 'A contrôler', items: [{id: 4, title: 'Dévoirs enfants'}, {id: 5, title: 'Code de drag end drop'}, {id: 6, title: 'Retour de la préfécture'}]},
		{id:3, title: 'Fait', items: [{id: 7, title: 'Prendre RDV médecin'}, {id: 8, title: 'Téléphoner au collège'}, {id: 9, title: 'Revoir le code'}]},
	]);

	const [currentBoard, setCurrentBoard] = useState(null);
	const [currentItem, setCurrentItem] = useState(null);

	const dragOverHandler = (e, board, item) => {
		e.preventDefault();
		if (e.target.className ==='item') {
			e.target.style.boxShadow = '0 2px 1px gray'
		}
	}
	const dragLeaveHandler = (e, board, item) => {
		e.target.style.boxShadow = 'none'
	}
	const dragStartHandler = (e, board, item) => {
		setCurrentBoard(board);
		setCurrentItem(item);
	}
	const dragEndHandler = (e) => {
		e.target.style.boxShadow = 'none'
	}
	const dropHandler = (e, board, item) => {
		e.preventDefault();
		const currentIndex = currentBoard.items.indexOf(currentItem);
		currentBoard.items.splice(currentIndex, 1);
		const dropIndex = board.items.indexOf(item);
		board.items.splice(dropIndex +1, 0, currentItem);
		setBoards(boards.map(b => {
			if (b.id === board.id) {
				return board;
			}
			if (b.id === currentBoard.id) {
				return currentBoard;
			}
			return b;
		}))

	}

	const dropCardHandler = (e, board) => {
		board.items.push(currentItem);
		const currentIndex = currentBoard.items.indexOf(currentItem);
		currentBoard.items.splice(currentIndex, 1);
		setBoards(boards.map(b => {
			if (b.id === board.id) {
				return board;
			}
			if (b.id === currentBoard.id) {
				return currentBoard;
			}
			return b;
		}))
	} 

	return (
		<div className="apptrello">
			{boards.map(board => 
				<div  key = {board.id} 
						onDragOver = {(e) => dragOverHandler(e, board)}
						onDrop = {(e) => dropCardHandler(e, board)}
						className="board">
					<div className="board__title">
						{board.title}
					</div>
					{board.items.map(item => 
						<div 
							onDragOver = {(e) => dragOverHandler(e, board, item)}
							onDragLeave = {(e) => dragLeaveHandler(e)}
							onDragStart = {(e) => dragStartHandler(e, board, item)}
							onDragEnd = {(e) => dragEndHandler(e)}
							onDrop = {(e) => dropHandler(e, board, item)}
							draggable = {true}
							key = {item.id} 
							className="item"
						>
							{item.title}
						</div>
					)}
				</div>
			)}
		</div>
	)
}


export default TrelloPage;