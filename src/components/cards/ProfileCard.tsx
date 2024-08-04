interface DataField {
  label: string;
  value: string | number;
  unit?: string;
}

interface ProfileCardProps {
  name: string;
  subtitle?: string;
  avatarUrl: string;
  dataFields: DataField[];
  lastElementColor?: string; 
}

function ProfileCard({
  name,
  subtitle,
  avatarUrl,
  dataFields,
  lastElementColor = "text-slate-850", 
}: ProfileCardProps) {
  return (
    <div className="bg-white rounded-[30px] ml-36 mt-10 shadow-md w-[300px] h-[250px]">
      <div className="flex flex-col items-center py-2">
        <img
          src={avatarUrl}
          alt={name}
          className="h-[110px] w-[110px] rounded-full object-cover mt-[-30px]"
        />
        <h2 className="text-[18px] font-medium text-slate-850 mt-[-5px]">{name}</h2>
        {subtitle && <p className="text-gray-350 font-light text-[14px] mt-2">{subtitle}</p>}
        <div className="flex justify-between gap-6 m-5">
          {dataFields.map((field, index) => (
            <div key={index} className="text-center">
              <p className="text-cyan-150 text-[12px]">{field.label}</p>
              <p className={`${index === dataFields.length - 1 ? lastElementColor : "text-slate-850"} text-[18px] font-medium`}>
                {field.value}
                {field.unit && (
                  <span className={`text-[14px] ${index === dataFields.length - 1 ? lastElementColor : "text-slate-850"}`}> {field.unit}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
