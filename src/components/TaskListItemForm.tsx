import { useState } from "react";

interface TaskListItemFormProps {
    task : Task,
    updateTask : Function,
}

function TaskListItemForm( {task, updateTask} : TaskListItemFormProps ) {

    const [updatedValue, setUpdatedValue] = useState( task.name );

    return (
        <form onSubmit={ ( e ) => {
            e.preventDefault();
            updateTask( updatedValue );
        } }>
            <input onChange={ ( e ) => setUpdatedValue( e.target.value ) } type="text" value={ updatedValue }/>
            <input type="submit" value="Update"/>
        </form>
    );
}

export default TaskListItemForm;
