import { React, useState, useContext } from 'react'
import Chart from 'react-apexcharts'
import DataContext from "../Context/DataContext";
function Comparison() {
  const context = useContext(DataContext);
  const { data,compareData,chintu,pintu } = context;
  console.log(chintu)
  console.log(pintu)
  const [chartdata, setchartdata] = useState({
          
    series: [{
      name: 'Tata Consultancy Services Ltd',
      data: [43.32, 31.71, 13.53, 2.56, 17.01]
    }, {
      name: 'Infosys Ltd',
      data: [28.99, 27.53, 8.04, 2.0, 20.71]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Return on Equity', 'PE Ratio', 'PB Ratio', 'Current Ratio', 'Revenue Growth'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    },
  
  
  })
  return (
    <div className='comparisonBar'>
      <Chart options={chartdata.options} series={chartdata.series} type="bar" width={750} />
    </div>


  )
}

export default Comparison