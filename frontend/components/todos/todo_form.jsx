import React, { useState } from "react";

function TodoForm() {
    const [title, setTitle] = useState('initial title');
    const [body, setBody] = useState('initial body');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(title)
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