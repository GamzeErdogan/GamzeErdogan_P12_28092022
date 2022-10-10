import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
const AddPieChart = ({props}) => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#FBFBFB', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div>
              <PieChart width={250} height={250}>
                    <Pie
                        data={[{ value: data }, { value: 1 - data }]}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}
                        fill="transparent"
                        stroke="transparent"
                    >
                        <Cell fill="red" />
                        <Cell fill="white" />
                    </Pie>
                </PieChart>
    </div>
  )
}

export default AddPieChart