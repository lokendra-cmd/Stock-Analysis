import React from 'react'
import { useState } from "react";
import axios from "axios";
import DataContext from './DataContext';

function DataState(props) {
    const [data, setData] = useState({
        "5 Year CAGR": {
          "1": null
        },
        "Close Price": {
          "1": null
        },
        "Current Ratio": {
          "1": null
        },
        "Debt to Equity": {
          "1": null
        },
        "Dividend Yield": {
          "1": null
        },
        "EBITDA": {
          "1": null
        },
        "Earnings Per Share": {
          "1": null
        },
        "Market Cap Category": {
          "1": null
        },
        "Market Capital": {
          "1": null
        },
        "Name": {
          "1": null
        },
        "Net Income": {
          "1": null
        },
        "Net Profit Margin": {
          "1": null
        },
        "PB Ratio": {
          "1": null
        },
        "PE Ratio": {
          "1":null
        },
        "Promoters Holding": {
          "1": null
        },
        "Return on Equity": {
          "1":null
        },
        "Revenue Growth": {
          "1": null
        },
        "Sector": {
          "1": null
        },
        "Symbol": {
          "1": null
        },
        "Total Revenue": {
          "1": null
        },
        "Unnamed: 0": {
          "1": null
        }
      })

    const getData = async (symbol) => {
        let payload={
            "symbol":symbol
        }
        const result = await axios.post('http://127.0.0.1:5000/predict',payload)
        setData(result.data);
        console.log(Object.values(data['5 Year CAGR']))
        
        
    };


    return (
        <DataContext.Provider value={{data,getData}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState;