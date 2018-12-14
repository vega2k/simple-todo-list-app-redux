import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'

const Todo = props => {  console.log('Todo props', props)
    return (
      
        <div>
            {props.todos.map(todo => {
            return (
                <div key={todo.id}>
                    
                    <li
                        onClick={() => props.toggleTodo(todo.id)}
                        //onDoubleClick={() => props.removeTodo(todo.id)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            props.removeTodo(todo.id);
                        }}            
                        style={{
                            textDecoration: todo.complete ? 'line-through' : 'none'
                        }}
                        name="todo"
                        value={todo.complete}>
                        {todo.text}
                    </li>
            
                </div>)})}
        </div>
    )

}
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleTodo: () => { dispatch(toggleTodo) }
//     }
// }
export default connect(mapStateToProps, { toggleTodo, removeTodo })(Todo)