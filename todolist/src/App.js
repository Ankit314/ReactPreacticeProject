import logo from './logo.svg';
import './App.css';
import ListItem from './component/list/ListItem';
import { useState } from 'react';

function App() {
  let [todoList, setTodoList]= useState([]);
  let saveTodoList=(event)=>{

    

    let todoName = event.target.todoName.value;
    if(!todoList.includes(todoName)){
      let FinalTodoList=[...todoList,todoName]
      setTodoList(FinalTodoList)

    }
    else{
      alert('To Do allready Added');
    }
    alert(todoName)
    event.preventDefault()
    
  }
  let list= todoList.map((value, index)=>{
    return(
      <ListItem value={value} key={index} indexNumber={index} todoList={todoList} setTodoList={setTodoList}/>

    );

  });

  return (
    // <div className="App">
    //   <div className='container mx-auto px-4 py-5'>
    //     <div className='box-content m-auto py-5 h-28 border-5 bg-green-500'>
    //       <form className='bg-red-200 h-[100%] w-[100%] p-4 shadow' onSubmit={saveTodoList}>
    //         <label>Please Enter Your Details</label>
            
    //         <input className='rounded m-4 border-2' type='text' name='todoName'></input>
    //         <button className='bg-blue-900 text-[white] rounded '>Submit</button>
    //       </form>
    //     </div>
    //     <div>
    //       {list}
    //     </div>


    //   </div>
       
    // </div>
    <div className="App min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="container mx-auto p-6">
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
      <form
        className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 shadow-md"
        onSubmit={saveTodoList}
      >
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Enter Your Details
        </h2>

        <label className="block text-sm font-medium text-gray-100 mb-2">
          Details
        </label>
        <input
          className="w-full rounded-lg border-2 border-green-700 p-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          type="text"
          name="todoName"
          placeholder="Enter your details"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-800 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>

    <div className="mt-6">
      {list && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Your List:</h3>
          <div className="text-gray-700">{list}</div>
        </div>
      )}
    </div>
  </div>
</div>

  );
}

export default App;
