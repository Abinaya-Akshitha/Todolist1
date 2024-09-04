import React,{useState} from "react"

function ToDoList(){
    const[tasks,setTasks]=useState(["eat dinner","take rest","play shuttle"]);
    const[newTask,setNewTask]=useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t => [...t,newTask]);
          setNewTask("");
        }
          
    }
    function delTask(index){
        const updatedTasks =tasks.filter((element,i)=>i!== index) 
         setTasks(updatedTasks)
    }
    function moveupTask(index){
        if(index>0){
            const updatedTasks=[...tasks];
            ///array destructuring
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks);
        }

    }
     function movedownTask(index){
        if(index< tasks.length -1 ){
            const updatedTasks=[...tasks];
            ///array destructuring
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    return(<div className="to-do">
        <h1>To Do List</h1>
        <div>
            <input type="text"
             placeholder="Enter a Task..."
             value={newTask}
             onChange={handleInputChange}
             />
            <button className="addbutton" onClick={addTask}>Add Task
            </button>
         </div>
        <ol>
           {tasks.map((task,index)=><li key={index}>
            <span className="text">{task}</span>
            <button className="deletebutton"
            onClick={()=>delTask(index)}
             >Delete</button>

            <button className="moveupbutton"
            onClick={()=>moveupTask(index)}
             >UP</button>

            <button className="movedownbutton"
            onClick={()=>movedownTask(index)}
             >Down</button>
           </li>
        )}
        </ol>



    </div>)
}
export default ToDoList