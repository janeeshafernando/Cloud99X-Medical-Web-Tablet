import ProfileCard from "../components/cards/ProfileCard";
import ProfilePicture from "../assets/photo.svg";
import MealTrackerButtons from "../components/atoms/MealTrackerButtons";
import Exercises from "../components/content/Exercises";
import WorkoutProgressCard from "../components/cards/WorkoutProgressCard";

function ExerciseTracker() {
  return (
    <div className="flex 3xl:ml-[-90px] 2xl:ml-[-100px]">
      <div className="w-1/3">
        <ProfileCard
          name="Bess Willis"
          subtitle="24 years, California"
          avatarUrl={ProfilePicture}
          dataFields={[
            { label: "Weight", value: 60, unit: "kg" },
            { label: "Height", value: 170, unit: "cm" },
            { label: "Goal", value: 55, unit: "kg" },
          ]}
          lastElementColor="text-orange-350"
        />
        <MealTrackerButtons />
        <div>
          <div className="mt-5 ml-40 flex justify-between items-center w-[270px]">
            <h1 className="text-cyan-150 text-[18px] font-normal">Progress</h1>
            <p className="text-gray-350 text-[16px] font-normal">26 Aug 2019</p>
          </div>
        </div>
        <WorkoutProgressCard />
      </div>
      
      <div className="w-2/3 mt-2 3xl:ml-[-30px] 2xl:ml-[90px]">
        <Exercises />
      </div>
    </div>
  );
}

export default ExerciseTracker;
