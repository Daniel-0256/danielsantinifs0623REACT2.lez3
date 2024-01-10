import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import Footer from './components/Footer';
import TVshows from './components/TVshows';
import Index from './components/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
      <MyNav />
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/TVshows' element={<TVshows />}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
