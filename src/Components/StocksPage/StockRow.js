import React, { Component } from "react";

import StocksPageTile from "./StocksPageTiles.js";
import StocksPage from "./StocksPage.js";

class StockRow extends Component {
    constructor(props){
        super(props);
        this.state={
            data: {}
        }
    }
    applyData(data){
        this.setState({
            data: data
        })
    }
    componentDidMount(){
       
      stock.latestPrice(this.props.ticker,this.applyData.bind(this))
      
       }
    
    render (){
        return <tr>
            <td>{this.props.ticker}</td>
            <td>{this.state.data.price}</td>
            <td>{this.state.data.date}</td>
            <td>{this.state.data.time}</td>
            </tr>
    }
}
export default StockRow;