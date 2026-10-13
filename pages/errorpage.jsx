import React from "react";

function Error(props){
    const message=props.message;
    return(
        <span className="text-red-500 m-0">{message}</span>
    )
}
export default Error