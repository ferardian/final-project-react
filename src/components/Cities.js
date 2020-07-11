import React from 'react';
import { connect } from 'react-redux';
import { Button, FormLabel, Form, FormControl, FormGroup } from 'react-bootstrap';


//Penambahan Kota dengan react-redux


class TodoList extends React.Component {
    todoRef = React.createRef();
  
    _handleNewTodo = (e) => {
      let newTodo = this.todoRef.current.value;
      this.props.addNewTodo(newTodo);
  
      e.preventDefault();
      this.todoRef.current.value = '';
    }
  
    render() {
      const { todos } = this.props;
  
      return (
        <div className="App App-header">
            <h1 className="text-center page-title">Tambah Kota</h1>
          <form onSubmit={this._handleNewTodo}>
            <input ref={this.todoRef} />
          </form>
          <ul style={{fontWeight:'bold'}}>{todos.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
    todos: state.todos
  })
  
  const mapDispatchToProps = dispatch => ({
    addNewTodo: todo => dispatch({ type: 'ADD TODO', todo })
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

