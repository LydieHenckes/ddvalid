
import styles from './Modal.module.css';

const Modal = ({active, setActive, children}) => {
	const styleModal = active ? styles.modal + ' '+ styles.active : styles.modal;
	const styleModalContent = active ? styles.modal__content + ' '+ styles.active : styles.modal__content;
	return (
		<div className= {styleModal}
		
				onClick = {() => setActive(false)}
		>
			<div className={styleModalContent}
					onClick = {(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}


export default Modal;

/*
// импортируем утилиту в файл, где будет она использоваться
import classNames from 'classnames';

// затем просто используем в коде:
<div className={classNames(classes.SectionOne, classes.SectionTwo)}></div>

*/