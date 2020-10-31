import {React, Component} from 'react'
import {connect} from 'react-redux'
import ConnectedTask from './Task'
import ConnectedSearchBar from '../components/SearchBar'

class SearchResultsPage extends Component{
    render(){
        var tasks = this.props.store.searchResults 
        
        return(
            <div>
                <ConnectedSearchBar />
                {
                    tasks?tasks.length>0?
                    tasks.map(task=><ConnectedTask key={task.taskId}  task={task} />):
                    <h1>Seems no Results for your search! Try another keywords.</h1>:
                    <h1>loading...</h1> 
                }
            </div>
        )
    }
}

const ConnectedSearchResultsPage = connect(store=>({store:store}))(SearchResultsPage)

export default ConnectedSearchResultsPage