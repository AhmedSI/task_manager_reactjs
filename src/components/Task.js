import {React, Component} from 'react'
import { NavLink, withRouter} from 'react-router-dom'

class Task extends Component{
    
    render(){
        var task = this.props.task

        return(
            
                <div style={{border:'1px black solid',margin:'30px 20%',padding:'30px 5%'}}>
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                    <p>status:  {task.completed?'Complete':"Incomplete"}</p>
                    <div style={{textAlign:'right'}}>
                        <button>
                            <NavLink to=  {`/tasks/${task.taskId}`} style={{textDecoration:'none',color:'maroon'}}>
                                View Task
                            </NavLink>
                        </button>
                    </div>
                </div>
        )
    }
}

export default withRouter(Task)