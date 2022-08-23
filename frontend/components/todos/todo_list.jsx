import React from "react";
import TodoForm from "./todo_form";
import TodoListItem from "./todo_list_item";

const TodoList = (props) => {
    return(
        <div>
            <TodoForm />
            <ul>
                {props.todos.map((todo, idx) => {
                    return (
                        <TodoListItem key={idx} todo={todo} />)
                })}
            </ul>
        </div>

    )
}

export default TodoList;