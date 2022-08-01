import React, { useState, useEffect } from "react";
import group from "../images/group.png"
import "../css/Header.css"
let Header = function () {
    const url = "https://randomuser.me/api/?results=10"
    const [data, setdata] = useState('');
    
    const [name, setname] = useState("")
    localStorage.setItem('name', JSON.stringify(name));




    useEffect(() => {
        const fetchData = async () => {
            let data = await fetch(url);
            let gotdata = await data.json();
            gotdata.results.forEach(element => {
                element.expenses = {'amount':"₹10000"}
            });
            localStorage.setItem('data', JSON.stringify(gotdata.results));
            setdata(gotdata.results);
            console.log(data);
        }
        fetchData();
        return () => { };
    }, [])

    ////////////////////////////////////////

    let getDetails = () => {
        let showdata = data.filter((same) =>
            same.name.first === name)
        setdata(showdata);
        localStorage.setItem('data', JSON.stringify(showdata));

    }

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

            </nav>
            <div>
                <label>Enter the name</label>
                <input className="charactername" value={name} onChange={(e) => setname(e.target.value)}></input>
                <button onClick={()=>getDetails()}>submit</button>
            </div>
            <div className="maincontainer" style={{ display: 'flex', flexWrap: 'wrap', width: '865px', gap: '30px', justifyContent: 'center', }}>
                {

                    data.length > 0 && data.map((obj, index) => (

                        <div className="subconatiner" key={index}>
                            <div className="content" >
                                <div className="contentcontainer" >
                                    <img className="image" src={obj.picture.large}></img>
                                    <br></br>
                                    <span className="name">{obj.name.title} {obj.name.first}</span>
                                    <br></br>
                                    <span className="name">{obj.location.state}</span>
                                    <br></br>
                                    <span className="name">{obj.email}</span>
                                    <br></br>
                                    <span className="name">{obj.expenses.amount}</span>
                                    <br></br>


                                </div>
                            </div>
                        </div>

                    )
                    )

                }


            </div>
        </div>

    )

}
export default Header;