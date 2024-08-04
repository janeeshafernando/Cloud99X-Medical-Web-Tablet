import PeachEmoji from "../../assets/peach-emoji.png";
import FireballEmoji from "../../assets/fireball-emoji.png";
import NutrientBars from "../atoms/NutrientBars";
import ProgressChart from "../charts/ProgressChart";

function CalorieCounterCard() {
  return (
    <div>
      <div className="mt-5 ml-40 flex justify-between items-center w-[270px]">
        <h1 className="text-cyan-150 text-[18px] font-normal">Progress</h1>
        <p className="text-gray-350 text-[16px] font-normal">26 Aug 2019</p>
      </div>

      <div className="bg-white w-[325px] h-auto rounded-[30px] shadow-md mt-5 ml-36 p-6 font-medium text-base">
        <h3>Calorie counter</h3>
        <div className="flex">
          <div className="w-[50%]">
            <div className="mt-5 flex gap-2">
              <h2 className="text-base text-gray-350 items-center justify-between">
                Eaten
              </h2>
              <img
                src={PeachEmoji}
                alt="peach-emoji"
                className="w-[16px] h-[16px]"
              />
            </div>
            <p className="text-[20px] text-slate-850 font-medium mt-3">
              1560 kcal
            </p>
            <div className="mt-5 flex gap-2">
              <h2 className="text-base text-gray-350 items-center justify-between">
                Burned
              </h2>
              <img
                src={FireballEmoji}
                alt="peach-emoji"
                className="w-[16px] h-[16px]"
              />
            </div>
            <p className="text-[20px] text-slate-850 font-medium mt-3">
              350 kcal
            </p>
          </div>

          <div className="w-[50%] flex justify-center items-center">
            <ProgressChart
              width="147px"
              height="147px"
              mainText="320"
              subText="kcal left"
              mainFontSize="28px"
              mainTextColor="#089BAB"
              subTextFontWeight="normal"
              data={[800, 200]}
              borderWidth={[5, 9]}
              cutout="80%"
              remainingColor="#CEEBEE"
              gradientStartColor="#16C0C0"
              gradientEndColor="#089BAB"
            />
          </div>
        </div>

        <div className="flex justify-between space-x-4">
          <NutrientBars
            name="Carbs"
            value={24}
            maxValue={100}
            color="#FF738F"
            baseColor="#FFD6DE"
          />
          <NutrientBars
            name="Protein"
            value={56}
            maxValue={100}
            color="#738FFF"
            baseColor="#D6DEFF"
          />
          <NutrientBars
            name="Fat"
            value={16}
            maxValue={100}
            color="#B8EEA4"
            baseColor="#DBFCDD"
          />
        </div>
      </div>
    </div>
  );
}

export default CalorieCounterCard;
