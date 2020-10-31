import {React, Component} from  'react';
import {connect} from 'react-redux'
import Task from './Task'
import { NavLink} from 'react-router-dom'
import ConnectedSearchBar from '../components/SearchBar'

class TasksList extends Component {
    
    render(){
        var tasks = this.props.tasks
        return(
            <div>
                <ConnectedSearchBar />
                <div style={{textAlign:'right',margin:"30px 10%"}}>
                    <button>
                        <NavLink to=  {`/tasks/form`} style={{textDecoration:'none',color:'maroon'}}>
                            + ADD TASK
                        </NavLink>
                    </button>
                </div>
                {
                    tasks?tasks.length>0?
                    tasks.map((task)=>(<Task key={task.taskId} task={task}/>)):
                    <h1>No tasks to display</h1>:
                    <h1>Loading tasks.</h1>
                }
            </div>
            
        )
    }
}

const mapStateToProps = (props)=>{
    return{
        tasks:props.tasks
    }
}
const ConnectedTasksList = connect(mapStateToProps)(TasksList)

export default ConnectedTasksList