import React from "react";

function Header(props) {
   return (
    <div id="header">
        <header>
            <h1>{props.blogName}</h1>
            
        </header>
    </div>
   )

}
export default Header;