import React from 'react'
import useFetch from '../useFetch'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';


const StyleContainerLineChart = styled.div`
    width:258px;
    height:263px;
    background: #FF0000;
    padding-left:10px;
    color:white;
    border-radius:5px;
`
const LineCharte = ({userID}) => {
    const {data:lineCharte} = useFetch("http://localhost:3000/user/" + userID + "/average-sessions");
    const days = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D',
  }
  const getDay = (indexDay) => {
    return days[indexDay]
}
    return (
    
     <StyleContainerLineChart>
        <h5 style={{opacity:'0.5'}}>Durée moyenne des sessions</h5>
          <LineChart
            width={200}
            height={150}
            data={lineCharte?.sessions}
            margin={{
              top: 10,
              right: 25,
              left: 0,
              bottom: 0,
            }}
            
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="day"
                    stroke="white"
                    opacity={0.5}
                    tickLine={false}
                    dy={-1}
                    tickFormatter={getDay} />
            {/* <YAxis /> */}
            <Tooltip />
            <Line type="monotone" dataKey="sessionLength" stroke="black" fill="white" />
          </LineChart>
      </StyleContainerLineChart>

  )
}

export default LineCharte