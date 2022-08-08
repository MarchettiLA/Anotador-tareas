import "../style/task.css"

function Task({taskName, handleRemove, handleDone}){
   
    return(
        <div className="task__item__flex-container" id={taskName +"Container"}>
            <input type="checkbox" name="done"  id={taskName} onClick= {handleDone} />
            <label htmlFor={taskName}>{taskName}</label>
            <i onClick= {handleRemove} className="fa-solid fa-trash"></i>
        </div>
    );
}

export default Task;