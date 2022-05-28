import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thu',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sun ',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class AreaCharts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 11" />
            <XAxis dataKey="name" fill='rgba(156, 156, 156, 1)' />
            <YAxis fill='rgba(156, 156, 156, 1)'/>
            <Tooltip />
            <Area  style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%), #2D14C4;'}} type="monotone" dataKey="uv" stroke="rgba(38, 12, 188, 1)" fill="rgba(103, 86, 255, 1)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
