import React from "react";
import ReactDOM from  "react-dom";
import App from  './components/icon/example/App'

const Start=()=>{
    return(
        <div>
            <App></App>
        </div>
    )
 }
 export default Start;
ReactDOM.render(<Start/>,document.getElementById('app'));