import React from 'react'

export default function Built() {
  return (
    <div className="p-5 m-5  ">
      <h1 className="text-4xl font-extrabold flex justify-center">
        Built To Handle What Matters most
      </h1>
      <div className="   grid lg:grid-cols-3  sm:grid-cols-1  text-center pt-5 m-5 p-3 gap-4  ">
        <div
          className="  h-40 w-80 border-l-gray-400 
        hover:scale-108 duration-400
        
         border-l-2   pt-10  rounded-3xl shadow-lg "
        >
          <h1 className="  flex justify-center text-2xl font-bold text-gray-400">
            500+
          </h1>
          <p className="flex justify-center items-center ">
            Infratucture project completed
          </p>
        </div>
        <div
          className=" h-40 w-80 border-l-gray-400 border-l-2
        hover:scale-108 duration-400
        pt-10  rounded-3xl shadow-lg"
        >
          <h1 className="  flex justify-center text-2xl font-bold text-gray-400">
            99.9%
          </h1>
          <p>System uptime across deployment</p>
        </div>
        <div
          className=" h-40 w-80 border-l-gray-400 border-l-2 
        hover:scale-108 duration-400
        pt-10  rounded-3xl shadow-lg"
        >
          <h1 className="  flex justify-center text-2xl font-bold text-gray-400">
            40%
          </h1>
          <p>Average cost reduction for clients</p>
        </div>
      </div>
    </div>
  );
}
