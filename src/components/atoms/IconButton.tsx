import { IconType } from "react-icons";

interface IconButtonProps {
  bgColor: string;
  iconColor: string;
  marginTop: string;
  marginRight: string;
  Icon: IconType;
  iconWidth: string;
  iconHeight: string;
}

function IconButton({
  bgColor,
  iconColor,
  marginTop,
  marginRight,
  Icon,
  iconHeight,
  iconWidth,
}: IconButtonProps) {
  return (
    <div
      className={`w-[48px] h-[48px] ${bgColor} rounded-2xl flex items-center justify-center
       ${marginTop} ${marginRight}`}
    >
      <Icon className={`${iconHeight} ${iconWidth} ${iconColor}`} />
    </div>
  );
}

export default IconButton;
