import React from "react";
import TodoForm from "./todo_form";
import TodoListItem from "./todo_list_item";
import uniqueID from "../../util/unique_id";

const TodoList = (props) => {
    return(
        <div>
            <TodoForm 
                receiveTodo={ props.receiveTodo } />
            <ul>
                {props.todos.map((todo, idx) => {
                    return (
                        <TodoListItem key={idx} todo={todo} 
                        removeTodo={ props.removeTodo }
                        receiveTodo={ props.receiveTodo} />)
                })}
            </ul>
        </div>

    )
}

export default TodoList;