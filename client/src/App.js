import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import Barchart from "./Components/Barchart";
import axios from "axios";
import { useEffect } from "react";

Chart.register(CategoryScale);

export default function App() {
  const [plotData, setplotData] = useState();
  const dataset1 =[]
  const dataset2=[]
  const Chartdata = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Popularity of colours',
          data:dataset1,
          // you can set indiviual colors for each bar
          backgroundColor: [
            'blue',
            'green',
            'red'
          ],
          borderWidth: 1,
        }
    ]
  }
 
 
    const sendRequest = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      
      const data = await response.data;
      setplotData(data);
     
       for(const val of data){
        dataset1.push(val.id)
       }
       console.log(dataset1);
  
    }
  
  
  return (
    <div className="App">
        <button onClick={sendRequest}>Send Request</button>
      <Barchart chartData={Chartdata} />
      {plotData && plotData.map((item=>{
         return(
          <h1>{dataset1}</h1>
         )
      }))}
    </div>
  );

  }

// function App() {
  // const [data, setData] = useState();
  // const sendRequest = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //   const data = await response.data;
  //   setData(data);
  //   console.log(data);

  // };
  
//   Chart.register(CategoryScale);


//   return (
//     <div className="App">
//     
//       <div>
//       <Bar
//         data={[1,2,3]}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: "Users Gained between 2016-2020"
//             },
//             legend: {
//               display: true
//             }
//           }
//         }}
//       />
//       </div>
        
