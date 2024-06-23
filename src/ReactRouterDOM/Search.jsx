import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {

    const [img, setImg] = useState();

    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }

    return (
        <>
            <h1>Search page</h1>
            <div className="searchbar">
                <input type="text" placeholder="Enter something..." onChange={inputEvent} value={img} />
            </div>

            {img ==="" ? null :<SearchResult name={img}/>}
        </>
    );
}

export default Search;