import HeaderCard from "../cards/HeaderCard";
import Mermaid from "../../assets/mermaid.png";
import DateSelectorCard from "../cards/DateSelectorCard";
import HalfArrow from "../../assets/half-arrow.png";
import MealCards from "../cards/MealCards";
import ZucchiniDish from "../../assets/zucchini.png";
import PumpkinPuree from "../../assets/pumpkin.png";
import PineappleGuacamole from "../../assets/pineapple.png";
import ThaiSalad from "../../assets/thai.png";
import DishCard from "../cards/DishCard";
import LogoCard from "../cards/LogoCards";
import WalmartLogo from "../../assets/walmart-logo.png";
import AuchanLogo from "../../assets/auchan-logo.png";
import CarrefourLogo from "../../assets/carrefour-logo.png";
import WhiteHalfArrow from "../../assets/white-half-arrow.png";
import Slider from "react-slick";

const dishes = [
  { image: ZucchiniDish, title: "Crispy Zucchini Fritters", calories: 356 },
  { image: PumpkinPuree, title: "Pumpkin puree", calories: 370 },
  { image: PineappleGuacamole, title: "Pineapple Guacamole", calories: 409 },
  { image: ThaiSalad, title: "Thai Salad", calories: 278 },
  { image: ZucchiniDish, title: "Crispy Zucchini Fritters", calories: 356 },
  { image: PumpkinPuree, title: "Pumpkin puree", calories: 370 },
  { image: PineappleGuacamole, title: "Pineapple Guacamole", calories: 409 },
  { image: ThaiSalad, title: "Thai Salad", calories: 278 },
  { image: ZucchiniDish, title: "Crispy Zucchini Fritters", calories: 356 },
  { image: PumpkinPuree, title: "Pumpkin puree", calories: 370 },
  { image: PineappleGuacamole, title: "Pineapple Guacamole", calories: 409 },
  { image: ThaiSalad, title: "Thai Salad", calories: 278 },
];

function Meals() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const mealTypes = ["Breakfast", "Lunch", "Snack", "Dinner"];
  return (
    <div className="bg-white ml-20 w-full h-full rounded-[70px] overflow-hidden">
      <div className="mt-10 ml-12 flex items-center gap-5 mb-5">
        <HeaderCard
          emphasisText="Great Job!"
          message="Your water level is on top!"
          imageSrc={Mermaid}
          altText="Mermaid"
        />
      </div>
      <div className="flex justify-between items-center w-[770px] -mt-4">
        <p className="font-medium text-base ml-20 mt-[10px]">August 2019</p>
        <DateSelectorCard
          showGreenDot={false}
          backgroundColor=""
          showShadow={false}
          width="w-[367px]"
          height="h-[86px]"
          gap="gap-5"
        />
        <img src={HalfArrow} alt="arrow" className="mt-[10px]" />
        <p className="text-gray-350 font-light text-base mt-[10px]">
          September 2019
        </p>
      </div>
      <div className="mt-5 ml-12 flex items-center justify-between">
        <MealCards />
      </div>
      <div className="flex justify-between items-center space-y-4 mt-10">
        <h1 className="text-[28px] ml-14 3xl:ml-20 text-cyan-150">Healthy dishes</h1>
        <div className="flex space-x-3 mb-8 mr-[145px] 2xl:mr-[-200px] 3xl:mr-[200px]">
          {mealTypes.map((meal, index) => (
            <button
              key={meal}
              className={`w-[79px] h-[48px] rounded-2xl text-xs font-medium 
              ${
                index === mealTypes.length - 1
                  ? "bg-cyan-150 text-white"
                  : "bg-cyan-150 bg-opacity-20 text-cyan-150"
              }`}
            >
              {meal}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 ml-10 space-x-4">
        <Slider {...settings}>
          {dishes.map((dish, index) => (
            <DishCard
              key={index}
              image={dish.image}
              title={dish.title}
              calories={dish.calories}
            />
          ))}
        </Slider>
      </div>
      <div className=" mt-5 ml-14 mb-10 flex items-center space-x-20">
        <div className="flex items-center space-x-4">
          <LogoCard src={WalmartLogo} alt="Walmart" />
          <LogoCard src={AuchanLogo} alt="Auchan" />
          <LogoCard src={CarrefourLogo} alt="Carrefour" />
        </div>
        <div className=" flex items-center space-x-2">
          <p className=" text-orange-350 font-semibold text-[22px] flex items-center justify-between px-4">
            ORDER FOOD
          </p>
          <div
            className={`w-[48px] h-[48px] bg-orange-350 rounded-2xl flex items-center justify-center mt-0 mr-0`}
          >
            <img src={WhiteHalfArrow} className="h-[7px] w-[23px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meals;
