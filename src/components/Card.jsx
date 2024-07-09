
import React from 'react'
//rfce
function Card(props) {
    // let Title="Zomato";
    let Decription="To order food online"
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{Decription}</p>
        </div>
    )
}

export default Card