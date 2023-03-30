import { React, useState } from 'react'
import Chart from 'react-apexcharts'
function BarChart() {
    const [data, setData] = useState(
        {

            series: [{
                data: [10.50, 9.23, 7.81, 7.13, 6.16, 4.45, 4.35, 3.28,3.34,2.99]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                },
                
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: [
                        ['Reliance'],
                        ['HDFC Bank'],
                        ['ICICI Bank'],
                        ['Infosys'],
                        ['HDFC'],
                        ['TCS'],
                        ['ITC Limited'],
                        ['Kotak Mahindra Bank'],
                        ['L & T'],
                        ['Axis Bank']
                    ],
                    labels: {
                        style: {
                            
                            fontSize: '12px'
                        }
                    }
                }
            },


        }
    )
    return (
        <div className='BarChart'>
             Top 10 Nifty 50 stocks weightage
            <Chart options={data.options} series={data.series} type="bar" height={350} />
        </div>


    )
}

export default BarChart