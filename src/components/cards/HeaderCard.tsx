interface HeaderCardProps {
  message: string;
  emphasisText: string;
  imageSrc: string;
  altText: string;
}

function HeaderCard({
  message,
  emphasisText,
  imageSrc,
  altText,
}: HeaderCardProps) {
  return (
    <div className="w-[800px] h-[97px] rounded-[38px] bg-gradient-to-r from-[#16C0C0] to-[#089BAB] flex items-center justify-between px-8">
      <p className="text-white font-normal text-[20px]">
        <span className="font-medium">{emphasisText}</span> {message}
      </p>
      <div className="bg-white rounded-[29px] -mr-5">
        <img
          src={imageSrc}
          alt={altText}
          className="h-[77px] w-[77px] object-contain "
        />
      </div>
    </div>
  );
}

export default HeaderCard;


