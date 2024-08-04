/* eslint-disable @typescript-eslint/no-explicit-any */
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

function ActivityStatisticChart() {
  const data = {
    labels: ["", "26", "27", "28", "29", "30", "31", "01", ""],
    datasets: [
      {
        fill: true,
        data: [35, 58, 30, 70, 55, 60, 20, 50, 35],
        borderColor: function (context: { chart: any }) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(0, 0, chartArea.width, 0);
          gradient.addColorStop(0, "#13CBD5");
          gradient.addColorStop(1, "#089BAB");
          return gradient;
        },
        backgroundColor: function (context: { chart: any }) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "#A4DDE8");
          gradient.addColorStop(0.7, "rgba(248, 252, 252, 0.5");

          return gradient;
        },
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "200px" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default ActivityStatisticChart;
