import {React, Component} from 'react'
import {createAddTaskAction} from '../actions'
import {connect} from 'react-redux'
import {createUpdateTaskAction} from '../actions'
import {Redirect} from 'react-router-dom'
import ConnectedSearchBar from '../components/SearchBar'

class TaskForm extends Component{

    state = {
        title:'',
        description:'',
        btnDisabled:true,
        toHome:false,
        setUpdateBtn:false

    }
    
    handleTitleChange = (e)=>{
        var title = e.target.value
        
        this.setState({
            title:title
        })

        if (this.state.title.length>0&&this.state.description.length>0)
            this.setState({
                btnDisabled:false
            })
        else 
            this.setState({
                btnDisabled:true
            })
    }

    handleDescriptionChange = (e)=>{
        var description = e.target.value
        
        this.setState({
            description:description
        })
        
        if (this.state.title.length>0&&this.state.description.length>0)
            this.setState({
                btnDisabled:false
            })
        else 
            this.setState({
                btnDisabled:true
            })
    }
    
    
    
    addTask = (e)=>{
        this.props.dispatch(createAddTaskAction({title:this.state.title,description:this.state.description}))
        this.setState({toHome:true})
    }

    updateTask = (e)=>{
        this.props.dispatch(createUpdateTaskAction(this.props.location.state.task.taskId,{title:this.state.title,description:this.state.description}))
    }
    
    componentDidMount(){
        if(this.props.location.state!=null)
            if ("task" in this.props.location.state){
                this.setState({title:this.props.location.state.task.title})
                this.setState({description:this.props.location.state.task.description})
                this.setState({setUpdateBtn:true})
            }
    }

    render(){
        if(this.state.toHome===true){
            return <Redirect to='/tasks' />
        }
        return(
            <div>
                <ConnectedSearchBar />
                <div style={{marginTop:'100px'}}>
                    <label>title: </label><input type='text' onChange={this.handleTitleChange} value={this.state.title} /><br/><br/>
                    <label>description: </label><textarea onChange={this.handleDescriptionChange} value={this.state.description}/><br/><br/>
                    {this.state.setUpdateBtn === false?
                    <button disabled={this.state.btnDisabled} onClick={this.addTask}>ADD</button>:
                    <button disabled={this.state.btnDisabled} onClick={this.updateTask}>Update</button>
                    }
                </div>
            </div>
        )
    }
    
}

const ConnectedForm = connect((store)=>({store:store}))(TaskForm)

export default ConnectedForm