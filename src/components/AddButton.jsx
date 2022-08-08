import "../style/addButton.css";

function AddButton({handleClick}){
    return(
        <button onClick={handleClick} className="addButton"><span>Agregar</span><i className="fa-solid fa-plus"></i></button>
    )
}

export default AddButton