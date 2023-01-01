import React from "react";
class ShoesList extends React.Component{
    constructor(props){
        super(props)
        this.state={
        allShoes:[]
        }
        this.getAllShoes = this.getAllShoes.bind(this)
    }
    getAllShoes(){
        fetch('http://localhost:8080/api/books').then(res => {
            res.json()
        }).then(result => {
            this.setState({
                allBooks: result
            })
        }).catch(console.log)
    }
    render(){
        return(
            <div>
            <button type="button" onClick={this.getAllShoes}>Get Shoes</button>
            <button type="button">Add Shoes</button>
            </div>
        )
    }
}

export default ShoesList;