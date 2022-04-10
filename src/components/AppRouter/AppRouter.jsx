import {Routes, Route} from 'react-router-dom';
import DragDropPage from '../../pages/DragDropPage';
import ModalPage from '../../pages/ModalPage';
import SComp from '../../pages/SComp';
import SortPage from '../../pages/SortPage';
import TrelloPage from '../../pages/TrelloPage';
import ValidationPage from '../../pages/ValidationPage';
import ValidHooks from '../../pages/ValidHooks';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" end element={<SortPage />} />
			<Route path="/trello" end element={<TrelloPage />} />
			<Route path="/drag" end element={<DragDropPage />} />            
			<Route path="/modal" end element={<ModalPage />} />            
			<Route path="/validation" end element={<ValidationPage />} />            
			<Route path="/validhooks" end element={<ValidHooks />} />            
			<Route path="/scomp" end element={<SComp />} />
		</Routes>
	)
}


export default AppRouter;