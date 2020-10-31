import {React, Component} from 'react'
import {connect} from 'react-redux'
import {createDeleteTaskAction} from '../actions'
import {createToggleTaskAction} from '../actions'
import {Redirect} from 'react-router-dom'
import ConnectedSearchBar from '../components/SearchBar'

class TaskPage extends Component{
    state = {
        toForm:false,
        toHome:false,
    }

    handleUpdate = (e)=>{
        this.setState({toForm:true})
    }

    handleDelete = (taskId)=>{
        this.props.dispatch(createDeleteTaskAction(taskId))
        this.setState({toHome:true})
    }

    handleToggle = (taskId)=>{
        this.props.dispatch(createToggleTaskAction(taskId))
    }

    render(){
        var taskContainer = this.props.taskContainer
        if(this.state.toHome===true){
            return <Redirect to='/tasks' />
        }
        if(this.state.toForm===true){
            return <Redirect to={{
                pathname: '/tasks/form',
                state: { task: this.props.taskContainer.task }
              }} />
        }
        return(
            <div>
                <ConnectedSearchBar />
                <div style={{marginTop:'100px'}}>
                    {
                        taskContainer.loading===true?
                        <h1>Loading Task</h1>:
                        taskContainer.empty===true?
                        <h1>404 error! Couldn't find this task</h1>:
                        <div>
                            <button style={{marginRight:"20px"}} onClick={()=>this.handleUpdate(taskContainer.task.taskId)}>Update</button><button onClick={()=>this.handleDelete(taskContainer.task.taskId)}>Delete</button>
                            <h1>{taskContainer.task.title}</h1>
                            <p>{taskContainer.task.description}</p>
                            <p>status:  {taskContainer.task.completed?'Complete':"Incomplete"}</p>
                            <button onClick={()=>this.handleToggle(taskContainer.task.taskId)}>{taskContainer.task.completed===false?"Mark as Complete":"Mark as Incomplete"}</button>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapParamsToState = ({tasks},props)=>{
    const taskId = props.match.params.id
    var taskContainer = {empty:true,loading:false,task:{}}
    if(taskId){
        var requestedTask = tasks?tasks.filter(task=>task.taskId==taskId):[]
       
        taskContainer['task'] =  requestedTask.length>0?requestedTask[0]:{}
        taskContainer['empty'] = requestedTask.length>0?false:true
        taskContainer['loading']= tasks?false:true

    }
    return{
        taskContainer:taskContainer
    }
}

const ConnectedTaskPage = connect(mapParamsToState)(TaskPage)

export default ConnectedTaskPage