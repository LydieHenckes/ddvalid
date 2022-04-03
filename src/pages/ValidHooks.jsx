import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
	const [isEmpty, setIsEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(false);
	const [maxLengthError, setMaxLengthError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [formValide, setFormValide] = useState(false);

	useEffect(() => {
		for (const validation in validations) { // пробегаем по всем полям объекта vslidations
			switch (validation) {
				case 'minLength':
					// если длина меньше значения, хранящегося по ключу validation в validations 
					value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
					break;
				case 'isEmpty' : 
					value ? setIsEmpty(false) : setIsEmpty(true);
					break;
				case 'isEmail': 
				if (value.toLowerCase()
							.match(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
						)) {
					setEmailError(false)
				} else {
					setEmailError(true)
				}
					break;
				case 'maxLength': 
					value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
					break;
			}
		}
	}, [value])

	useEffect(() => {
		if (isEmpty || emailError || minLengthError || maxLengthError) {
			setFormValide(false)
		} else {
			setFormValide(true)
		}
	}, [emailError, isEmpty, minLengthError, maxLengthError])

	return {
		isEmpty,
		minLengthError,
		emailError,
		maxLengthError,
		formValide
	}
}

const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setIsDirty] = useState(false);

	const valid = useValidation(value, validations)

	const onChange = (e) => {
		setValue(e.target.value);
	}
	const onBlur = () => {
		setIsDirty(true);
	}
	return {
		value,
		onChange,
		onBlur,
		isDirty,
		...valid
	}
}

const ValidHooks = () => {
	const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true});
	const password = useInput('', {isEmpty: true, minLength: 5, maxLength: 8});
	
	// текст ошибки лучше возвращать из хука
	return (
		<div className="validationpage">
			<form className="form">
				<h1>S'inscrire</h1>
				{(email.isDirty && email.isEmpty) && 
					<div style = {{color: 'red'}}>
						Ne peut pas être vide ! 
					</div>
				}
				{(email.isDirty && email.emailError) && 
					<div style = {{color: 'red'}}>
						Ce n'est pas un adresse mail ! 
					</div>
				}
				{(email.isDirty && email.minLengthError) && 
					<div style = {{color: 'red'}}>
						Doit contenir plus de 3 symboles ! 
					</div>
				}
				<input  onChange={(e) => email.onChange(e)} onBlur = {(e) => email.onBlur(e)} value = {email.value} className="form__input"  name = 'email' type="text" placeholder = 'Entrez votre adresse mail...' />
			
				{(password.isDirty && password.isEmpty) && 
					<div style = {{color: 'red'}}>
						Ne peut pas être vide ! 
					</div>
				}
				{(password.isDirty && password.minLengthError) && 
					<div style = {{color: 'red'}}>
						Doit contenir plus de 5 symboles ! 
					</div>
				}
				{(password.isDirty && password.maxLengthError) && 
					<div style = {{color: 'red'}}>
						Doit contenir pas plus de 8 symboles ! 
					</div>
				}
				<input  onChange={(e) => password.onChange(e)} onBlur = {(e) => password.onBlur(e)} value = {password.value} className="form__input" id = "password"  name = 'password' type="password" placeholder = 'Entrez votre mot de passe...' />
				<button disabled = {!email.formValide || !password.formValide} type = 'submit' >S'inscrire</button>
			</form>
		</div>
	)
}


export default ValidHooks;