/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ProgressChartProps {
  width: string;
  height: string;
  mainText: string;
  subText: string;
  mainFontSize: string;
  subTextFontWeight: string;
  mainTextColor: string;
  data: [number, number];
  borderWidth: [number, number];
  cutout: string;
  gradientStartColor: string;
  gradientEndColor: string;
  remainingColor: string;
}

const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart: any, _args: any, _options: any) => {
    const { ctx, width, height } = chart;
    // Access centerText from the chart options
    const centerText = chart.options.plugins.centerText;

    if (!centerText) {
      console.warn("centerText options are not provided");
      return;
    }

    const {
      mainText,
      subText,
      mainFontSize,
      mainTextColor,
      subTextFontWeight,
    } = centerText;
    ctx.restore();

    ctx.font = `${mainFontSize} Poppins`;
    ctx.fillStyle = mainTextColor;
    ctx.textBaseline = "middle";
    const text = mainText;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2 - 10;

    ctx.fillText(text, textX, textY);

    ctx.font = `${subTextFontWeight} 12px Poppins`;
    ctx.fillStyle = "#888C96";
    const subtextX = Math.round((width - ctx.measureText(subText).width) / 2);
    const subtextY = height / 2 + 15;

    ctx.fillText(subText, subtextX, subtextY);
    ctx.save();
  },
};

function ProgressChart({
  width,
  height,
  mainText,
  subText,
  mainFontSize,
  mainTextColor,
  subTextFontWeight,
  remainingColor,
  data,
  borderWidth,
  cutout,
  gradientStartColor,
  gradientEndColor,
}: ProgressChartProps) {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const gradient = chart.ctx.createLinearGradient(0, 0, chart.width, 0);
      gradient.addColorStop(0, gradientStartColor);
      gradient.addColorStop(1, gradientEndColor);
      chart.data.datasets[0].backgroundColor = [gradient, remainingColor];
      chart.update();
    }
  });

  const chartData = {
    datasets: [
      {
        data: data,
        borderWidth: borderWidth,
      },
    ],
    labels: ["Burned", "Remaining"],
  };

  const options = {
    cutout: cutout,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      centerText: {
        mainText,
        subText,
        mainFontSize,
        mainTextColor,
        subTextFontWeight,
      },
    },
  };

  return (
    <div style={{ position: "relative", width: width, height: height }}>
      <Doughnut
        ref={chartRef}
        data={chartData}
        options={options}
        plugins={[centerTextPlugin]}
      />
    </div>
  );
}

export default ProgressChart;
