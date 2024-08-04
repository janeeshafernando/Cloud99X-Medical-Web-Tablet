import { FaPlus } from 'react-icons/fa6';
import IconButton from '../atoms/IconButton';

interface DishCardProps {
  image: string;
  title: string;
  calories: number;
}

function DishCard({ image, title, calories }: DishCardProps) {
  return (
    <div className="w-[214px] h-[202px] bg-white shadow-lg rounded-[30px] flex flex-col mt-16 mb-4">
      <div className="flex justify-center -mt-16">
        <img
          src={image}
          alt={title}
          className="w-[136px] h-[136px] object-cover rounded-full"
        />
      </div>
      <div className="px-4 flex">
        <h2 className="text-slate-850 text-lg h-[48px] mt-2">{title}</h2>
      </div>
      <div className="flex items-center justify-between px-4 py-2">
        <p className="text-gray-350 text-lg">{calories} kcal</p>
        <IconButton
            bgColor="bg-teal-150"
            iconColor="text-cyan-150"
            marginTop="mt-0"
            marginRight="mr-0"
            Icon={FaPlus}
            iconHeight="h-[24px]"
            iconWidth="w-[24px]"
          />
      </div>
    </div>
  );
}

export default DishCard;
