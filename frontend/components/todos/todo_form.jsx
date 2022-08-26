import React, { useState } from "react";

function TodoForm(props) {
    const [title, setTitle] = useState('initial title');
    const [body, setBody] = useState('initial body');
    console.log(props)

    function handleSubmit(e) {
        e.preventDefault();
        props.receiveTodo({title: title, body: body})
    }

    return(
        <form onSubmit={handleSubmit} action="submit">
            <label htmlFor="title">Title</label>
            <input 
                type="text" 
                id="title" 
                onChange={event => setTitle(event.target.value)}
                value={title} />
            <label htmlFor="body">Body</label>
            <input 
                type="text" 
                id="body" 
                onChange={event => setBody(event.target.value)}
                value={body} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default TodoForm