import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    expenses: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    expenses: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    expenses: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thu',
    expenses: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    expenses: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    expenses: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sun ',
    expenses: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class AreaCharts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer >
          <AreaChart
            style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%), #2D14C4;'}}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 7" />
            <XAxis  dataKey="name" fill='rgba(156, 156, 156, 1)' />
            <YAxis fill='rgba(156, 156, 156, 1)'/>
            <Tooltip />
            <Area type="monotone" dataKey="expenses" stroke="rgba(38, 12, 188, 1)" fill="rgba(103, 86, 255, 1)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
