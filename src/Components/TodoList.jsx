import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = (props) => {


    /* Design 1 - delete items from Todo list */

    return (
        <>
            <div className="todo_style">


                { <i className='fa fa-times'
                    aria-hidden="true"
                    //CallBack function
                    onClick={() => {
                        props.onSelect(props.id);
                    }}
                /> }
                <li>{props.text}</li>
            </div>
        </>
    );


    /* Design 2- Use Materail icons for delete - line cut on list items*/

    //Create Hooks to change the state of variable, when user clicks on delete icon line cut
    // const [line, setLine] = useState(false);

    // //Function
    // const cutIt = () => {
    //     setLine(true);
    // }

    // return (
    //     <>
    //         <div className="todo_style">
    //             <span onClick={cutIt}>
    //                 <DeleteIcon className='deleteIcon' />
    //             </span>
    //             <li style={{ textDecoration: line ? "line-through" : "none" }}>
    //                 {props.text}
    //             </li>
    //         </div>
    //     </>
    // );
};

export default TodoList;