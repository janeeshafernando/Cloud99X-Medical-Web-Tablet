import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function MealTrackerButtons() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('meals');

  useEffect(() => {
    // Set the initial active button based on the current route
    if (location.pathname === '/exercise') {
      setActiveButton('exercises');
    } else {
      setActiveButton('meals');
    }
  }, [location.pathname]);

  const handleMealsClick = () => {
    setActiveButton('meals');
    navigate('/tracker');
  };

  const handleExercisesClick = () => {
    setActiveButton('exercises');
    navigate('/exercise');
  };

  const getButtonClass = (buttonType: string) => {
    const baseClass = "rounded-2xl w-[118px] h-[48px] flex items-center justify-center";
    const activeClass = "bg-cyan-150 text-white";
    const inactiveClass = "bg-cyan-150 bg-opacity-20 text-cyan-150";

    return `${baseClass} ${buttonType === activeButton ? activeClass : inactiveClass}`;
  };

  return (
    <div className="ml-4 lg:ml-44 3xl:ml-[155px] mt-7">
      <div className="flex space-x-2">
        <button 
          onClick={handleMealsClick}
          className={`${getButtonClass('meals')} 2xl:px-8 2xl:mr-8`}
        >
          Meals
        </button>
        <button 
          onClick={handleExercisesClick}
          className={`${getButtonClass('exercises')} 2xl:px-6`}
        >
          Exercises
        </button>
      </div>
    </div>
  );
}

export default MealTrackerButtons;