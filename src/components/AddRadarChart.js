import React from 'react'
import useFetch from '../useFetch';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import styled from 'styled-components';

const StyleContainerRadarChartDiv = styled.div`
    width:258px;
    height:263px;
    background-color:#282D30;
    border-radius:5px;
`
const AddRadarChart = ({userID}) => {
  const {data:radarCharte} = useFetch("http://localhost:3000/user/" + userID + "/performance");
  const kind = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Force',
    4: 'Endurance',
    5: 'Energie',
    6: 'Cardio',
}
const getKind = (indexKind) => {
  return kind[indexKind]
}
  return (
    <StyleContainerRadarChartDiv>
        <RadarChart outerRadius={90} width={268} height={263} data={radarCharte?.data}>
            <PolarGrid />
            <PolarAngleAxis
                className="text-information"
                stroke="white"
                dataKey="kind"
                domain={[0, 150]}
                axisLine={false}
                tickCount={6}
                tickFormatter={getKind}
                fontSize='12px'
            />
              <Radar dataKey="value" stroke="none" fill="red" fillOpacity={0.6} />
        </RadarChart>
    </StyleContainerRadarChartDiv>
  )
}

export default AddRadarChart