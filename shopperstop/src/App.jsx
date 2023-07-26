// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Multiproduct from './components/Multiproduct';
import Singleproduct from './components/Singleproduct';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route exact path='/single-product/:id' element={<Singleproduct />} />
        <Route exact path='/multi-product' element={<Multiproduct />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
