import React from "react";
class Todonew extends React.Component{
    render(){
        return(
<ul>
    {this.props.todoItems.map(item => (
        <li key={item.id}>{item.text}</li>
    ))}
</ul>
        )
    }
}

export default Todonew;