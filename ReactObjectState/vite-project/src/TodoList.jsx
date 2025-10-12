import {useState} from "react"
import {v4 as uuidv4} from 'uuid';

export default  function TodoList(){
    let[todos, setTodos]=useState([{task:"Sample-Task", id:uuidv4(), isDone:false}]);//to pass id we are passing the todo in object , that is array of objects
    let[newTodo, setNewTodo]=useState("");


    let addNewTask = () => {
        // setTodos([...todos, {task: newTodo, id: uuidv4()}]); // Add id to the new todo
        // setNewTodo("");
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone:false}];
        });
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value)
    }

    // let deleteTodo=(id)=>{
    //     setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id != id))
    // }
    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id))
    }
    
    // let upperCaseAll=()=>{
    //     setTodos((prevTodos)=>prevTodos.map((todo)=>{
    //         return{
    //             // to make any changes
    //             ...todo,  task:todo.task.toUpperCase()
    //         }
    //     }))
    // }
       
    // let upperCaseOne = (id) => {
    //     setTodos((prevTodo) => prevTodo.map((todo) => {
    //         if(todo.id === id) {
    //             return {
    //                 ...todo, 
    //                 task: todo.task.toUpperCase()
    //             }
    //         } else {
    //             return todo;
    //         }
    //     }))
    // }
    

    let markAllAsDone=()=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            return{
                // to make any changes
                ...todo,  isDone:true,
            }
        }))
    }




    let markAsDone = (id) => {

        setTodos((prevTodo) => prevTodo.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo, 
                    isDone:true,
                }
            } else {
                return todo;
            }
        }))
    }



    let markAllAsUndone=()=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            return{
                // to make any changes
                ...todo,  isDone:false,
            }
        }))
    }
    return(
        <div className="" >
            <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue}></input>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={addNewTask}>Add task</button>
            <br></br><br></br><hr></hr>
            <h4>Tasks ToDo </h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    {/* //here the arrow function doesn't execute the function rather it creates a copy of function with some argument */}
                    <button onClick={()=>markAsDone(todo.id)}> Mark As Done</button>

                    </li>
                ))}
            </ul>
            <button onClick={markAllAsDone}>Mark All As Done</button>
            <button onClick={markAllAsUndone}>Mark All As Undone</button>

        </div>
    );
}