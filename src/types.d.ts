interface Task {
    name : string,
    complete : boolean,
    description? : string,
}

type AddNewTask = ( taskName : string ) => void;

type ModifyTask = ( task : Task ) => void;

type UpdateTask = ( task : Task, updatedValue : string ) => void;

