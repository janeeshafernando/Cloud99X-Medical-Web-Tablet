import HeaderCard from "../cards/HeaderCard";
import Robot from "../../assets/robot.png";
import TrainingOption from "../cards/TrainingOption";
import GorillaIcon from "../../assets/gorilla.png";
import SnakeIcon from "../../assets/snake.png";
import SnailIcon from "../../assets/snail.png";
import DateSelectorCard from "../cards/DateSelectorCard";
import ActivityStatisticChart from "../charts/ActivityStatisticChart";
import IconButton from "../atoms/IconButton";
import { FaPlus } from "react-icons/fa6";
import TrainingCard from "../cards/TrainingCard";
import { TfiPulse } from "react-icons/tfi";
import WhaleEmoji from "../../assets/whale-emoji.png";

function Exercises() {
  return (
    <div className="bg-white 2xl:ml-14 ml-20 h-full 3xl:w-screen 2xl:w-[857px] rounded-[70px] overflow-hidden">
      <div className="mt-10 ml-12 flex items-center gap-5 mb-5">
        <HeaderCard
          emphasisText="Advice!"
          message="Connect your Apple Watch for better results."
          imageSrc={Robot}
          altText="Robot"
        />
      </div>
      <div className="flex flex-col gap-6 mt-8">
        <p className="text-[28px] text-cyan-150 ml-16">Popular Training</p>
        <div className="flex gap-4 ml-10 -mt-4">
          <TrainingOption
            icon={GorillaIcon}
            title="Power Training"
            calories={395}
          />
          <TrainingOption
            icon={SnakeIcon}
            title="Yoga Training"
            calories={395}
          />
          <TrainingOption icon={SnailIcon} title="Stretching" calories={395} />
        </div>
      </div>
      <div className="flex">
        <div>
          <h2 className="text-[28px] text-cyan-150 ml-16">
            Activity Statistic
          </h2>
          <div className="ml-16 mt-4 flex items-center justify-between gap-52">
            <p>August 2019</p>
            <p className="text-gray-350 font-light">September 2019</p>
          </div>
          <div className="ml-14 -mt-8">
            <DateSelectorCard
              showGreenDot={false}
              backgroundColor=""
              showShadow={false}
              width="w-[429px]"
              height="h-[100px]"
              gap="gap-9"
            />
          </div>
          <div className="ml-16">
            <ActivityStatisticChart />
          </div>
        </div>
        <div className="ml-12">
          <div className="flex">
            <h1 className="text-cyan-150 text-[28px]">My Training</h1>
            <IconButton
              bgColor="bg-teal-150"
              iconColor="text-cyan-150"
              marginTop="mt-0"
              marginRight="ml-20"
              Icon={FaPlus}
              iconHeight="h-[24px]"
              iconWidth="w-[24px]"
            />
          </div>
          <TrainingCard
            title="TRX Cardio"
            burned="350 kcal"
            spent="1h 45m"
            marginLeft="ml-[115px]"
          />
          <TrainingCard
            title="Stretching"
            burned="180 kcal"
            spent="30 m"
            marginLeft="ml-[135px]"
          />
        </div>
      </div>
      <div className="flex mt-10 ml-16">
        <h2 className="text-cyan-150 text-[28px]">Heart Rate</h2>
        <h2 className="text-cyan-150 text-[28px] ml-60">Water Balance</h2>
      </div>
      <div className="flex">
        <div className="mb-14">
          <p className="text-[20px] text-slate-850 ml-16 mt-5">
            💓 <span className="text-[24px]">75 bpm</span>
          </p>
          <p className="text-cyan-150 text-sm ml-[100px] mt-1">Health zone</p>
        </div>
        <div className="mt-6">
          <div className="w-[48px] h-[48px] bg-[#e6f7f7] rounded-2xl flex items-center justify-center ml-14">
            <div className="bg-[#00a0a0] w-[24px] h-[24px] rounded-[6px] flex items-center justify-center">
              <TfiPulse className="h-[14px] w-[14px] text-white font-bold" />
            </div>
          </div>
          <p className="text-cyan-150 text-xs mt-3 ml-12">Check Rate</p>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 ml-40 mt-6">
            <img
              src={WhaleEmoji}
              alt="whale-emoji"
              className="w-[16px] h-[16px]"
            />
            <h2 className="text-base text-gray-400 ">Drunk </h2>
          </div>
          <p className="text-slate-850 text-[20px] ml-[182px] mt-1">
            1250 ml <span className="text-gray-350 text-[20px]">/2000ml</span>
          </p>
        </div>
        <div className="mt-6">
          <IconButton
            bgColor="bg-teal-150"
            iconColor="text-cyan-150"
            marginTop="mt-0"
            marginRight="ml-[85px]"
            Icon={FaPlus}
            iconHeight="h-[24px]"
            iconWidth="w-[24px]"
          />
          <p className="text-cyan-150 text-xs mt-3 ml-20">Add Water</p>
        </div>
      </div>
    </div>
  );
}

export default Exercises;
