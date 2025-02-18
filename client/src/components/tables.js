import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Label } from "recharts";
import "./tableStyle.css";

const TableWithChart = () => {
  const [ipData, setIpData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://log-parser-backend-296i.onrender.com/api/ip-data");
        const data = await response.json();
        setIpData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-chart-container">
      <div className="grid-container">
        {/* Table */}
        <div className="table-wrapper">
          <h3 className="table-title">Top 10 IP Addresses</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th>IP Address</th>
                <th>Occurrences</th>
              </tr>
            </thead>
            <tbody>
              {ipData.length > 0 ? (
                ipData.map((item, index) => (
                  <tr key={item.IP} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                    <td>{item.IP}</td>
                    <td>{item.Occurrences}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="no-data">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Chart */}
        <div className="chart-wrapper">
          <h3 className="chart-title">Top 10 IP Addresses Chart</h3>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={ipData} margin={{ top: 20, right: 50, left: 50, bottom: 50 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="IP" 
                type="category" 
                tick={{ fontSize: 12, angle: -45, textAnchor: "end" }}
                interval={0} 
                height={80} // Adjust height for better visibility
              >
                <Label value="IP Address" offset={-30} position="insideBottom" fontSize={18} />
              </XAxis>
              <YAxis type="number" tick={{ fontSize: 12 }}>
                <Label value="Occurrences" offset={10} angle={-90} position="insideLeft" fontSize={18} />
              </YAxis>
              <Tooltip cursor={{ fill: "#f0f0f0" }} />
              <Bar dataKey="Occurrences" fill="#3b82f6" barSize={25} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TableWithChart;
