import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
import AddIcon from '@material-ui/icons/Add';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

/*hooks -> Array destructuring  - inside const [num called intial value, setNum called updated value] 
   - define num variable dynamically using hooks
   - here whatever values wil be passed inside the useState(0) -> that will be the initial value of num in array
   - Now, define function and call onClick
   - check value should not be -ve, so use conditional statement
*/

// App Fat arrow Function
const IncreDecrement = () => {

    const [num, setNum] = useState(0)

    const incNum = () => {
        setNum(num + 1);
    }

    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
        else {
            alert('Value can not be -ve')
            setNum(0);
        }
    }

    return (
        <>
            {/* React fragment ->  syntactic sugar format */}

            <div className="main_div">
                <div className="center_div">
                    <h1>{num}</h1> {/* Here we need a state variable which changes it's value -> create Hooks above */}
                    <div className="btn_div">
                        <button onClick={incNum}>
                            <AddIcon />
                        </button>
                        <button onClick={decNum}> <IndeterminateCheckBoxIcon /> </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default IncreDecrement;