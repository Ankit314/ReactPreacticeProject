import React, { useState } from 'react';
import './list.css';

export default function ListItem({value,indexNumber,todoList,setTodoList }) {

  let [status,setStatus]=useState(false)
  let deleteRow=()=>{
    let finalData=todoList.filter((v,i)=>i!=indexNumber);
    setTodoList(finalData)
    alert(indexNumber)

  }
   let checkStatus=()=>{
    setStatus(!status)

   }
  return (
    // <div> 
    //     <div className='container mx-auto px-4'>
    //         <div className='grid grid-col-1 gap-4 p-4'>
    //             <div className='bg-green-500 w-[100%] rounded flex flex-row justify-between p-4'>
    //                 <div className={(status)? 'completetodo':''} onClick={checkStatus}>{indexNumber+1} {value}</div>

    //                 <div><button className='bg-red-900 w-[50px] p-2 ' onClick={deleteRow}>X</button></div>

    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div>
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 gap-6 p-6">
      <div className="bg-green-500 w-full rounded-lg shadow-lg flex items-center justify-between p-4 hover:bg-green-600 transition duration-300 ease-in-out">
        <div
          className={`${status ? "line-through text-gray-200" : "text-white"} font-semibold text-lg`}
          onClick={checkStatus}
        >
          {indexNumber + 1}. {value}
        </div>
        <button
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          onClick={deleteRow}
        >
          X
        </button>
      </div>
    </div>
  </div>
</div>

  )
}
