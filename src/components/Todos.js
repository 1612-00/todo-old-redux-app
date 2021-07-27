import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import {
  getTodos,
  markComplete,
  addTodo,
  deleteTodo,
} from "./../store/actions/todoActions";

const Todos = ({ todos, getTodos, markComplete, addTodo, deleteTodo }) => {
  // Get Todos
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="todo-list">
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.complete ? "completed" : ""}>
            {todo.title}
            <input
              type="checkbox"
              onChange={markComplete.bind(this, todo.id)}
            />
            <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, {
  getTodos,
  markComplete,
  addTodo,
  deleteTodo,
})(Todos);
