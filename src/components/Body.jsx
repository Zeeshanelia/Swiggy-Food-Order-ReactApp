import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export const Body = () => {
    const [sliding, setSliding] = useState(0);
    const [slider, setSlider] = useState([
        { title: 'Daal', Thumbnail: '/img/daal.jpg' },
        { title: 'Rice', Thumbnail: '/img/rice.jpg' },
        { title: 'Pizza', Thumbnail: '/img/pizza.jpeg' },
        { title: 'Allo Bhujia', Thumbnail: '/img/allo bhujia.jpg' },
        { title: 'Burger', Thumbnail: '/img/burger.jpeg' },
        { title: 'Chaomian', Thumbnail: '/img/chaomian.jpeg' },
        { title: 'Fish', Thumbnail: '/img/fish.jpeg' },
        { title: 'Mutton', Thumbnail: '/img/mutton.jpeg' },
        { title: 'Nodles', Thumbnail: '/img/nodles.jpeg' },
        { title: 'Pasta', Thumbnail: '/img/pasta.jpg' },
        { title: 'Salads', Thumbnail: '/img/salads.jpeg' },
        { title: 'Sweet', Thumbnail: '/img/sweet.jpeg' },
        { title: 'Tikka Boti', Thumbnail: '/img/tikka.jpg' },
        { title: 'Daleem Roti', Thumbnail: '/img/26.jpeg' },
        { title: 'Malai Boti', Thumbnail: '/img/15.jpg' },
    ]);

    // Disable next button when there are fewer than 3 items left to slide
    const canMoveNext = sliding + 3 < slider.length;
    const canMovePrev = sliding > 0;

    const nextClick = () => {
        if (!canMoveNext) return;
        setSliding(sliding + 3); // Move next by 3 items
    };

    const prevClick = () => {
        if (!canMovePrev) return;
        setSliding(sliding - 3); // Move previous by 3 items
    };

    return (
        <>
            <div className="mx-auto max-w-[66rem] my-5">
                <div className="flex justify-between">
                    <div className="font-bold text-xl ml-[.2rem]">What's on your mind?</div>
                    <div className="flex">
                        <div
                            onClick={prevClick}
                            className={`w-8 h-8 rounded-full ${canMovePrev ? 'bg-gray-400' : 'bg-gray-200'} mx-1 flex items-center justify-center`}
                        >
                            <FaArrowLeft />
                        </div>

                        <div
                            onClick={nextClick}
                            className={`w-8 h-8 rounded-full ${canMoveNext ? 'bg-gray-400' : 'bg-gray-200'} mx-1 flex items-center justify-center`}
                        >
                            <FaArrowRight />
                        </div>
                    </div>
                </div>

                {/* Displaying the slider items */}
                <div className="flex overflow-hidden gap-1 my-2">
                    {slider.map((item, index) => {
                        return (
                            <div
                                style={{
                                    transform: `translateX(${sliding * -100}%)`,
                                    transition: "transform 0.3s ease",
                                }}
                                key={index}
                                className="shrink-0 mr-[0.2rem] mx-3"
                            >
                                <img src={item.Thumbnail} alt={item.title} className="w-24 h-24 items-center rounded-full" />
                                <div className="text-center font-medium mt-1">{item.title}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <hr />
            <div className="mt-5"></div>
        </>
    );
};
