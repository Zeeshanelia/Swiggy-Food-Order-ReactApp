import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { TbStar } from "react-icons/tb";

export const OnYourMindSection = () => {
    const [sliding, setSliding] = useState(0)
    const [slider, setSlider] = useState([


       
        {
            More: 'Chines , Asians,Tibetan, Desserts Rohini  More',
            Discription: <><TbStar /> 4.1 25-30 mins</>,
            title: 'Burger',
            Thumbnail: '/img/burger.jpeg',
        },
        {
            
            More: 'Chines , Asians,Tibetan, Desserts Rohini  More',
            Discription: <><TbStar /> 4.1 25-30 mins</>,
            title: 'Chaomian',
            Thumbnail: '/img/chaomian.jpeg',
        },
        {
            title: 'Fish',
            Thumbnail: '/img/fish.jpeg',
        },
        {
            title: 'Mutton',
            Thumbnail: '/img/mutton.jpeg',
        },
        {
            title: 'Nodles',
            Thumbnail: '/img/nodles.jpeg',
        },

        {
            title: 'Sweet',
            Thumbnail: '/img/sweet.jpeg',
        },
        {
            title: 'Tikka Boti',
            Thumbnail: '/img/tikka.jpg',
        },
        {
            title: 'Daleem Roti',
            Thumbnail: '/img/26.jpeg',
        },
        {
            title: 'Biryani',
            Thumbnail: '/img/27.jpeg',
        },
        {
            title: 'Chapli Kabab',
            Thumbnail: '/img/28.jpeg',
        },
        {
            title: 'Chapli Kabab',
            Thumbnail: '/img/28.jpeg',
        },
    ]);

    const nextClick = () => {
        // Prevent moving if there are fewer than 8 images left
        if (sliding + 8 >= slider.length) return false;
        setSliding(sliding - 3); // Move next by 3 items
    };

    const prevClick = () => {
        // Prevent moving to negative index
        if (sliding === 0) return false;
        setSliding(sliding + 3); // Move previous by 3 items
    };


    return (
        <>
            <div className="mx-auto max-w-[66rem] my-5">
                <div className="flex justify-between ">
                    <div className="font-bold text-xl ml-[.2rem]">Top restourent chains in Dehli  </div>
                    <div className="flex">

                        <div onClick={prevClick} className="w-8 h-8 rounded-full bg-gray-400 mx-1 flex items-center justify-center">
                            <FaArrowLeft />
                        </div>

                        <div onClick={nextClick} className="w-8 h-8 rounded-full bg-gray-400 mx-1 flex items-center justify-center">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>

                {/* Displaying the slider items */}
                <div className="flex overflow-hidden    my-2">
                    {slider.map((item, index) => {
                        return (
                            <div className=" shrink-0 
                            mr-[0.2rem]  mx-3 "

                                style={{
                                    transform: `translateX(${sliding * 100}%)`,
                                    transition: "transform 0.3s ease"
                                }} key={index} >

                                <img src={item.Thumbnail}
                                    className="w-56 h-30  rounded" />


                               <div>
                               <div className=" font-medium mt-1">{item.title}</div>
                                <div className=" text-xs flex ">
                                    {item.Discription}</div>
                                <div className=" text-xs text-gray-400">{item.More}</div>
                               </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* <hr className="mt-5" /> */}
        </>
    );
};
