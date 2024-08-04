interface TrainingOptionProps {
  icon: string;
  title: string;
  calories: number;
}

function TrainingOption({ icon, title, calories }: TrainingOptionProps) {
  return (
    <div className="flex items-center gap-4 rounded-[28px] px-2">
      <img src={icon} alt={title} />
      <div className="mb-5 -ml-6">
        <p className="text-[20px]">{title}</p>
        <p className="text-gray-350">{calories} kcal / h</p>
      </div>
    </div>
  );
}

export default TrainingOption;
