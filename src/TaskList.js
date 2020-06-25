import React from 'react'
import Button from './Button'

function TaskList(props) {
    return (
        <ul>
            {props.tasks.map(task => 
                <li key={task.id}>
                    {task.name}
                    <Button onClick={() => props.buttonAction(task)} text={props.buttonText} />
                </li>)
            }
        </ul>
    );
}

export default TaskList;