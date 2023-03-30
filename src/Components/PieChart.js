import { React, useState } from 'react'
import Chart from 'react-apexcharts'
function PieChart() {
  const [data, setData] = useState(
    {
      series: [37.40, 14.72, 12.27, 9.35, 5.60, 3.17, 3.74, 2.97, 3.34, 2.43, 2.06, 1.87, 0.59, 0.48],
      options: {
        chart: {
          width: 380,
          type: 'pie',
          forecolor:"#ffffff"
        },
        labels: ['Financial Services', 'Information Technology', 'Oil, Gas & Consumable Fuels', 'Fast Moving Consumer Goods', 'Automobile and Auto Components', 'Metals & Mining', "Healthcare", 'Consumer Durables', 'Construction', 'Telecommunication', 'Power', 'Construction Materials', 'Services', 'Chemicals'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              labels: {
                colors: '#ffffff'
              },
              position: 'bottom'
            }
          }
        }],
      },


    }


  )
  return (
    <div className='pieChart'>
      Weightage of sectors in Nifty 50
      <Chart options={data.options} series={data.series} type="pie" width={"600px"} />
    </div>
  )
}

export default PieChart