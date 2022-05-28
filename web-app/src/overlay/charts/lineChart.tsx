import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts';
const data = [
    {name: 'Jan', uv: 27, pv: 0, amt: 2400}, 
    {name: 'Feb', uv: 39, pv: 0, amt: 2400}, 
    {name: 'Mar', uv: 28, pv: 0, amt: 2400}, 
    {name: 'Apr', uv: 39, pv: 0, amt: 2400},
    {name: 'May', uv: 31, pv: 0, amt: 2400},
    {name: 'Jun', uv: 27, pv: 0, amt: 2400}];

const LineCharts = () => {
  return (
  <LineChart  height={200} width={380} style={{width: '100% !important', height: '200px !important'}}  data={data} >
    <Line type="monotone" dataKey="uv" stroke="rgba(105, 121, 248, 1)" height={35} />
    <CartesianGrid stroke="#FAF6F6"  />
    <XAxis dataKey="name" stroke='rgba(153, 153, 153, 1)'/>
    <Tooltip/>
  </LineChart>)
}
export default LineCharts;