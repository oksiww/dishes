import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import DishesHeader from '../dishesHeader/DishesHeader';
import DishesMainPage from '../dishesMainPage/DishesMainPage';
import CatalogPage from '../pages/CatalogPage';
import DishesContacts from '../dishesContacts/DishesContacts';

import './app.scss';

function App() {
  

  return (
    <Router>
      <div className="App">
        <DishesHeader />
        <main>
          <Routes>
            <Route path="/" element={<DishesMainPage/>}/>                        
            <Route path="/catalog" element={<CatalogPage/>}/>
            <Route path="/contacts" element={<DishesContacts/>}/>
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
