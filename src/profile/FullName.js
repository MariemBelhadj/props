import React from "react";

const FullName=({firstName,lastName,name})=>{
   return(
    <div>
        <div>
            <span>First Name: {firstName}</span>
        </div>
        <div>
            <span>Last Name: {lastName}</span>
        </div>
        <button onClick={()=>name(firstName)}>User</button>
    </div>
   )

}
export default FullName