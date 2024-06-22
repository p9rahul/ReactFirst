import React, { useEffect, useState } from "react";


const Statewise = () => {

    // Create API , useEffect hooks to load it 1st time - call automatically
    //Define function getCovidData
    //  here we need to use fetch api function async is required
    // fetch api will return promise -> request rejected or fullfilled so use await
    /* Bootstrap css
    mt-5 - margin top 5 px 
    mb-5 - margin bottom 5px 
    */
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const response = await fetch('https://data.covid19india.org/data.json');
        //convert to JS object 
        const actualData = await response.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
         <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"> <span className="fw-bold"> India </span> Covid-19 Dashboard</h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark"> 
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>recovered</th>
                            <th>deaths</th>
                            <th>active</th>
                            <th>updated</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curEle, ind) => {
                                    return(
                                    <tr key={ind}>
                                        <th>{curEle.state}</th>
                                        <td>{curEle.confirmed}</td>
                                        <td>{curEle.recovered}</td>
                                        <td>{curEle.deaths}</td>
                                        <td>{curEle.active}</td>
                                        <td>{curEle.lastupdatedtime}</td>
                                    </tr>
                                )
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
           
        </>
    );
}

export default Statewise;