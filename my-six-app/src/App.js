import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './component/home/Home';
import About from './component/about/About';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Slider from './component/slider/Slider';
import Service from './component/service/Service';
 

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
     <BrowserRouter>
     <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='service' element={<Service/>}/>
       
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
