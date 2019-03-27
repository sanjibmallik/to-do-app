import React from 'react';

export class AddTodo extends React.Component {
    state = {
        task: ''
    }

    onChangeHandler = (e)=>{
this.setState({ task: e.target.value })
    }
    onSubmitForm = (e)=>{
        e.preventDefault();
        this.props.addToList(this.state.task);
        this.state.task = '';
    }

    render(){
        return (
            <form onSubmit={this.onSubmitForm} 
            style={{display:'flex', marginTop:'2px'}}>
                <input
                type="text" 
                value={this.state.task}
                name = "newTodo"
                style = {{flex: '5'}}
                onChange = {this.onChangeHandler}
                />
                <input 
                type='submit' 
                style = {{flex: '1'}}value="Submit" />
            </form>
        )
    }
    


}

export default AddTodo;