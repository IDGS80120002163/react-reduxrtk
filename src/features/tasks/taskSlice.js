import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: 1,
            title: "Task 1",
            description: "This is a task description",
        },
        {
            id: 2,
            title: "Task 2",
            description: "This is another task description",
        }
    ]
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        //Agregar tarea
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        //Editar tarea
        editTask: (state, action) => {
            const {id, title, description} = action.payload;
            const foundTask = state.find(task => task.id = id)
            if(foundTask){
                foundTask.title = title;
                foundTask.description = description;
            }
        },
        //Eliminar tarea
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload);
            if (taskFound){
                state.splice(state.indexOf(taskFound), 1);
            }
        },
    }
})

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;