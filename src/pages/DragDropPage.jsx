import { useState } from "react";

const DragDropPage = () => {

	const [drag, setDrag] = useState(false);
	const dragStartHandler = (e) => {
		e.preventDefault();
		setDrag(true);
	}
	const dragLeaveHandler = (e) => {
		e.preventDefault();
		setDrag(false);
	}

	const dropHandler = (e) => {
		e.preventDefault();
		let files = [...e.dataTransfer.files];
		console.log(files);

		const formData = new FormData();
		formData.append('file', files[0])
		//formData.append('userId', )
	//	axios.post('url', formData, options)
		setDrag(false);
	}

	return (
		<div className="dragdropfile">
			{drag
				? <div 
					onDragStart={e => dragStartHandler(e)}
					onDragLeave = {e => dragLeaveHandler(e)}
					onDragOver = {e => dragStartHandler(e)}
					onDrop = {e => dropHandler(e)}
					className="drop-area"
				>Déposer les fichiers ici</div>
				: <div
					onDragStart={e => dragStartHandler(e)}
					onDragLeave = {e => dragLeaveHandler(e)}
					onDragOver = {e => dragStartHandler(e)}
				>Glisser les fichiers ici</div>
			}
		</div>
	)
}


export default DragDropPage;