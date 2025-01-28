import logo from './logo.svg';
import './App.css';
// import Header from './Header';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
       
      <Header email="ankit@gmail.com"/>
      <div className='container d-block'>
        <div className='row'>
          <div className='col-12'> Our courses</div>

        </div>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-3'></div>
          <div className='col-3'></div>
          <div className='col-3'></div>
          
        </div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;


function Card(){
  return(
    <div className='card'>
      <div className='card-header'>Header</div>
      <div className='card-body'>
        lorjkflhidjsfhvjdcn jdksvbeurkjbfdv eudsjfvb
      </div>
       
    </div>
  );
}
