interface TrainingCardProps {
  title: string;
  burned: string;
  spent: string;
  marginLeft: string;
}

function TrainingCard({ title, burned, spent, marginLeft }: TrainingCardProps) {
  return (
    <div className="mt-5 w-[280px] h-[149px] rounded-[30px] bg-white shadow">
      <div className="flex">
        <h2 className="text-[17px] text-gray-350 ml-6 mt-5">Training</h2>
        <h2 className="text-[17px] text-slate-850 mt-5 ml-20">{title}</h2>
      </div>
      <hr className="mt-3 border-t border-gray-350 bg-[#24645C] bg-opacity-10" />
      <div className="flex mt-3">
        <p className="text-[17px] text-gray-350 ml-6">Burned</p>
        <p className="text-[17px] text-slate-850 ml-[105px]">{burned}</p>
      </div>
      <div className="flex mt-3">
        <p className="text-[17px] text-gray-350 ml-6">Spend</p>
        <p className={`text-[17px] text-slate-850 ${marginLeft}`}>{spent}</p>
      </div>
    </div>
  );
}
export default TrainingCard
