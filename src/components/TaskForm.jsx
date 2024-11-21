import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  
  //Agregamos un estado para guardar los datos del formulario
  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  //Agregamos el acceso al dispatch de Redux
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const tasks = useSelector(state => state.tasks);

  //Agregamos un useEffect
  useEffect(() => {
    if(params.id){
        setTask(tasks.find((task) => task.id))
    }
  }, [])

  const handleChange = e => {
    setTask({
        ...task,
        [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (params.id){
        dispatch(editTask(task));
    }
    else {
        dispatch(addTask({
            ...task,
            id: uuid()
        })
        );
    }    
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            value={task.title}
            onChange={handleChange}
        />
        <textarea 
            name="description" 
            placeholder="Description" 
            value={task.description}
            onChange={handleChange}>
        </textarea>
        <button>Save</button>
    </form>
  )
}

export default TaskForm
