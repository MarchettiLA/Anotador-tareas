import TaskingLogoWhite from "../img/logo-white.png";
import Task from "./Task.jsx"
import "../style/main.css";
import AddButton from "./AddButton.jsx"
import { useEffect, useState } from "react";


function Main() {
    let taskName = ""
    let nroTask = 0;
    let taskList = JSON.parse(localStorage.getItem("task")) || []; // RECUPERANDO DATOS DE LOCAL STORAGE o ASIGNAR ARRAY VACIO
    
    const [tasksNames, setTasksNames] = useState([]);
    const [tasks, setTasks] = useState([]);

// FUNCION QUE CONTROLA COMPORTAMIENTO DEL BOTON DE AGREGAR   /////////////

    const handleClick = (event)=> {
        event.preventDefault();
        newTask();
        
    }
    
    

    const oldTasks = () => {
        taskList.forEach(e=>{
         console.log(e.taskName)
        })
   }

   useEffect(oldTasks)
 
    const newTask = () => {
        const input = document.querySelector(".task-input");
        if (input.value.trim() != "" ){
            taskName =  input.value;
            setTasksNames([...tasksNames, taskName]) // MODIFICANDO ESTADOS
            setTasks([...tasks,<Task/>])    // MODIFICANDO ESTADOS
           // CREANDO OBJ PARA LOCAL STORAGE           
            const taskObj = {
                taskName
            } 
            taskList.push(taskObj)
            localStorage.setItem("task",JSON.stringify(taskList));
            nroTask++;
            input.value = "";} else{
                console.log("ingresa texto")
            }
    }

// FUNCION QUE CONTROLA COMPORTAMIENTO BOTON ELIMINAR  //////////////////

    const handleRemove = (event) =>{
       let taskContainer = event.target.parentElement
       taskContainer.remove();
    }

    
// FUNCION QUE CONTROLA COMPORTAMIENTO CHECK TASK  ////////////////////

    const handleDone = (event) =>{
        const taskContainer = event.target.parentElement;
        taskContainer.classList.toggle("done");
        }

// LOCAL STORAGE

const cargarTareasAnteriores = () =>{
    const data = JSON.parse(localStorage.getItem("task"));
    for(let element of data){
    setTasksNames([...tasksNames, element.taskName]) 
    setTasks([...tasks,<Task/>]) 
    }
    //setTasksNames([...tasksNames, data.taskName]) 
    //setTasks([...tasks,<Task/>]) 

}
 cargarTareasAnteriores();

////////////////////////////////////////////////////////////////////

    return(
        <main>
            <div className="anotador-container">
                <div className="item__logo">
                    <img src={TaskingLogoWhite} alt="Tasking Logo" />
                </div>
                <form className="item__form" onSubmit={handleClick}>
                    <input type="text" className="task-input" id="service" placeholder="Escribe una tarea..." autoComplete="off" />
                   <AddButton handleClick={handleClick}/>
                </form>
                <div className="task__section">
                    <div className="task-container">   
                    {tasks.map((task, i) => ( <Task taskName={tasksNames[i]} key={tasks.indexOf(task)} handleRemove={handleRemove} handleDone={handleDone}/> )   )}
                   
                    </div>
                </div>
            </div>
        </main>
        
    );
}

export default Main