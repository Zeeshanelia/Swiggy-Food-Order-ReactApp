import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export const Body = () => {
    const [slider, setSlider] = useState([
        {
            title: 'Daal',
            Thumbnail: '/img/1.jpg',
        },
        {
            title: 'Rice',
            Thumbnail: '/img/2.jpg',
        },
        {
            title: 'Pizza',
            Thumbnail: '/img/3.jpg',
        },
    ]);

    return (
        <>
            <div className="mx-auto max-w-[65rem] my-3">
                <div className="flex justify-between">
                    <div className="font-bold text-xl">What's on your mind?</div>
                    <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-gray-400 mx-1 flex items-center justify-center">
                            <FaArrowLeft />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-400 mx-1 flex items-center justify-center">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>

                {/* Displaying the slider items */}
                <div className="flex overflow-x-auto">
                    {slider.map((item, index) => {
                        return (
                            <div key={index} className="flex-shrink-0 mx-3">
                                <img src={item.Thumbnail} alt={item.title} className="w-24 h-24 rounded-full" />
                                <div className="text-center mt-1">{item.title}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
