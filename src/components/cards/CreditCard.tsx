import { GoGear } from "react-icons/go";
import IconButton from "../atoms/IconButton";

function CreditCard() {
  return (
    <div className="bg-white rounded-3xl p-4 shadow-md w-[300px] h-[120px] ml-36 mt-8 mb-5">
      <div className="flex justify-between items-center">
        <div className="bg-orange-350 text-white rounded-[20px] p-4 flex-grow mr-4 w-[192px] h-[88px]">
          <div className="text-sm font-medium mb-3 mt-1">5432</div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-sm">Bess Willis</div>
            <div className="text-sm font-bold">VISA</div>
          </div>
        </div>
        <div className="text-center">
          <div className="rounded-[16px] p-3 mr-3 mb-1 w-[48px] h-[48px]">
          <IconButton
            bgColor="bg-teal-150"
            iconColor="text-cyan-150"
            marginTop="mt-0"
            marginRight="mr-0"
            Icon={GoGear}
            iconHeight="h-[24px]"
            iconWidth="w-[24px]"
          />
          </div>
          <div className="text-cyan-150 ml-2 mt-3 text-sm">Settings</div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;