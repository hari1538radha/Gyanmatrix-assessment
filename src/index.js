import React from "react";

import  ReactDOM  from "react-dom/client";

import Header from "./component/contact"

let data =document.getElementById("main");

let rootdata =ReactDOM.createRoot(data);

rootdata.render(<Header/>)
