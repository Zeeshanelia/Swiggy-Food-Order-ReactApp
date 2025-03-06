import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { TbStar } from "react-icons/tb";
import { TopRestourent } from "./TopRestourent";

export const OnYourMindSection = () => {
    const [sliding, setSliding] = useState(0); // Track sliding state
    const [slider, setSlider] = useState([
        { thumbnail: '/img/On Your Mind/2.jpg', price: '40% off above Rs: 500', title: 'Pizza', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>, more: 'Italian: Pizza Pasta Lasagna' },
        { thumbnail: '/img/On Your Mind/3.jpg', price: '40% off above Rs: 300', title: '3', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>, more: 'Pakistani, Afgani, Many More..' },
        { thumbnail: '/img/On Your Mind/4.jpg', price: '40% off above Rs: 300', title: '4', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>, more: 'Spanish: Paella Tapas Churros' },
        { thumbnail: '/img/On Your Mind/5.jpg', price: '40% off above Rs: 300', title: '5', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>, more: 'Chines, Asians, Tibetan, Desserts Rohini' },
        { thumbnail: '/img/On Your Mind/6.jpg', price: '40% off above Rs: 300', title: 'Burger', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>, more: 'Mexican, Tacos, Enchiladas, Desserts Rohini' },
        { thumbnail: '/img/On Your Mind/8.jpg', price: '40% off above Rs: 300', title: 'Burger', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>, more: 'Japanese, Sushi, Ramen' },
        { thumbnail: '/img/On Your Mind/10.jpg', price: '40% off above Rs: 300', title: 'Burger', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>, more: 'Chines, Asians, Tibetan, Desserts Rohini' },
        { thumbnail: '/img/On Your Mind/11.jpg', price: '40% off above Rs: 300', title: 'Burger', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>, more: 'Chines, Asians, Tibetan, Desserts Rohini' },
        { thumbnail: '/img/On Your Mind/13.jpg', price: '40% off above Rs: 300', title: 'Burger', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>, more: 'Chines, Asians, Tibetan, Desserts Rohini' },
    ]);

    // Display 3 items per slide and prevent moving when there are fewer than 3 items left
    const nextClick = () => {
        if (sliding + 3 >= slider.length) return;
        setSliding(sliding + 3); // Move next by 3 items
    };

    const prevClick = () => {
        if (sliding === 0) return;
        setSliding(sliding - 3); // Move previous by 3 items
    };

    return (
        <div className="mx-auto max-w-[66rem] my-7">
            <div className="flex justify-between">
                <div className="font-bold text-xl ml-[.2rem]">Top restaurant chains in Delhi</div>
                <div className="flex">
                    <div
                        onClick={prevClick}
                        className={`w-8 h-8 rounded-full ${sliding === 0 ? 'bg-gray-200' : 'bg-gray-400'} mx-1 flex items-center justify-center cursor-pointer`}
                    >
                        <FaArrowLeft />
                    </div>
                    <div
                        onClick={nextClick}
                        className={`w-8 h-8 rounded-full ${sliding + 3 >= slider.length ? 'bg-gray-200' : 'bg-gray-400'} mx-1 flex items-center justify-center cursor-pointer`}
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            {/* Displaying the slider items */}
            <div className="flex overflow-hidden gap-2 my-2">
                {slider.slice(sliding, sliding + 5).map((item, index) => (
                    <div key={index} className="shrink-0">
                        <TopRestourent
                            thumbnail={item.thumbnail}
                            price={item.price}
                            title={item.title}
                            rating={item.rating}
                            more={item.more}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
