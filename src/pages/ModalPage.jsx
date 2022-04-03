import { useState } from "react";
import Modal from "../components/Modal/Modal";


const ModalPage = () => {
	const [modalActive, setModalActive] = useState(false);
	return (
		<div className="modalpage">
			<main>
				<button onClick = {() => setModalActive(true)} className="open-btn">Ouvrir </button>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos laboriosam velit. Nobis temporibus labore, eius eaque quis fuga et aliquam fugiat? Qui necessitatibus dignissimos, a quis aut asperiores ducimus?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos laboriosam velit. Nobis temporibus labore, eius eaque quis fuga et aliquam fugiat? Qui necessitatibus dignissimos, a quis aut asperiores ducimus?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos laboriosam velit. Nobis temporibus labore, eius eaque quis fuga et aliquam fugiat? Qui necessitatibus dignissimos, a quis aut asperiores ducimus?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos laboriosam velit. Nobis temporibus labore, eius eaque quis fuga et aliquam fugiat? Qui necessitatibus dignissimos, a quis aut asperiores ducimus?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos laboriosam velit. Nobis temporibus labore, eius eaque quis fuga et aliquam fugiat? Qui necessitatibus dignissimos, a quis aut asperiores ducimus?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos laboriosam velit. Nobis temporibus labore, eius eaque quis fuga et aliquam fugiat? Qui necessitatibus dignissimos, a quis aut asperiores ducimus?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos laboriosam velit. Nobis temporibus labore, eius eaque quis fuga et aliquam fugiat? Qui necessitatibus dignissimos, a quis aut asperiores ducimus?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos laboriosam velit. Nobis temporibus labore, eius eaque quis fuga et aliquam fugiat? Qui necessitatibus dignissimos, a quis aut asperiores ducimus?</p>
			</main>
			<Modal active = {modalActive} setActive = {setModalActive}>
				<form action="">
					<input type="text" />
					<input type="text" />
					<input type="text" />
					<button>Envoyer</button>
				</form>
			</Modal>
		</div>
		
	)
}

export default ModalPage;