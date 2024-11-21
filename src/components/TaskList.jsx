import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";


const TasksList = () => {
    //Accedemos al estado de las tareas mediante useSelector
    const taskState = useSelector(state => state.tasks);
    console.log(taskState)
    
    //Agrgamos el acceso al dispach 
    const dispach = useDispatch();
    //Metodo para manejar el evento delete
    const handleDelete = (id) =>{
        dispach(deleteTask(id));
  
    }
  return (
    <div>
        <header>
            <h1>Task {taskState.tasks.length}</h1>
            <Link to="/create-task">Create Task</Link>
        </header>
      {
        taskState.tasks.map(task =>(
            <div key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={()=> handleDelete(task.id)}>Delete</button>
              <Link to={`/edit-task/${task.id}`}>Edit</Link>
            </div>
        ))
      }
    </div>
  )
}

export default TasksList