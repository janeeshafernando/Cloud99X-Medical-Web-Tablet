/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, // x-axis
  LinearScale, // y-axis
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function HealthCurveChart() {
  const data = {
    labels: [
      "2016",
      "",
      "",
      "",
      "",
      "2017",
      "",
      "",
      "",
      "",
      "2018",
      "",
      "",
      "",
      "",
      "2019",
    ],
    datasets: [
      {
        label: "My Data",
        data: [40, 50, 40, 38, 63, 55, 45, 50, 48, 20, 22, 38, 10, 8, 50],
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
        pointBackgroundColor: "#089BAB",
        pointRadius: function (context: {
          dataIndex: any;
          dataset: { data: string | any[] };
        }) {
          const index = context.dataIndex;
          const count = context.dataset.data.length;
          return index === 0 || index === count - 1 ? 5 : 0;
        },
        tension: 0.4,
      },
      {
        label: "Lower Average",
        data: [25, 27, 29, 29, 29, 10, 25, 24, 15, 10, 15, 30, 20, 13, 15, 15],
        borderColor: "rgba(230, 245, 246)",
        backgroundColor: "rgba(255,255,255)",
        pointRadius: 0,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Higher Average",
        data: [50, 43, 52, 70, 60, 50, 60, 68, 72, 71, 65, 55, 50, 55, 65, 70],
        borderColor: "rgba(230, 245, 246)",
        backgroundColor: "rgba(206, 235, 238,0.5)",
        pointRadius: 0,
        tension: 0.4,
        fill:true
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "black",
          padding: 30,
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      title: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: -420,
      },
    },
    scales: {
      y: {
        grid: {
          display: true,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: true,
        },
        ticks: {
          callback: function (_value: any, index: any, _values: any) {
            if (data.labels[index]) {
              return data.labels[index]; // Display only x-axis labels (years)
            }
            return "";
          },
        },
      },
    },
  };
  return <Line options={options} data={data} />;
}

export default HealthCurveChart;
