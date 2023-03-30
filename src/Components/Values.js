import { React, useContext } from 'react'
import DataContext from "../Context/DataContext";

function Values() {
  const context = useContext(DataContext);
  const { data } = context;

  return (
    <>
      <div className='compareMenuGrid'>
        <div>
          <p className='symbolName'>
            {Object.values(data['Name']) + " : " + Object.values(data['Close Price'])}
          </p>
          <p className='sectorName'>
            {Object.values(data['Sector'])}
          </p>
        </div>

        <div className='Comparebutton'>
          <button>Compare</button>
        </div>

      </div>

      <div className='grid3'>
        <div className='girdItem'>5 Year CAGR
          <p className='values'>
            {Object.values(data['5 Year CAGR'])}

          </p>
        </div>
        <div className='girdItem'>Current Ratio
          <p className='values'>
            {Object.values(data['Current Ratio'])}
          </p>
        </div>
        <div className='girdItem'>Debt to Equity
          <p className='values'>
            {Object.values(data['Debt to Equity'])}
          </p>
        </div>
        <div className='girdItem'>Dividend Yield
          <p className='values'>
            {Object.values(data['Dividend Yield'])}
          </p>
        </div>
        <div className='girdItem'>EBITDA
          <p className='values'>
            {Object.values(data['EBITDA'])}
          </p>
        </div>
        <div className='girdItem'>Earnings Per Share
          <p className='values'>
            {Object.values(data['Earnings Per Share'])}
          </p>
        </div>
        <div className='girdItem'>Market Capital
          <p className='values'>
            {Object.values(data['Market Capital'])}
          </p>
        </div>
        <div className='girdItem'>Net Income
          <p className='values'>
            {Object.values(data['Net Income'])}
          </p>
        </div>
        <div className='girdItem'>Net Profit Margin
          <p className='values'>
            {Object.values(data['Net Profit Margin'])}
          </p>
        </div>
        <div className='girdItem'>PB Ratio
          <p className='values'>
            {Object.values(data['PB Ratio'])}
          </p>
        </div>
        <div className='girdItem'>PE Ratio
          <p className='values'>
            {Object.values(data['PE Ratio'])}
          </p>
        </div>
        <div className='girdItem'>Promoters Holding
          <p className='values'>
            {Object.values(data['Promoters Holding'])}
          </p>
        </div>
        <div className='girdItem'>Return on Equity
          <p className='values'>
            {Object.values(data['Return on Equity'])}
          </p>
        </div>
        <div className='girdItem'>Revenue Growth
          <p className='values'>
            {Object.values(data['Revenue Growth'])}
          </p>
        </div>
        <div className='girdItem'>Total Revenue
          <p className='values'>
            {Object.values(data['Total Revenue'])}
          </p>
        </div>
      </div>
    </>
  )
}

export default Values