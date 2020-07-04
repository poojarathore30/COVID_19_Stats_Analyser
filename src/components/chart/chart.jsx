import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { fetchDailyData } from '../../api/index'
import './charts.css';
const Chart = ({data,country}) => {

    const [dailyData, SetDailyData] = useState({});
console.log(data);

    useEffect(() => {
        const fetchapi = async () => {
            SetDailyData(await fetchDailyData());
        }
        console.log(dailyData);

        fetchapi()
    }, [])

    const lineChart = (
        dailyData.length  ?
            (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    },{
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        fill: true,
                        backgroundColor: 'rgba(255,0,0,0.5)'
                    }]
                }}
            />)
            : null
    );
    const BarChart=(
        data.confirmed?
      <Bar 
      data={{
      labels:['Infected','Recovered','Deaths'],
      datasets:[{
          label:'People',
          backgroundColor:['rgba(0,0, 255, 0.5)','rgba(0,255, 0, 0.5)','rgba(255,0,0, 0.5)'],
          data:[data.confirmed.value,data.recovered.value,data.deaths.value]
      }]
      }}
      options={{
          legend:{display : false},
          title:{display:true,text:`Current State in ${country} `}
      }}
      />
      :"Loading"
        
    );
    return (
        <div className='container-chart'>
       
           {country ? BarChart : lineChart}
        </div>)
}

export default Chart;
