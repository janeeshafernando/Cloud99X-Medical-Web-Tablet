import { useState, useEffect } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface DateItem {
  date: Date;
  isCurrentDate: boolean;
}

interface DateSelectorCardProps {
  showGreenDot?: boolean;
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
  backgroundColor?: string;
  showShadow?: boolean;
  width?: string;
  height?: string;
  gap?: string;
}

function DateSelectorCard({
  showGreenDot = true,
  initialDate = new Date(),
  onDateSelect,
  backgroundColor = "bg-white",
  showShadow = true,
  width,
  height,
  gap
}: DateSelectorCardProps) {
  const [currentDate, setCurrentDate] = useState<Date>(initialDate);
  const [dates, setDates] = useState<DateItem[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

  useEffect(() => {
    const getDates = () => {
      const dateArray: DateItem[] = [];
      for (let i = -3; i <= 3; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);
        dateArray.push({
          date,
          isCurrentDate: i === 0,
        });
      }
      setDates(dateArray);
    };
    getDates();
  }, [currentDate]);

  const handlePrevious = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const containerClasses = `flex items-center justify-center space-x-4 mt-2 text-base ${backgroundColor} rounded-[30px] ${
    showShadow ? "shadow-lg" : ""
  } ${width} ${height}`;

  return (
    <div className={containerClasses}>
      <button onClick={handlePrevious} className="flex-shrink-0">
        <ChevronLeftIcon className="h-5 w-5 text-gray-400 ml-3 mt-[10px]" />
      </button>
      <div className={`flex justify-center flex-grow ${gap} mt-4`}>
        {dates.map((dateItem, index) => (
          <div
            key={dateItem.date.toISOString()}
            className={`flex flex-col items-center cursor-pointer font-semibold ${
              dateItem.date.toDateString() === selectedDate.toDateString()
                ? "text-orange-350"
                : index === dates.length - 1
                ? "text-gray-350"
                : "text-black"
            }`}
            onClick={() => handleDateClick(dateItem.date)}
          >
            <span className="text-base">
              {dateItem.date.getDate().toString().padStart(2, "0")}
            </span>
            <div className="w-1 h-1 mt-1">
              {showGreenDot &&
                dateItem.date.toDateString() ===
                  selectedDate.toDateString() && (
                  <div className="w-1 h-1 bg-cyan-150 rounded-full" />
                )}
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="flex-shrink-0">
        <ChevronRightIcon className="h-5 w-5 text-gray-400 mr-3 mt-[10px]" />
      </button>
    </div>
  );
}

export default DateSelectorCard;
