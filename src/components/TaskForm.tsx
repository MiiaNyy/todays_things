import "../styles/Form.css";
import { useState } from "react";

interface TaskFormProps {
    addNewTask : AddNewTask;
}

function TaskForm( {addNewTask} : TaskFormProps ) {
    const [newTask, setNewTask] = useState( '' );

    return (
        <form onSubmit={ ( e ) => {
            e.preventDefault();
            addNewTask( newTask );
            setNewTask('');
        } } className="text-center Form">
            <input onChange={ ( e ) => setNewTask( e.target.value ) } type="text" value={newTask} placeholder="Add new task"/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default TaskForm;
