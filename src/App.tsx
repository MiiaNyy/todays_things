import React, { useState } from 'react';
import TaskForm from "./components/TaskForm";
import tasksData from "./data/tasksData";
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTasks] = useState( tasksData );

    function addNewTask( taskName : string ) : void {
        const newTask : Task = {
            name: taskName,
            complete: false,
        };
        setTasks( [...tasks, newTask] );
    }

    function changeTaskState( selectedTask : Task ) : void {
        const newTasks = tasks.map( task => {
            if ( task === selectedTask ) {
                return {
                    ...task,
                    complete: !task.complete
                }
            } else {
                return task;
            }
        } );
        setTasks( newTasks );
    }

    function removeTask( selectedTask : Task ) : void {
        const newTasks = tasks.filter( task => {
            if ( task !== selectedTask ) {
                return task;
            }
        } );
        setTasks( newTasks );
    }

    function updateTaskName( selectedTask : Task, updatedValue : string ) : void {
        const newTasks = tasks.map( task => {
            if ( task === selectedTask ) {
                return {
                    ...task,
                    name: updatedValue,
                }
            } else {
                return task;
            }
        } );
        setTasks( newTasks );
    }

    return (
        <div className="App container">
            <h1 className="text-center mb-4 mt-4">Today's things</h1>
            <TaskForm addNewTask={ addNewTask }/>
            <div>
                <TaskList tasks={ tasks } changeTaskState={ changeTaskState } removeTask={ removeTask }
                          updateTask={ updateTaskName }/>
            </div>
        </div>
    );
}

export default App;
