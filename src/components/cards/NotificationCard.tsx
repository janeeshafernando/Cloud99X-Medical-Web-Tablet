import ProfilePicture from "../../assets/doctor-profile.png";

function NotificationCard() {
  return (
    <div>
      <div className="mt-8 ml-40 flex justify-between items-center w-[270px]">
        <h3 className="text-cyan-150 text-[18px] font-normal">Notifications</h3>
        <p className="text-gray-350 text-[16px] font-normal">26 Aug 2019</p>
      </div>

      <div className="bg-white w-[300px] h-[350px] rounded-[30px] shadow-md mt-5 ml-36 p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-350 rounded-full h-[10px] w-[10px]" />
            <h3 className="text-lg font-medium">Kognum</h3>
          </div>
          <p className="text-base font-normal">10mg</p>
        </div>

        <div className="flex gap-5 mt-4">
          {["MON", "WED", "FRI", "SUN"].map((day) => (
            <span key={day} className="text-cyan-150 text-xs font-normal">
              {day}
            </span>
          ))}
        </div>

        <p className="text-gray-350 text-sm mt-2">
          2 times in a day before food
        </p>

        <div className="mt-6 flex items-center ml-[-15px]">
          <img
            src={ProfilePicture}
            alt="Dr. Isabella Bowers"
            className="w-14 h-14 rounded-full"
          />
          <div className="mt-[-10px]">
            <h4 className="text-sm font-normal">Dr. Isabella Bowers</h4>
            <p className="text-gray-350 text-xs font-light mt-1">
              California Hospital Medical Center
            </p>
          </div>
        </div>

        <div className="mt-3">
          <h4 className="font-medium text-lg">Surgeon</h4>
          <p className="text-gray-500">Spinal pain</p>
        </div>

        <div className="mt-4 flex justify-between">
          <div>
            <p className="text-cyan-150 text-sm">Date</p>
            <p className="text-base font-medium">26 Aug 2019</p>
          </div>
          <div>
            <p className="text-cyan-150 text-sm">Time</p>
            <p className="text-base font-medium">12:45 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
