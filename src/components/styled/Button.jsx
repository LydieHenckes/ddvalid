import styled, {css, keyframes} from 'styled-components'

const rotateAnimation = keyframes`
	0% {
		transform: rotateZ(0deg);
	}
	100% {
		transform: rotateZ(360deg);
	}
`
// чтобы задать компоненту дефолтные пропсы можно сделать так:
/*
const StyledButton = styled.button.attrs(props => ({
    outlined: true,
}))`
	border: none;
	padding: 10px 15px;
	font-size: 18px;
	cursor: pointer;
	// и т,д,
`
--------
const StyledButton = styled.button`
	border: none;
	padding: 10px 15px;
	font-size: 18px;
	cursor: pointer;
	// и т,д,
`
*/


const StyledButton = styled.button.attrs(props => ({
	outlined: true,
}))`
	border: none;
	padding: 10px 15px;
	font-size: 18px;
	cursor: pointer;
	&:focus {
		outline: none;
	}
	&:hover {
    animation: ${rotateAnimation} 1s infinite linear;
}
	align-self: ${props => props.align || 'stretch'};


	//чтобы сгруппировать несколько свойств в зависисости от пропсов
	// для этого неоюходимо импортировать ф-ию css
	${props => props.primary && css`
		color: ${props => props.color || 'white'};
		background: ${props => props.background || 'white'};
	`}

	${props => props.outlined && css`
    color: ${props => props.color || 'white'};
    border: 1px solid ${props => props.color || "white"};
    background: transparent;
`}
`

const LargeButton = styled(StyledButton)`
	font-size: 32px;
`

const Button = (props) => {
	return <StyledButton {...props} />
}
/*
const Button = (props) => {
	return <LargeButton {...props} />
}
*/
export default Button