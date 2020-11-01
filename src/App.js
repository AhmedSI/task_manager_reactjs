import './App.css';
import {React, Component} from 'react';
import {connect} from 'react-redux';
import {createGetTasksAction} from './actions'
import ConnectedTasksList from './components/TasksList'
import ConnectedTaskPage  from './components/TaskPage'
import {Route, BrowserRouter, NavLink,Redirect} from 'react-router-dom'
import ConnectedTaskForm from './components/TaskForm';
import ConnectedSearchResultsPage from './components/SearchResultsPage'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(createGetTasksAction());
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <div style={{margin:'15px 5%',textAlign:'left'}}><NavLink to=  {`/tasks`}  style={{textDecoration:'none',color:'maroon'}}><button>Home</button></NavLink></div>
          <Route path="/" render={() => (<Redirect to="/tasks" />)}/>
          <Route exact path='/tasks' component={ConnectedTasksList} />
          <Route exact path='/tasks/form' component={ConnectedTaskForm} />
          <Route exact path='/tasks/form/:id(\d+)' component={ConnectedTaskForm} />
          <Route exact path='/tasks/:id(\d+)' component={ConnectedTaskPage} />
          <Route exact path='/tasks/search' component={ConnectedSearchResultsPage} />
        </BrowserRouter>
      </div>
    );
  }
}

const ConnectedApp = connect((store)=>({store:store}))(App)

export default ConnectedApp;
