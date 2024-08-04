import ProfileCard from "../components/cards/ProfileCard";
import ProfilePicture from "../assets/photo.svg";
import NotificationCard from "../components/cards/NotificationCard";
import CreditCard from "../components/cards/CreditCard";
import Examinations from "../components/content/Examinations";

function Dashboard() {
  return (
    <div className="flex 3xl:ml-[-100px] 2xl:ml-[-100px]">
      <div className="w-1/3">
        <ProfileCard
          name="Bess Willis"
          subtitle="24 years, California"
          avatarUrl={ProfilePicture}
          dataFields={[
            { label: "Blood", value: "B" },
            { label: "Height", value: 170, unit: "cm" },
            { label: "Weight", value: 60, unit: "kg" },
          ]}
        />
        <NotificationCard />
        <CreditCard />
      </div>
      <div className="w-2/3 mt-2 3xl:ml-[-60px] 2xl:ml-[60px]">
        <Examinations />
      </div>
    </div>
  );
}
export default Dashboard;


