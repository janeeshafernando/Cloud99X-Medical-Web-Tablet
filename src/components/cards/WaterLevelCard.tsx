import WhaleEmoji from "../../assets/whale-emoji.png";
import ProgressChart from "../charts/ProgressChart";

function WaterLevelCard() {
  return (
    <div className="bg-white ml-36 w-[325px] h-auto rounded-[30px] shadow-md p-6 mt-5">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base text-gray-400 ">Drunk </h2>
            <img
              src={WhaleEmoji}
              alt="whale-emoji"
              className="w-[16px] h-[16px]"
            />
          </div>
          <p className="text-[20px] text-slate-850 font-medium mt-2">
            1250 ml{" "}
            <span className="text-gray-350 font-light text-[20px]">
              / 2000 ml
            </span>
          </p>
        </div>
        <div className="-mb-4">
          <ProgressChart
            width="100px"
            height="100px"
            mainText="750"
            subText="ml left"
            mainFontSize="14px"
            mainTextColor="#089BAB"
            subTextFontWeight="normal"
            data={[800, 200]}
            borderWidth={[0, 3]}
            cutout="80%"
            remainingColor="#CEEBEE"
            gradientStartColor="#16C0C0"
            gradientEndColor="#089BAB"
          />
        </div>
      </div>
    </div>
  );
}

export default WaterLevelCard;
