import { useState } from "react";
import TaskListItemForm from "./TaskListItemForm";

interface TaskListItemProps {
    task : Task,
    changeTaskState : ModifyTask,
    removeTask : ModifyTask,
    updateTask : UpdateTask,
}

function TaskListItem( {task, changeTaskState, removeTask, updateTask} : TaskListItemProps ) {

    const [updatingTask, setUpdatingTask] = useState( false );

    const taskColor : string = task.complete ? 'complete' : 'incomplete';

    function submitFormAndUpdateTask( updatedTaskName : string ) {
        updateTask( task, updatedTaskName );
        setUpdatingTask( false );
    }

    if ( updatingTask ) {
        return (
            <li className={ `TaskListItem ${ taskColor }` }>
                <TaskListItemForm task={ task } updateTask={ submitFormAndUpdateTask }/>
            </li>
        )
    } else {
        return (
            <li className={ `TaskListItem ${ taskColor }` }>
                <label style={ {textDecoration: task.complete ? 'line-through' : undefined} }>
                    <input onClick={ () => changeTaskState( task ) } type="checkbox" checked={ task.complete }/>
                    { task.name }
                    <p>{ task.description }</p>
                </label>

                <div className="list-item__icon-container">
                    <i onClick={ () => removeTask( task ) } className="fa-solid fa-trash-can list-item__icon"/>
                    <i onClick={ () => setUpdatingTask( true ) } className="fa-solid fa-pen list-item__icon"/>
                </div>
            </li>
        );
    }
}


export default TaskListItem;
