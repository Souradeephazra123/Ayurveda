"use client";
import React, { useState } from "react";
import { FaSignal } from "react-icons/fa";
import { CiWifiOn } from "react-icons/ci";
import { CiBatteryFull } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
const Homepage = () => {
  //star cliking   logic
  const [stars, setStars] = useState(Array(5).fill(false));
  const [communicationStar, setCimmunicationStar] = useState(
    Array(5).fill(false)
  );
  const [recommendStar, setRecommendStar] = useState(Array(5).fill(false));
  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setIsDisLike] = useState(false);

  const handleClick = (index) => {
    setStars(stars.map((_, idx) => idx <= index));
  };
  const handleClickCommunication = (index) => {
    setCimmunicationStar(communicationStar.map((_, idx) => idx <= index));
  };
  const handleClickRecommendation = (index) => {
    setRecommendStar(recommendStar.map((_, idx) => idx <= index));
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Add leading zero to minutes if less than 10
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + ":" + minutes;
  };
  const currentHoursAndMinutes = formatTime(new Date());

  const arr = ["Safety", "Luxury", "Comfort"];
  const [active, setActive] = useState("Safety");

  return (
    <div className=" bg-image object-cover object-center w-full h-auto flex flex-col justify-between gap-5 ">
      <div className=" h-16 w-full bg-black"></div>
      <div className=" px-10">
        <div className="flex flex-col gap-3 rounded-2xl bg-white border px-3">
          <div className=" flex justify-between">
            <div>{currentHoursAndMinutes}</div>
            <div className=" flex gap-2 sm:gap-4">
              <FaSignal size={20} />
              <CiWifiOn size={20} />
              <CiBatteryFull size={20} />
            </div>
          </div>
          <IoMdClose size={20} />
          <p className=" text-2xl font-bold">Leave a review</p>
          <div className=" flex flex-col gap-10">
            <div className=" flex flex-col gap-2">
              <p className="text-2xl font-bold">Safety</p>
              <p>Please rate of your expereince</p>
              <div className=" flex gap-1 bg-gray-200">
                {stars.map((star, index) => (
                  <IoStarSharp
                    size={40}
                    key={index}
                    onClick={() => handleClick(index)}
                    color={star ? "yellow" : "white"}
                  />
                ))}
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <p className=" text-2xl font-bold">Communication</p>
              <p>Safety</p>
              <p>Please rate of your expereince</p>
              <div className=" flex gap-1 bg-gray-200">
                {communicationStar.map((star, index) => (
                  <IoStarSharp
                    size={40}
                    key={index}
                    onClick={() => handleClickCommunication(index)}
                    onTouchEnd={() => handleClickCommunication(index)}
                    color={star ? "yellow" : "white"}
                  />
                ))}
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <p className=" text-2xl font-bold">
                Would you recommend Trausti ?
              </p>
              <p>Please rate of your expereince</p>
              <div className=" flex gap-5 ">
                <div className=" flex gap-2 items-center justify-center ">
                  {isLike ? (
                    <AiFillLike
                      size={40}
                      color="yellow"
                      onClick={() => setIsLike(false)}
                    />
                  ) : (
                    <AiOutlineLike
                      size={40}
                      color="gray"
                      onClick={() => {
                        setIsLike(true);
                        setIsDisLike(false);
                      }}
                    />
                  )}
                  <p>Yes</p>
                </div>
                <div className=" flex gap-2 items-center justify-center">
                  {isDisLike ? (
                    <AiFillDislike
                      size={40}
                      color="yellow"
                      onClick={() => setIsDisLike(false)}
                    />
                  ) : (
                    <AiOutlineDislike
                      size={40}
                      color="gray"
                      onClick={() => {
                        setIsDisLike(true);
                        setIsLike(false);
                      }}
                    />
                  )}{" "}
                  <p>No</p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <p className="text-2xl font-bold">Praise</p>
              <p>Please rate of your expereince</p>
              <div className=" flex gap-2">
                {arr.map((item, index) => (
                  <p
                    onClick={() => setActive(item)}
                    key={index}
                    className={`px-2 py-0.5 rounded-2xl ${
                      active === item ? " bg-green-400" : " bg-gray-400"
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-16 w-full bg-black"></div>
    </div>
  );
};

export default Homepage;
