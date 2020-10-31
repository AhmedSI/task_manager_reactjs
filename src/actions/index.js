export const createGetTasksAction = ()=>{
    return{
        type:"GET_TASKS"
    }
}

export const createGetTaskByTitleOrDescAction = (searchTerm)=>{
    return{
        type:"GET_TASKS_BY_TITLE_OR_DESC",
        searchTerm:searchTerm
    }
}

export const createAddTaskAction = (task)=>{
    return{
        type:"ADD_TASK",
        task:task
    }
}

export const createUpdateTaskAction = (taskId,task)=>{
    return{
        type:"UPDATE_TASK",
        taskId:taskId,
        task:task
    }
}

export const createToggleTaskAction = (taskId)=>{
    return{
        type:"TOGGLE_TASK",
        taskId:taskId
    }
}

export const createDeleteTaskAction = (taskId)=>{
    return{
        type:"DELETE_TASK",
        taskId:taskId
    }
}