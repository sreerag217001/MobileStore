
import './App.css';
import Gallery from './Pages/Gallery';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Footer/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>



    </div>
  );
}

export default App;
