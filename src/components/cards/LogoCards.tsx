interface LogoCardProps {
  src: string;
  alt: string;
}

function LogoCards({src, alt}: LogoCardProps)  {
  return (
    <div className="w-[124px] h-[45px] bg-white shadow-lg rounded-2xl flex items-center justify-center">
      <img src={src} alt={alt} className="max-h-[26px] max-w-[96px] items-center justify-center flex" />
    </div>
  );
}

export default LogoCards;