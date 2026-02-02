import React from 'react'
import { MdGrid3X3 } from 'react-icons/md'


export default function Offer() {
  return (
    <div className="p-5 m-5 ">
      <h1 className="text-4xl font-extrabold flex justify-center">
        Built To Handle What Matters most
      </h1>
      <div>
        <p className="mx-10 md:text-2xl items-center justify-between">
          Robo Edge gives you the tools to complete the complexity. Our
          solutions integrate seamlessly into what you already have ,letting you
          move faster without starting from scratch{" "}
        </p>
      </div>
      <div className="grid  lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10 ">
        <div className="  p-6  border-2 rounded-lg shadow-lg hover:scale-105 duration-300 ">
          <MdGrid3X3 size={50} className="text-purple" />
          <img
            className=" h-50 w-full rounded-3xl shadow-2xl bg-amber-700"
            src=""
            alt=""
          />
          <h1 className="text-2xl font-bold mt-4">Custom Solutions</h1>
          <p className="mt-2">
            Tailored to your unique business needs, ensuring optimal performance
            and efficiency.
          </p>
        </div>
        <div className="  p-6  border-2 rounded-lg shadow-lg hover:scale-105 duration-300 ">
          <MdGrid3X3 size={50} className="text-purple" />
          <img
            className=" h-50 w-full rounded-3xl shadow-2xl bg-amber-700"
            src=""
            alt=""
          />
          <h1 className="text-2xl font-bold mt-4">Scalable Architecture</h1>
          <p className="mt-2">
            Designed to grow with your business, accommodating increasing
            demands effortlessly.
          </p>
        </div>
        <div className="  p-6  border-2 rounded-lg shadow-lg hover:scale-105 duration-300 ">
          <MdGrid3X3 size={50} className="text-purple" />
          <img
            className=" h-50 w-full rounded-3xl shadow-2xl bg-amber-700"
            src=""
            alt=""
          />
          <h1 className="text-2xl font-bold mt-4">24/7 Support</h1>
          <p className="mt-2">
            Our dedicated team is available around the clock to assist you with
            any issues or inquiries.
          </p>
        </div>
        {/* <div className='flex justify-center  '>
          <Button className="bg-blue-400 p-3 px-5 ">Services</Button>
        </div> */}
      </div>
    </div>
  );
}
