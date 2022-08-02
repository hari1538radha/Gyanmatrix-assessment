import React,{useState,useEffect} from "react";
import styles from '../css/contact.css'
let Contact =function Contact()
{   
    const userdata= JSON.parse(localStorage.getItem('data')) || [];
    
   const a = JSON.parse(localStorage.getItem('single')) || [];
//console.log(userdata);
    const [uname, setname] = useState("");
    const [expenses, setexp] = useState("");
    const [amount, setamt] = useState("");
    const [data, setdata] = useState('');
    const [dataset,setdataset] = useState(JSON.parse(localStorage.getItem('single')) || []);
   console.log(dataset)
     useEffect(() =>
    { 
         localStorage.setItem('name', JSON.stringify(uname))
         

     },[])
    

    let getDetail = () => {
        let showdata = userdata.filter((same) =>
            same.name.first === uname)
        localStorage.setItem("single",JSON.stringify(showdata));
        setdataset(showdata);

        localStorage.setItem('exp', JSON.stringify(expenses))
        localStorage.setItem('amount', JSON.stringify(amount))
  
    }
    let amountfinall =10000-amount
    
console.log(expenses)
console.log(amount)


 return (

    <div className="totalcontainer">
        <div className="namedata"><label>Enter the name :</label>
    <input placeholder="ENTER NAME" className="charactername" value={uname} onChange={(e) => setname(e.target.value)}></input>
    <br>
    </br></div>
    <div className="expenses"> <label>Enter expenses detail :</label>
    <input placeholder="ENTER EXP NAME"  className="charactername" value={expenses} onChange={(e) => setexp(e.target.value)}></input>
    <br>
    </br></div>
    <div className="amount"> <label>Enter the amount :   </label>
    <input placeholder="ENTER AMOUNT" className="charactername" value={amount} onChange={(e) => setamt(e.target.value)}></input>
    </div>
   
   <div className="button"> <button  className="txtbtn"onClick={()=> getDetail()}>submit</button></div>
   
   
    <div className="maincontainer">
                {

                    dataset.length > 0 && dataset.map((obj, index) => (

                        <div className="subconatiner" key={index}>
                            <div className="content" >
                                <div className="contentcontainer" >
                                    <img className="image" src={obj.picture.large}></img>
                                    <br></br>
                                    <div className="datacont"><span className="name">Name: {obj.name.title} {obj.name.first}</span>
                                    <br></br>
                                    <span className="name">State: {obj.location.state}</span>
                                    <br></br>
                                    <span className="name">Email: {obj.email}</span>
                                    <br></br>
                                    <span className="name">Salary: {obj.expenses.amount}</span>
                                    <br></br></div>
                                    


                                </div>
                            </div>
                        </div>

                    )
                    )

                }
                
                <div>Expenses:{expenses}</div>
                <div>
                    Final Amount:{amountfinall}</div>
                </div>
                </div>
 )
}
export default Contact;