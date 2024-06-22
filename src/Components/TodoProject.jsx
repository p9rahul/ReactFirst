import React, { useState } from "react";
import TodoList from "./TodoList";


// App Fat arrow Function
const TodoProject = () => {

    //pass object in useState
    const [inputList, setInputList] = useState("");
    // Create an array to store added items in list, display below and delete -> in html add Map value
    // Items current value empty array , updated items -> in setItems
    const [Items, setItems] = useState([])


    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    //Here setitems will hold values and add in new array with inputList items
    const listofItems = () => {
        setItems((oldItems) => {
            //here 3ple dots is spread operator , in this array oldvalue will store and new value also
            return [...oldItems, inputList]
        });
        // To clear input list 
        setInputList("")
    };

    //This id is define in todolist.jsx props
    const deleteItem = (id) =>{
        setItems((oldItems) => {
            return oldItems.filter((arrElement, index)=>{
                return index !== id; // return all itmes which are not matching 
            } )
        })
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> Todo List</h1>
                    <br />
                    <input type="text" placeholder="Add a items"
                        onChange={itemEvent}
                        value={inputList}
                    />
                    <button onClick={listofItems}> + </button>

                    <ol>
                        {/* <li>{inputList}</li>  */}
                        {/* Map takes 4 attributes -> 1. Current value 2. Index number(based on delete happens) 3. Deal Array 4. This */}
                        {
                            Items.map((itemsValue, index) => {
                                return <TodoList key={index} id={index} text={itemsValue}
                                    onSelect= {deleteItem}
                                />
                            })
                        }

                    </ol>
                </div>
            </div>
        </>
    );
};

export default TodoProject;