import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchTasks() {
  const tasks = yield fetch('http://localhost:8080/api/tasks')
        .then(response => response.json(), );
  yield put({ type: "TASKS_RECEIVED", tasks: tasks});
}

function* fetchTasksWatcher() {
     yield takeLatest('GET_TASKS', fetchTasks)
}

function* createTask(action) {
  const res = yield fetch('http://localhost:8080/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({title:action.task.title,description:action.task.description})
  })
        .then(response => response.json());
  yield put({ type: "TASK_ADDED", task: res.task});
}

function* createTaskWatcher() {
     yield takeLatest('ADD_TASK', createTask)
}

function* deleteTask(action) {
  const tasks = yield fetch('http://localhost:8080/api/tasks/'+action.taskId, {
    method: 'DELETE'
  })
        .then(response => response.json());
  yield put({ type: "TASK_DELETED", taskId: action.taskId});
}

function* deleteTaskWatcher() {
     yield takeLatest('DELETE_TASK', deleteTask)
}

function* updateTask(action) {
  const result = yield fetch('http://localhost:8080/api/tasks/'+action.taskId,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({title:action.task.title,description:action.task.description})
  })
        .then(response => response.json());
  yield put({ type: "TASK_UPDATED", result: result});
}

function* updateTaskWatcher() {
     yield takeLatest('UPDATE_TASK', updateTask)
}

function* toggleTask(action) {
  const result = yield fetch('http://localhost:8080/api/tasks/toggle/'+action.taskId,{
    method: 'PUT'
  })
        .then(response => response.json());
        console.log(result)
  yield put({ type: "TASK_UPDATED", result: result});
}

function* toggleTaskWatcher() {
     yield takeLatest('TOGGLE_TASK', toggleTask)
}

function* getTasksByTitleOrDesc(action) {
  const result = yield fetch('http://localhost:8080/api/tasks/search/'+action.searchTerm.toLowerCase(),{
    method: 'GET'
  })
        .then(response => response.json());
  yield put({ type: "TASKS_BY_TITLE_OR_DESC_RECIEVED", tasks: result.tasks});
}

function* getTasksByTitleOrDescWatcher() {
     yield takeLatest('GET_TASKS_BY_TITLE_OR_DESC', getTasksByTitleOrDesc)
}

export default function* rootSaga() {
   yield all([
    fetchTasksWatcher(),
    createTaskWatcher(),
    deleteTaskWatcher(),
    updateTaskWatcher(),
    getTasksByTitleOrDescWatcher(),
    toggleTaskWatcher()
   ]);
}