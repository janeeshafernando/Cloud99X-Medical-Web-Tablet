import ProfileCard from "../components/cards/ProfileCard";
import ProfilePicture from "../assets/photo.svg";
import Meals from "../components/content/Meals";
import MealTrackerButtons from "../components/atoms/MealTrackerButtons";
import CalorieCounterCard from "../components/cards/CalorieCounterCard";
import WaterLevelCard from "../components/cards/WaterLevelCard";


function Tracker() {
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
        <CalorieCounterCard />
        <WaterLevelCard />
      </div>
      <div className="w-2/3 mt-2 3xl:ml-[-30px] 2xl:ml-[90px]">
      <Meals />
      </div>
    </div>
  );
}

export default Tracker;
