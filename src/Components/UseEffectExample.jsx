import React, { useEffect, useState } from "react";
import '../index.css'


const UseEffectExample = () => {

    const [num, setnum] = useState(0);
    const [num1, setnum1] = useState(0);


    /*
    - alert will executed when page invoke 1st time and after every click on the button 1st 
    - add [num] -> suppose we have two button and on 1st button click this alert will dispaly not on 2nd */
    useEffect( () => {
        alert("i am alerted")
    },[num]);
    
    const increment = () => {
        setnum(num + 1);
    }

    const increment1 = () => {
        setnum1(num1 + 1);
    }

    return (
            <div className="btn_div">
                <button onClick={increment}>
                    Click me {num} 
                </button><br/>
                <button onClick={increment1}>
                    Click me {num1} 
                </button>
            </div>
    );
};

export default UseEffectExample;