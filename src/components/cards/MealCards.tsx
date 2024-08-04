import { PiEyeClosedDuotone } from "react-icons/pi";
import IconButton from "../atoms/IconButton";
import { FaPlus } from 'react-icons/fa6';

const mealData = [
  { title: "Breakfast", status: "Eaten", calories: "395 kcal", type: "eaten" },
  { title: "Lunch", status: "Eaten", calories: "567 kcal", type: "eaten" },
  {
    title: "Dinner",
    status: "Recommended",
    calories: "300 kcal",
    type: "recommended",
  },
];

function MealCards() {
  return (
    <div className="flex space-x-4">
      {mealData.map((meal, index) => (
        <div
          key={index}
          className="w-[238px] h-[120px] flex justify-between items-center"
        >
          <div>
            <h2 className="text-[22px] font-light mt-3 ml-4">{meal.title}</h2>
            <p className="text-gray-350 font-normal mt-3 ml-4">{meal.status}</p>
            <p
              className={`${
                index === 2
                  ? "text-gray-300 text-[18px]"
                  : "text-slate-850 text-[20px]"
              } font-normal ml-4`}
            >
              {meal.calories}
            </p>
          </div>
          {meal.type === "eaten" ? (
             <IconButton
             bgColor="bg-teal-150"
             iconColor="text-cyan-150"
             marginTop="mt-14"
             marginRight="mr-0"
             Icon={PiEyeClosedDuotone}
             iconHeight="h-[30px]"
             iconWidth="w-[30px]"
           />
          ) : (
            <IconButton
            bgColor="bg-orange-350"
            iconColor="text-white"
            marginTop="mt-14"
            marginRight="mr-3"
            Icon={FaPlus}
            iconHeight="h-[24px]"
            iconWidth="w-[24px]"
          />
          )}
        </div>
      ))}
    </div>
  );
}

export default MealCards;
