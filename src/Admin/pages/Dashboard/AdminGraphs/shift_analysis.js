import React from 'react';
import { Line } from 'react-chartjs-2';
import { useState, useEffect} from 'react';
import Axios from 'axios';

export default function LineChart(){
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let s_date = [];
    let balance1 = [];
    let balance2 = [];

    Axios
      .get("http://localhost:3006/shift_analysis")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          var d1 = dataObj.s_date
          var dt = new Date(d1);
          var options = {month : "short", day: "numeric", year: "numeric"};
          s_date.push(dt.toLocaleDateString("en-US", options));
          balance1.push(parseInt(dataObj.b1));
          balance2.push(parseInt(dataObj.b2));
        }
        setChartData({
          labels: s_date,
          datasets: [
            {
              label: "Shift1",
              data: balance1,
              backgroundColor: 'rgba(88, 61, 114, 0.3)',
              borderColor: 'rgb(88, 61, 114)',
              hoverBackgroundColor: 'rgba(88, 61, 114, 0.3)'
            },
            {
              label: "Shift2",
              data: balance2,
              backgroundColor: 'rgba(241, 70, 104, 0.3)',
              borderColor: 'rgb(241, 70, 104)',
              hoverBackgroundColor: 'rgba(241, 70, 104, 0.3)'
            },
          ],
        });
      })
      .catch(err => {
        console.log(err);
      });
  };


  useEffect(() => {
    chart();
  }, []);


  return (
    <div>
      <div className='header'>
        <h2 className='title'>Shift wise balance for the week</h2>
        <br/>
      </div>
      <Line data={chartData}
      options={
        {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
        }
      } />
    </div>
  )
};



