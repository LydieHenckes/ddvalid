import styled, {createGlobalStyle} from 'styled-components'
import Button from '../components/styled/Button';
import Console from '../components/styled/Console';
import Flex from '../components/styled/Flex';
import Title from '../components/styled/Title';

const SComp = () => {
	return (
		<AppWrapper>
			<Flex justify = {'center'} >
				<Title color = {'green'}>Console cmd 2022</Title>
			</Flex>
			<Flex direction="column" margin={"10px 0"}>
                <Console/>
                <Button  color="green"  align="flex-end">Envoyer</Button>
         </Flex>
		</AppWrapper>
	)
}

const AppWrapper = styled.div `
	width: 100%;
	min-height:  calc(100vh - 50px);
	padding: 2rem;
	background-color: #141414;
	font-family: consolas;
	color: green;
`

export default SComp;

/*
Глобальные стили 
import styled, {createGlobalStyle} from ''styled-components

const Global = createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
`
И потом вызвать перед компонентой приложения
ReactDOM.render (
	<>
	<Global />
	<App />
	</>
)

*/