import React, { useEffect, useState } from "react";
import Charts from "./components/charts";
import TrafficTable from "./components/tables";
import { fetchHourlyTraffic, fetchIpTraffic } from "./utils/api";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [hourlyTraffic, setHourlyTraffic] = useState([]);
  const [ipTraffic, setIpTraffic] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hourlyData = await fetchHourlyTraffic();
        const ipData = await fetchIpTraffic();
        setHourlyTraffic(hourlyData);
        setIpTraffic(ipData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
        <h1>Log Parser Dashboard</h1>
      </nav>

      {loading ? (
        <p className="loading-text">Loading data...</p>
      ) : (
        <>
          <div className="section">
            <Charts data={hourlyTraffic} />
          </div>
         
            <div className="table-container">
              <h2>IP Traffic Details</h2>
              <TrafficTable data={ipTraffic} />
            </div>
        
          <div className="hari">copyright@hari2025</div>
        </>
      )}
    </div>
  );
};

export default App;
