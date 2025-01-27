import logo from './logo.svg';
import './App.css';
import Category from './component/category/Category';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  let [finalCategory,setfinalCategory ]=useState([]);
  let [finalPro, setfinalPro]=useState([]);
  let [catName, setcatName]=useState("");

  let getCategory =()=>{
    axios.get('https://dummyjson.com/products/category-list').then((res)=>res.data)
    .then((finaLres) =>{
      setfinalCategory(finaLres)
    })
  }
  let getProduct=()=>{
    axios.get('https://dummyjson.com/products').then((proRes)=>proRes.data).then((finalProRes)=>{
      setfinalPro(finalProRes.products)
    })
  }
  useEffect(()=>{
    getProduct();
    getCategory();
  },[]);

  useEffect(()=>{
    if(catName!==""){
      axios.get(`https://dummyjson.com/products/category/${catName}`).then((proRes)=>proRes.data).then((finalProRes)=>{
        setfinalPro(finalProRes.products)
      })

    }
     

  },[catName]);

  let proItem=finalPro.map((products,index)=>{
    return(
      <  ProductItems key={index} pdata={products}/>

    )
  })
  return (
    <div className="App">
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto'>
        
          <h1 className='text-center text[40px] font-bold mb-[30px]'>Our Product</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div>
              {finalCategory.length}
              {finalPro.length}
              <Category finalCategory={finalCategory} setcatName={setcatName} />
            </div>
            <div>
              <div className='grid grid-cols-3 gap-4 text-center'>
                {
           
                finalPro.length>=1 ? proItem :'No Data Found'

                 }
              
              </div>

            </div>
          </div>

        </div>
      </div>

       
    </div>
  );
}

export default App;

function ProductItems({pdata}) {
  console.log(pdata)
  return (
    <div>
      <div className='shadow-lg'>
        <img src={pdata.thumbnail} className='w-[100%] h-[220px]'></img>
        <p>{pdata.title}</p>
        <p> {pdata.brand} </p>

      </div>

    </div>

  );
}
