import { Delete } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import React,{useState} from 'react'

function Todo() {
 
const[input,setInputvalue]=useState("")
const[tasks,setTask]=useState([])
const[isEditing,setIsEditing]=useState("false")



function handleDelete(e){
  e.preventDefault()
  setTask(tasks.filter(tasks.index)!==false)
}


function handlesubmit(e){
  e.preventDefault();


if(isEditing===false){
  setTask([...tasks,input])
}
else{
 tasks[isEditing]=input;
 setTask(tasks);
 setIsEditing(false);
}
}
function handleEdit(e,idToEdit){
e.preventDefault()
setInputvalue(tasks[idToEdit])
setIsEditing(idToEdit)
}






    // const movies = [
    //     {id:1,name:"KDF"},
    //     {id:2,name:"RRR"},
    //     {id:3,name:"Harry Potter"},
    //     {id:4,name:"Singham"},
    //     {id:5,name:"Bajirao"},
    //     {id:6,name:"Dhoom"},
    //   ]
      
    //   return(
        

    //    <ul>{
      //   movies.map((movie) =>{ 
      //  return <li key={movie.id}>{movie.name}</li>
      //   })
      // movies.map(movie=><li key={movie.id}>{movie.name}</li>)
      // }
      //   </ul>
       
      //   )
    
   return(
    <>
    <h1>To Do List</h1>
    <form onSubmit={handlesubmit}>
    <input type="text" placeholder="Enter Text" value={input}
    onChange={(e=>setInputvalue(e.target.value))}/>
    <button type="Submit">Add</button>

   
   
   
    
    

   
   </form>

    <ul>

      {tasks.map((task,index) => {
        return(
          <li key={index}>{task}
          <a href="" onClick={(e)=>handleDelete(e,index)}>
            <Delete/>
            </a>
            <a href="" onChange={(e)=>handleEdit(e,index)}>
              <EditIcon/>
            </a>
           
            
            </li>

        )
      })}

      
     
    </ul>
   
   
    </> 
    
   )}
  
   

export default Todo;
