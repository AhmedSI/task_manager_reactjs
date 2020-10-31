import {React, Component} from 'react'
import {connect} from 'react-redux'
import {createGetTaskByTitleOrDescAction} from '../actions/index'
import {Redirect} from 'react-router-dom'

class SearchBar extends Component{

    state={
        term:'',
        toSearchPage:false
    }

    handleChange = (e) => {
        const term = e.target.value
        this.setState({
            term:term
        })
    }

    doSearch = (e) => {
        const serchTerm = this.state.term
        this.props.dispatch(createGetTaskByTitleOrDescAction(serchTerm))
        this.setState({toSearchPage:true})
    }

    render(){
        if(this.state.toSearchPage===true){
            return <Redirect to='/tasks/search' />
        }
        return(
            <div style={{marginTop:'30px',borderBottom:'2px solid maroon'}}>
                <input type='text' placeholder='search by title or description' onChange={this.handleChange}/>
                <button onClick={this.doSearch}>Search</button>
                <br/><br/>
            </div>
        )
    }
}

const ConnectedSearchBar = connect((store)=>({store:store}))(SearchBar)

export default ConnectedSearchBar