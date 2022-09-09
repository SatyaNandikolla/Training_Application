import React, { Component } from "react";
export default class CInline_Class extends Component{
    
    render(){
        const {id,title,description,priority}=this.props.todo
    return(
        <div>
            <h2>Inline Condition--Class Component</h2>
            {id==1 &&<p>id-{id}</p>}
            {title && <p>title-{title}</p>}
            <p>description-{description}</p>
            {priority > 5 ? <p>priority--High</p> : <p>priority - Normal</p>}
        </div>
    )
    }
}