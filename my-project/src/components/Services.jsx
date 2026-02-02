import React from "react";
import { RiRobot3Fill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

function Services() {
  return (
    <div className="  my-20   px-8  ">
      <h1 className="text-4xl font-bold  flex  justify-center    ">
        Our Services
      </h1>
      <div className="grid lg:grid-cols-2  sm:grid-cols-1   ">
        <div className="  mt-6 p-8  ">
          <img
            className="h-120 w-110  rounded-3xl  shadow-lg "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6G1m_2Q-fhcFwCvRFfELFGsk0ctjHsIRHg&s="
            alt=""
          />
        </div>
        <div className="flex   justify-center flex-col  ">
          <h1 className="text-3xl font-bold flex gap-3 ">
            <RiRobot3Fill />
            IOT & Robotics
          </h1>
          <p className="text-md  pl-10 ">
            Robotics Solutions provide intelligent, automated systems designed
            to improve efficiency, accuracy, and productivity across industries.
          </p>

          <h1 className="text-3xl font-bold mt-10  flex gap-3 ">
            {" "}
            <MdCastForEducation />
            STEM Education
          </h1>
          <p className="text-md pl-10 ">
            Web development is the process of building and maintaining websites
            and web applications. It includes designing user interfaces,
            creating server-side logic, and ensuring a website is fast, secure,
            and user-friendly.
          </p>

          <h1 className="text-3xl font-bold  mt-10  flex gap-3 ">
            <FaLaptopCode />
            Web Development
          </h1>
          <p className="text-md pl-10">
            Business Management is the process of planning, organizing, and
            controlling resources to achieve business goals efficiently and
            effectively.
          </p>

          <h1 className="text-3xl font-bold  mt-10   flex gap-3">
            <HiUserGroup />
            Business Development
          </h1>
          <p className="text-md pl-10">
            Business Management is the process of planning, organizing, and
            controlling resources to achieve business goals efficiently and
            effectively.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
