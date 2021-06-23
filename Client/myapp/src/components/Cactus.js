import React, {Component} from "react";
import Axios from "axios";
import {Bar} from 'react-chartjs-2';

async function axiosTest() {
  const response = await Axios.get("http://localhost:3002/mota")
  return response.data
}

var data = axiosTest();
var labels_array = [];
var temperatura_array = [];
var humedad_array = [];
var soil_array = [];
data.then(function(result) {
  result.map((val) => {
    labels_array.push(val.toma);
    temperatura_array.push(val.temperatura);
    humedad_array.push(val.humedad);
    soil_array.push(val.soil);
  });
});

class Chart extends Component{
  constructor(props){
    super(props);
    this.state  = {
      chart_temperatura:{
        labels: labels_array,
        datasets: [
          {
            label:'Temperatura',
            data: temperatura_array,
            backgroundColor:['rgba(128,232,161,0.7)']
          }
        ]
      },
      chart_humedad:{
        labels: labels_array,
        datasets: [
          {
            label:'Humedad',
            data: humedad_array,
            backgroundColor:['rgba(29,59,231,0.6)']
          }
        ]
      },
      chart_soil:{
        labels: labels_array,
        datasets: [
          {
            label:'Soil',
            data: soil_array,
            backgroundColor:['rgba(230,59,128,0.6)']
          }
        ]
      }
    }
  }
  
  render() {
    return (
      <div>
      <div className="chart_temperatura" >
        <Bar
          data={this.state.chart_temperatura}
          options={{
            maintainAspectRation: false
          }}
        />
      </div>
      <div className="chart_humedad" >
      <Bar
        data={this.state.chart_humedad}
          options={{
          maintainAspectRation: false
          }}
      />
      </div>
      <div className="chart_soil" >
      <Bar
        data={this.state.chart_soil}
          options={{
          maintainAspectRation: false
          }}
      />
      </div>
      </div>
      )
  
  }
}


export default Chart;
