import React from "react";
import Api from "./Api";
import "./index.css"

const Displayf = ({data,sq}) => {
        console.log(sq);
    if (data && sq){
    return (
        <div className="container">
    <h1>{data.id}</h1>
    <p>{data.title}</p>
    <p>{sq.school}</p>
    </div>
    );
} else{
    return <div>Nonexistent</div>
}





};
export default Displayf;
