import React from "react";

const SearchResult =(props) =>{
    console.log("Props name - "+ props.name);
    const img =`https://source.unsplash.com/400*300/?${props.name}`;
    // const img='C:\Users\pc\Rahul\ReactLearning\mango.jpg';

    return(
        <>
        <div>
            <img src={img} alt="search"/>
        </div>
        </>
    );
}

export default SearchResult;
