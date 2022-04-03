import { useEffect, useState } from "react";

const ValidationPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailDirty, setEmailDirty] = useState(false);
	const [passwordDirty, setPasswordDirty] = useState(false);
	const [emailError, setEmailError] = useState('Email ne peut pas être vide !');
	const [passwordError, setPasswordError] = useState('Mot de passe ne peut pas être vide !');

	const [formValid, setFormValid] = useState(false);

	useEffect(() => {
		if (emailError || passwordError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}

	}, [emailError, passwordError])
	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'email' :
				setEmailDirty(true);
				break;
			case 'password' :
				setPasswordDirty(true);
				break;
		}
	}

	const emailHandler = (e) => {
		setEmail(e.target.value);
		if (String(e.target.value)
		.toLowerCase()
		.match(
		  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)) {
			setEmailError('')
		} else {
			setEmailError('Email est incorrect ! ')
		}
	}

	const passwordHandler = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length < 5) {
			setPasswordError('Mot de passe doit contenir plus de 5 chiffres')
		} else {
			setPasswordError('');
		}
	}




	return (
		<div className="validationpage">
			<form className="form">
				<h1>S'inscrire</h1>
				{(emailDirty && emailError )&& <div className="form__inputerror">{emailError}</div> }
				<input onChange = {e => emailHandler(e)} value = {email} className="form__input" onBlur={(e)=> blurHandler(e)} name = 'email' type="text" placeholder = 'Entrez votre adresse mail...' />
				{(passwordDirty && passwordError )&& <div className="form__inputerror" >{passwordError}</div> }
				<input onChange = {e => passwordHandler(e)} value = {password} className="form__input" id = "password" onBlur={(e)=> blurHandler(e)} name = 'password' type="password" placeholder = 'Entrez votre mot de passe...' />
				<button disabled = {!formValid} type = 'submit' >S'inscrire</button>
			</form>
		</div>
	)
}

export default ValidationPage;