import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layouts/Header'
import AddTodo from './components/layouts/AddTodo';
import About from './components/layouts/pages/About';

class App extends Component {
state = {
  todos: [
    {
      id:1,
      task:"Go to office",
      completed: false
    },
    {
      id:2,
      task:"return back from office",
      completed: false
    }, {
      id:3,
      task:"Dinner with Wife",
      completed: false
    },
    {
      id:4,
      task:"Do workout",
      completed: false
    }
  ]
}

markComplete = (id)=>{
this.setState({ todos: this.state.todos.map((todo)=>{
    if(todo.id === id){
      todo.completed = !todo.completed;
    }
    return todo;
  })
}
)
}

delTodo = (id)=>{
  //console.log(id)
  this.setState({ 
    todos: [...this.state.todos.filter(todo=>
      {
        return todo.id !== id
      }
    )] 
  })
}

addToList = (task)=>{
  console.log(task);
  let newtodo = {
    id: parseInt(this.state.todos.length) + 1,
    task,
    completed: false
  }
  this.setState({
    todos: [...this.state.todos,newtodo]
  })
}

  render() {
    console.log(this.state)
    return (
    <Router>
        <div className="App">
      <Header />
      <Route exact path="/" render={props =>(
        <React.Fragment>
      <AddTodo addToList = {this.addToList}/>
     <Todos todoList = {this.state.todos} markComplete = {this.markComplete}
     delTodo = {this.delTodo}/>
      </React.Fragment>
      )} />

      <Route path='/about' component={About}/>
      </div>
    </Router>
    );
  }
}

export default App;
