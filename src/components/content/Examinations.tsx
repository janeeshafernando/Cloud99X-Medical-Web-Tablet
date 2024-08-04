import DateSelectorCard from "../cards/DateSelectorCard";
import HealthCurveChart from "../charts/HealthCurveChart";
import ExaminationCards from "../cards/ExaminationCards";
import TimeFrameButtons from "../atoms/TimeFrameButtons";
import IconButton from "../atoms/IconButton";
import { PiEyeClosedDuotone } from "react-icons/pi";

function Examinations() {
  return (
    <div className="bg-white ml-20 w-full h-full rounded-[70px] overflow-hidden 2xl:overflow-x-auto">
      <div className="mt-10 ml-12 flex items-center gap-5 mb-5">
        <h2 className="text-cyan-150 text-[28px]">Examinations</h2>
        <div className="flex items-center mt-4 ml-[500px]">
          <IconButton
            bgColor="bg-teal-150"
            iconColor="text-cyan-150"
            marginTop="mt-0"
            marginRight="mr-0"
            Icon={PiEyeClosedDuotone}
            iconHeight="h-[30px]"
            iconWidth="w-[30px]"
          />
          <p className="text-cyan-150 font-medium text-lg ml-4">See All</p>
        </div>
      </div>
      <div className="w-max">
        <ExaminationCards />
        <div className="flex items-center mt-2">
          <h3 className="text-cyan-150 text-[28px] mr- ml-20">Health Curve</h3>
          <TimeFrameButtons />
        </div>
        <div className="mt-8 ml-16 h-[300px] w-[800px] text-white">
          <HealthCurveChart />
        </div>

        <div className="flex items-center gap-8 pb-3">
          <div className="mt-5 ml-12">
            <h3 className="text-cyan-150 text-[28px]">Nearest Treatment</h3>
            <p className=" mt-3 text-base font-medium">August 2019</p>
            <DateSelectorCard
              showGreenDot={true}
              backgroundColor="white"
              showShadow={true}
              width="w-[367px]"
              height="h-[86px]"
              gap="gap-5"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-cyan-150 text-[28px] mt-8">Advice</h3>
            <p className="text-sm w-[300px] mt-3">
              The clinical service is consultant-led and available on a 24-hour
              basis
            </p>
            <p className="text-sm font-medium mt-3">More info via the link</p>
            <div className="w-[295px]">
              <a
                href="https://www.heftpathology.com/Haematology-Clinical-Advice"
                className="text-cyan-150 text-xs mt-3"
              >
                https://www.heftpathology.com/Haematology-Clinical-Advice
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Examinations;
