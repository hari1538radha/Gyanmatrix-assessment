import React, { useState, useEffect } from "react";
import group from "../images/group.png"
import "../css/Header.css"
let Header = function () {
    const url = "https://randomuser.me/api/?results=10"
    const [data, setdata] = useState('');
    //const [name, setname] = useState("")
    //localStorage.setItem('name', JSON.stringify(name));



    useEffect(() => {
        async function fetchData() {
            let data = await fetch(url);
            let gotdata = await data.json();
            localStorage.setItem('data', JSON.stringify(gotdata.results));
            setdata(gotdata.results);
            console.log(data);
        }
        fetchData();

    }, [])


    return (
        <div>
            <nav className="navbar">

                <div>

                    <img className="imagelogo" src={group} alt="no image"></img>
                </div>
                <div>
                    <span>Home</span>
                    <span>Contact</span>
                </div>

                {
                    data.length > 0 && data.map((obj, index) => (
                        <div className="maincontainer">
                            <div className="content" key={index}>
                            <div className="contentcontainer">
                                <img className="image" src={obj.picture.large}></img>
                                <span className="name">{obj.name.title} {obj.name.first}</span>
                                <br></br>
                                <span className="name">{obj.location.state}</span>
                                <br></br>
                                <span className="name">{obj.email}</span>
                                <br></br>
                            </div>
                        </div></div>

                    )
                    )
                }





            </nav>
        </div>

    )

}
export default Header;