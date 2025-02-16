import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Label } from "recharts";
import "./chartStyle.css";


export default function Charts({ data }) {
  console.log("Chart Data:", data); 


  // const processChartData = (data) => {
  //   const seenHours = new Set();
  //   return data.filter((entry) => {
  //     if (!seenHours.has(entry.Hour)) {
  //       seenHours.add(entry.Hour);
  //       return true;
  //     }
  //     return false;
  //   });
  // };

  // const cleanData = processChartData(data);

  return (
    <div className="chart-container">
      <h2 className="chart-title">Hourly Traffic</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 120, left: 120, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />

          {/* X-Axis */}
          <XAxis dataKey="Hour" tick={{ fontSize: 12 }}>
            <Label value="Hour" offset={-10} position="insideBottom" fontSize={18} />
          </XAxis>

          {/* Y-Axis */}
          <YAxis tick={{ fontSize: 12 }}>
            <Label value="Visitors" angle={-90} position="insideLeft" fontSize={18} />
          </YAxis>

          <Tooltip cursor={{ fill: "#f0f0f0" }} />

          <Bar dataKey="Visitors" fill="#3b82f6" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
