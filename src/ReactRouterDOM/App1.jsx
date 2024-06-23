import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Service from "./Service";
import User from "./User";
// import { Search } from "@material-ui/icons";
import Search from "./Search";

const App1 = () => {

    // Define Functional componet page 
    const Name = () => {
        return <h1>This is Name page</h1>;
    }
    return (
        <>
            <Menu />
            <Routes>
                <Route exact path="/" Component={About} />
                <Route exact path="/contact" Component={Contact} />
                <Route path="/contact/name" Component={Name} />
                <Route path="/service" Component={Service} />
                <Route path="/user/:fname/:lname" Component={User} />
                <Route path="/search" Component={Search} />


            </Routes>

            {/* <h1> Router dom </h1>
        <About/>
        <Contact/> */}
        </>
    );
}

export default App1;