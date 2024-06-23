import React from "react";
import { useParams, useLocation,useh } from "react-router-dom";

//working
// const User = () =>{
//     return(
//         <h1>user page </h1>
//     );
// };

// // Not working serch reason -> Using props without using useParams Hook
// const User = ({match}) =>{
//     return(
//         <h1>user {match.params.name} page </h1>
//     );
// };

// Using useParams Hook
const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    console.log(location);
    console.log({fname, lname});

    return (
        <>
            <h1>User {fname} {lname} page </h1>

            <p> My location is {location.pathname}</p>
            {/* condition */}
            {location.pathname === '/user/ram/1' ? (<button onClick={() => alert("Welcome")}>Click Me</button>) : null}
        </>
    );
};

export default User;