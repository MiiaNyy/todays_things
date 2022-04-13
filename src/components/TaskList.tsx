import TaskListItem from "./TaskListItem";
import React from "react";
import "../styles/TaskList.css"

interface TaskListProps {
    tasks : Task[];
    changeTaskState : ModifyTask;
    removeTask : ModifyTask;
    updateTask : UpdateTask;
}

function TaskList( {tasks, changeTaskState, removeTask, updateTask} : TaskListProps ) {

    return (
        <ul className="TaskList">
            { tasks.map( task => {
                return <TaskListItem task={ task } changeTaskState={ changeTaskState } removeTask={ removeTask } updateTask={updateTask}/>
            } ) }
        </ul>
    );
}

export default TaskList;
