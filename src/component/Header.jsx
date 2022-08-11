import React, { useState, useEffect } from "react";
import group from "../images/logo.png"
import "../css/Header.css"
let Header = function () {
    const url = "https://randomuser.me/api/?results=10"
    const [data, setdata] = useState('');
    
    const [name, setname] = useState("")
    localStorage.setItem('name', JSON.stringify(name));
   let userdata= JSON.parse(localStorage.getItem('data'));
       console.log(userdata);




    useEffect(() => {
        const fetchData = async () => {
            let data = await fetch(url);
            let gotdata = await data.json();
            gotdata.results.forEach(element => {
                element.expenses = {'amount':"₹10000"}
            });
           
            if(userdata === null) {
                localStorage.setItem('data', JSON.stringify(gotdata.results));
                setdata(gotdata.results);
                
            } else {
                setdata(userdata)
            }
           
            
          
            
        }
        fetchData();
        
        return () => {};
    }, [])
    

    ////////////////////////////////////////

    let getDetails = () => {
        let showdata = data.filter((same) =>
            same.name.first === name)
        setdata(showdata);

    }
    

    return (
        <div>
            <nav className="navbar">

                <div>

                    <img className="imagelogo" src={group} alt="no image"></img>
                </div>
                <div className="list">
                    <span className="home">Home</span>
                    <span className="contact">Contact</span>
                </div>

            </nav>
           

            <div className="maincontainer">
                {
<div className="background">
                data.length > 0 && data.map((obj, index) => (

                        <div className="subconatiner" key={index}>
                            <div className="content" >
                                <div className="contentcontainer" >
                                    <img className="image" src={obj.picture.large}></img>
                                    <br></br>
                                    <span className="name">Name: {obj.name.title} {obj.name.first}</span>
                                    <br></br>
                                    <span className="name">State: {obj.location.state}</span>
                                    <br></br>
                                    <span className="name">Email: {obj.email}</span>
                                    <br></br>
                                    <span className="name">Salary:{obj.expenses.amount}</span>
                                    <br></br>


                                </div>
                            </div>
                        </div>

                    )
                    )
                </div>
                    

                }


            </div>
            <div className="character">
                <div> <label className="label">Enter the name:</label>
                
                <input className="charactername" value={name} onChange={(e) => setname(e.target.value)}></input>
                <br></br></div>
               
                <button className="submit" onClick={()=>getDetails()}>submit</button>
            </div>
        </div>

    )

}
export default Header;
