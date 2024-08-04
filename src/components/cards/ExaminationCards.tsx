import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ExaminationItem {
  title: string;
  date: string;
  status: string;
  needAnalysis?: boolean;
}

const examinationData: ExaminationItem[] = [
  {
    title: "Hypertensive crisis",
    date: "21 Jul, 2019",
    status: "Ongoing treatment",
    needAnalysis: false,
  },
  {
    title: "Osteoporosis",
    date: "18 Jul, 2019",
    status: "Incurable",
    needAnalysis: true,
  },
  {
    title: "Hypertensive crisis",
    date: "21 Jul, 2019",
    status: "Examination",
    needAnalysis: false,
  },
  {
    title: "Hypertensive crisis",
    date: "21 Jul, 2019",
    status: "Ongoing treatment",
    needAnalysis: false,
  },
  {
    title: "Osteoporosis",
    date: "18 Jul, 2019",
    status: "Incurable",
    needAnalysis: true,
  },
  {
    title: "Hypertensive crisis",
    date: "21 Jul, 2019",
    status: "Examination",
    needAnalysis: false,
  },
  {
    title: "Hypertensive crisis",
    date: "21 Jul, 2019",
    status: "Ongoing treatment",
    needAnalysis: false,
  },
  {
    title: "Osteoporosis",
    date: "18 Jul, 2019",
    status: "Incurable",
    needAnalysis: true,
  },
  {
    title: "Hypertensive crisis",
    date: "21 Jul, 2019",
    status: "Examination",
    needAnalysis: false,
  },
];

function ExaminationCards() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    };

  return (
    <div>
      <div className="ml-10 mt-2">
        <Slider {...settings}>
          {examinationData.map((item: ExaminationItem, index: number) => (
            <div key={index} className="pr-4">
              <div
                className={`relative p-4 h-[122px] w-[268px] bg-white rounded-lg shadow-sm 
                            before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2 
                            ${
                              item.status === "Ongoing treatment"
                                ? "before:bg-gradient-to-b  before:to-teal-250 before:from-sky-150"
                                : item.status === "Incurable"
                                ? "before:bg-gradient-to-b  before:to-red-350 before:from-red-550"
                                : "before:bg-gradient-to-b  before:to-stone-350 before:from-neutral-250"
                            }`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-gray-350 text-sm mb-3">{item.date}</p>
                  {item.needAnalysis && (
                    <span className="text-orange-350 text-xs font-bold mb-2">
                      Need analyzes
                    </span>
                  )}
                </div>
                <h3 className="text-slate-850 font-semibold text-lg">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center">
                  <p
                    className={
                      "text-gray-350 mt-2 inline-block rounded-full text-base"
                    }
                  >
                    {item.status}
                  </p>
                  {item.needAnalysis && (
                    <span className="bg-orange-350 w-4 h-4 rounded-full mt-2" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ExaminationCards;