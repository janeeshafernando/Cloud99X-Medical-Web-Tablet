import { useState } from "react";
function TimeFrameButtons() {
  const [activeTimeframe, setActiveTimeframe] = useState("Y");
  const timeframes = ["D", "W", "M", "Y"];
  return (
    <div className="ml-80">
      <div className="flex space-x-2">
        {timeframes.map((timeframe) => (
          <button
            key={timeframe}
            className={`w-10 h-10 rounded-2xl flex items-center justify-center
          ${
            activeTimeframe === timeframe
              ? "bg-cyan-150 text-white"
              : "bg-cyan-150 bg-opacity-20 text-cyan-150"
          }`}
            onClick={() => setActiveTimeframe(timeframe)}
          >
            {timeframe}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TimeFrameButtons;
