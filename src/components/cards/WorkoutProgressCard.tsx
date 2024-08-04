import ProgressChart from "../charts/ProgressChart";

function WorkoutProgressCard() {
  return (
    <div className="bg-white w-[300px] h-[440px] ml-[130px] mt-7 rounded-[30px] shadow-lg mb-4">
      <div className="flex gap-3">
        <div>
          <h2 className=" text-gray-350 font-medium ml-10 py-7">Walked🐾</h2>
          <p className="text-[20px] text-slate-850 ml-10 mt-[-20px]">
            4532 steps
          </p>
          <h2 className="mt-8 ml-10">My Goal🎗</h2>
          <p className="text-[20px] text-slate-850 ml-10 mt-2">6500 steps</p>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <ProgressChart
            width="121px"
            height="121px"
            mainText="4532"
            subText="left"
            mainFontSize="20px"
            mainTextColor="#089BAB"
            subTextFontWeight="bold"
            data={[800, 200]}
            borderWidth={[5, 9]}
            cutout="80%"
            remainingColor="#CEEBEE"
            gradientStartColor="#16C0C0"
            gradientEndColor="#089BAB"
          />
        </div>
      </div>
      <hr className="mt-6 border-t border-gray-300" />
      {/* New Burned section */}
      <div className="flex gap-3 mt-2">
        <div>
          <h2 className="text-gray-350 font-medium ml-10 py-7">Burned🔥</h2>
          <p className="text-[20px] text-slate-850 ml-10 mt-[-20px]">
            325 kcal
          </p>
          <h2 className="mt-8 ml-10">My Goal🏆</h2>
          <p className="text-[20px] text-slate-850 ml-10 mt-2">800 kcal</p>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <ProgressChart
            width="121px"
            height="121px"
            mainText="325"
            subText="left"
            mainFontSize="20px"
            mainTextColor="#F87D57"
            subTextFontWeight="bold"
            data={[325, 475]}
            borderWidth={[5, 9]}
            cutout="80%"
            remainingColor="#FFD8BE"
            gradientStartColor="#F87D57"
            gradientEndColor="#FEAD54"
          />
        </div>
      </div>

      {/* Edit goals button */}
      <a href="#" className="text-cyan-150 ml-[125px] text-xs mt-12 underline">
        Edit goals
      </a>
    </div>
  );
}

export default WorkoutProgressCard;
