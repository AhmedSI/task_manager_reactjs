const reducer = (state = {}, action) => {
   switch (action.type) {
      case 'TASKS_RECEIVED':
         return { ...state, tasks: action.tasks};
      case 'TASKS_BY_TITLE_OR_DESC_RECIEVED':
         return {...state,searchResults:action.tasks};
      case 'TASK_RECEIVED':
         return { ...state, task: action.tasks[0]};
      case 'TASK_ADDED':
         console.log(action.task)
         return { ...state,tasks:state.tasks.concat([action.task])};
      case 'TASK_DELETED':
         return { ...state,tasks:state.tasks.filter(task=>task.taskId!=action.taskId)};
      case 'TASK_UPDATED':
         var tasks = state.tasks
         var result = action.result
         for (var i in tasks) {
            if (tasks[i].taskId == result.taskId) {
               tasks[i]= result.task;
               break; 
            }
         }
         return { ...state,tasks:tasks};
      default:
         return state;
   }
};

export default reducer;