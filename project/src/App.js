import React, { useState } from 'react';
import './App.css';

let studentArr = [
  {
    name: 'Muthu',
    gender: 'M',
    marks: [82,74,88,72,90],
    dept:"ECE"
       },
  
  
  {
    name: 'Arun',
    gender: 'M',
    marks: [78,59,79,99,82],
    dept:"CSE"
       },
       {
        name: 'Hari',
        gender: 'M',
        marks: [98,99,95,98,92],
        dept:"ECE"
           },
  
           {
            name: 'HariShankas',
            gender: 'M',
            marks: [78,59,79,99,82],
            dept:"CSE"
               },
          
               {
                name: 'kavin',
                gender: 'M',
                marks: [78,59,56,89,82],
                dept:"EEE"
                   },
  
                   {
                    name: 'Aswin',
                    gender: 'M',
                    marks: [78,78,79,99,82],
                    dept:"CSE"
                       },
  
                       {
                        name: 'Kausik',
                        gender: 'M',
                        marks: [78,72,79,99,56],
                        dept:"CSE"
                           },
  
                           {
                            name: 'Koshal',
                            gender: 'M',
                            marks: [28,56,79,99,30],
                            dept:"CSE"
                               },
  
                               {
                                name: 'Deepa',
                                gender: 'F',
                                marks: [78,90,79,100,99],
                                dept:"CSE"
                                   },
  
                                   {
                                    name: 'Sarathy',
                                    gender: 'M',
                                    marks: [28,39,29,9,52],
                                    dept:"MECH"
                                       },
                                  
  
  {
    name: 'Abi',
    gender: 'F',
    marks: [98,94,82,72,86],
    dept:"EEE"
     },
  
  
  {
    name: 'Chitra',
    gender: 'F',
    marks: [57,35,84,32,35],
    dept:"CSE"
      },
  
  
  {
    name: 'Saravanan',
    gender: 'M',
    marks: [97,91,92,83,79],
    dept:"AIDS"
    },
  
  {
    name: 'Sathish',
    gender: 'M',
    marks: [32,36,31,39,44],
    dept:"EEE"
    
    }
];


let parsedata = JSON.parse(localStorage.getItem('Greater300'));
console.log(parsedata)
studentArr.forEach((element) =>
  {
    
    element.Total = 
      element.marks.reduce((Total,item)=>{
        return Total+item
      }
      ,0)
    }
  )
  
studentArr.forEach((element)=>
{
  element.Average = element.Total/5
})

localStorage.setItem('Greater300',JSON.stringify(studentArr));


function App () {
  const[data,setData] =useState(parsedata);
  const[failnumber,setnumber] =useState();


console.log(studentArr)
  studentArr.forEach(element => {
    element.pass = element.marks.every((item) => item > 45)
    
  });

function Greaterthan450()
{
 let greater300=studentArr.filter((item)=> (item.Total>390)
 )

//localStorage.setItem('Greater300',JSON.stringify(greater300));
setData(greater300);
setnumber('');
}
let betweenNum = () =>
{
  let betweennum =studentArr.filter((item)=> ((400<item.Total)&& (450>item.Total) )
  )
  //localStorage.setItem('Greater300',JSON.stringify(betweennum));
  setData(betweennum);
  setnumber('');
}
let lessthan400 =() =>
{
  let lessnum =studentArr.filter((item)=> (item.Total <300))
  //localStorage.setItem('Greater300',JSON.stringify(lessnum));
  setData(lessnum);
  setnumber('');
}
let male = ()=>
{
  let maledata =studentArr.filter((item)=>(item.gender == 'M'))
  //localStorage.setItem('Greater300',JSON.stringify(maledata));
  setData(maledata);
  setnumber('');
}
let Female = ()=>
{
  let femaledata =studentArr.filter((item)=>(item.gender == 'F'))
  //localStorage.setItem('Greater300',JSON.stringify(femaledata));
  setData(femaledata);
  setnumber('');
}

let Top5 = () =>
{
  let sorteddata = studentArr.sort((a,b)=>
  {
if(a.Total >b.Total)
{
  return -1;
}
if(b.Total>a.Total)
{
  return 1;
}
return 0;
  })
  let Slicedata = sorteddata.slice(0,5);

  setData(Slicedata);
  //localStorage.setItem('Greater300',JSON.stringify(Slicedata));
  setnumber('');
}
let pass = () =>
{
  let passdata =studentArr.filter((item)=>(item.pass === true))
  setData(passdata);
  //localStorage.setItem('Greater300',JSON.stringify(passdata));
  setnumber('');
  
}
let fail = () =>
{
  let faildata =studentArr.filter((item)=>(item.pass === false))
  setData(faildata);
  //localStorage.setItem('Greater300',JSON.stringify(passdata));
  setnumber('');
  
}
let numfail = () =>
{
  let failnum =studentArr.filter((item)=>(item.pass === false))
  let Failed =failnum.length
  setData(failnum);
  setnumber(Failed);
  alert(Failed);

       
  //localStorage.setItem('Greater300',JSON.stringify(passdata));
  
}


  return (
    <div className="App">
      <div className='content'> <button onClick={() => Greaterthan450()}>Greater than 390</button>
   
     <button onClick={() => betweenNum()} >400 to 450</button>
     <button onClick={() => lessthan400()}>less than 300</button>
     <button onClick={()=> male()} >male</button>
     <button onClick={()=> Female()} >Female</button>
     <button onClick={()=> Top5()} >Top 5</button>
     <button onClick={()=> pass()} >Pass</button>
     <button onClick={()=> fail()} >Fail</button>
     <button onClick={()=> numfail()} >NumberofFails</button>

 </div>
 
 <div className='display'>
        {
          data.map((items)=>
          (
            <div className='displaycontent'> <div>Name: {items.name}</div>
            <div>Gender: {items.gender}</div>
             <div>Department: {items.dept}</div>
             <div>Total: {items.Total}</div>
             <div>Marks: {items.marks.toString()}</div>
             <div>Average: {items.Average}</div>
        
            </div>
           
          ))
        }
                 <div>{failnumber}</div>

      </div>
    </div>
  );
}

export default App;
