import ProgressBar from "@ramonak/react-progress-bar";

interface NutrientProps {
  name: string;
  value: number;
  maxValue: number;
  color: string;
  baseColor: string;
}

function NutrientBars({
  name,
  value,
  maxValue,
  color,
  baseColor,
}: NutrientProps) {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="mt-5">
      <span className="text-sm font-medium text-cyan-150">{name}</span>

      <ProgressBar
        completed={percentage}
        customLabel=" "
        bgColor={color}
        baseBgColor={baseColor}
        height="12px"
        width="56px"
        isLabelVisible={false}
      />
      <span className="text-xs font-light text-gray-350">{value}g left</span>
    </div>
  );
}

export default NutrientBars;
